import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function PUT(req: NextRequest) {
  try {
    // Vérifier l'authentification
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    const { name, avatar } = await req.json();

    // Validation des données
    if (!name || name.trim().length === 0) {
      return NextResponse.json({ error: 'Le pseudo est requis' }, { status: 400 });
    }

    if (name.trim().length < 2) {
      return NextResponse.json({ error: 'Le pseudo doit contenir au moins 2 caractères' }, { status: 400 });
    }

    if (name.trim().length > 50) {
      return NextResponse.json({ error: 'Le pseudo ne peut pas dépasser 50 caractères' }, { status: 400 });
    }

    // Vérifier l'unicité du pseudo
    const existingUser = await prisma.user.findFirst({
      where: {
        name: name.trim(),
        email: { not: session.user.email } // Exclure l'utilisateur actuel
      }
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Ce pseudo est déjà utilisé par un autre utilisateur' }, { status: 409 });
    }

    // Validation de l'URL de l'avatar si fournie
    if (avatar && avatar.trim().length > 0) {
      const avatarUrl = avatar.trim();
      // Accepter les URLs absolues et les chemins relatifs commençant par /
      if (!avatarUrl.startsWith('/') && !avatarUrl.startsWith('http')) {
        try {
          new URL(avatarUrl);
        } catch {
          return NextResponse.json({ error: 'URL de l\'avatar invalide' }, { status: 400 });
        }
      }
    }

    // Mettre à jour l'utilisateur
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: name.trim(),
        image: avatar?.trim() || null,
      },
    });

    return NextResponse.json({ 
      message: 'Profil mis à jour avec succès',
      user: {
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.image,
      }
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
