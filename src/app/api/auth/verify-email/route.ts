import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (!token || !email) {
      return NextResponse.json(
        { error: 'Token ou email manquant' },
        { status: 400 }
      );
    }

    // Vérifier le token
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        token,
        identifier: email,
        expires: {
          gt: new Date()
        }
      },
      include: {
        user: true
      }
    });

    if (!verificationToken) {
      return NextResponse.json(
        { error: 'Token invalide ou expiré' },
        { status: 400 }
      );
    }

    // Marquer l'email comme vérifié
    await prisma.user.update({
      where: { id: verificationToken.user.id },
      data: { emailVerified: new Date() }
    });

    // Supprimer le token de vérification
    await prisma.verificationToken.delete({
      where: { id: verificationToken.id }
    });

    return NextResponse.json({
      message: 'Email vérifié avec succès! Vous pouvez maintenant vous connecter.'
    });

  } catch (error) {
    console.error('Erreur vérification email:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
