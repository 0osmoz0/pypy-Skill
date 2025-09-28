import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json({ error: 'Code Python requis' }, { status: 400 });
    }

    // Simulation d'un interpréteur Python simple
    const result = executePythonCode(code);

    return NextResponse.json({ 
      output: result.output,
      error: result.error 
    });

  } catch (error) {
    console.error('Erreur lors de l\'exécution Python:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}

// Simulateur Python simple pour les missions
function executePythonCode(code: string): { output: string; error?: string } {
  try {
    // Nettoyer le code
    const cleanCode = code.trim();
    
    // Gestion spécifique pour le code de décryptage des codes de porte avec tests unitaires automatiques
    if (cleanCode.includes('decoder_code_porte') && cleanCode.includes('Mission: Décryptage des codes de porte')) {
      const outputs: string[] = [];
      
      // Vérifier si la fonction est implémentée correctement
      const hasCorrectImplementation = (cleanCode.includes('if code % 2 == 0:') || cleanCode.includes('if code %2 == 0:')) && 
                                      cleanCode.includes('return "pair - Accès normal"') &&
                                      cleanCode.includes('return "impair - Accès restreint"') &&
                                      cleanCode.includes('else:');
      
      // Vérifier s'il y a des erreurs de syntaxe spécifiques
      const hasSyntaxError = cleanCode.includes('code %2 = 0') || 
                            (cleanCode.includes('Codes pairs = Accès normal') && !cleanCode.includes('# Codes pairs = Accès normal')) ||
                            (cleanCode.includes('Codes impairs = Accès restreint') && !cleanCode.includes('# Codes impairs = Accès restreint'));
      
      const hasImplementation = hasCorrectImplementation && !hasSyntaxError;
      
      // Debug pour voir ce qui se passe
      console.log('Debug API:', {
        hasCorrectImplementation,
        hasSyntaxError,
        hasImplementation,
        cleanCode: cleanCode.substring(0, 200) + '...'
      });
      
      // Exécuter les tests unitaires automatiquement
      outputs.push('🧪 Tests unitaires en cours...');
      
      if (!hasImplementation) {
        outputs.push('❌ Test 1 échoué: 42 devrait être pair');
        outputs.push('❌ Test 2 échoué: 17 devrait être impair');
        outputs.push('❌ Test 3 échoué: 100 devrait être pair');
        outputs.push('❌ Test 4 échoué: 73 devrait être impair');
        outputs.push('⚠️  Certains tests ont échoué. Vérifiez votre code.');
        outputs.push('');
        
        if (hasSyntaxError) {
          outputs.push('🚨 Erreur de syntaxe détectée !');
          if (cleanCode.includes('code %2 = 0')) {
            outputs.push('❌ Utilisez == au lieu de = pour la comparaison');
          }
          if (cleanCode.includes('Codes pairs = Accès normal')) {
            outputs.push('❌ Le texte de retour doit être exactement "pair - Accès normal"');
          }
          if (cleanCode.includes('Codes impairs = Accès restreint')) {
            outputs.push('❌ Le texte de retour doit être exactement "impair - Accès restreint"');
          }
          outputs.push('');
        }
        
        outputs.push('💡 Indice: Utilisez l\'opérateur modulo (%) pour déterminer si un nombre est pair ou impair');
        outputs.push('💡 Un nombre est pair si le reste de sa division par 2 est 0');
        outputs.push('💡 N\'oubliez pas le else: pour gérer les nombres impairs');
      } else {
        outputs.push('✅ Test 1 réussi: 42 est bien pair');
        outputs.push('✅ Test 2 réussi: 17 est bien impair');
        outputs.push('✅ Test 3 réussi: 100 est bien pair');
        outputs.push('✅ Test 4 réussi: 73 est bien impair');
        outputs.push('🎉 Tous les tests sont passés ! Mission accomplie !');
      }
      
      return { output: outputs.join('\n') };
    }
    
    // Simulation des cas de base pour les missions
    if (cleanCode.includes('name = "Mathis"') && cleanCode.includes('print(f"Bonjour, {name} !")')) {
      return { output: 'Bonjour, Mathis !' };
    }
    
    if (cleanCode.includes('name = "Mathis"') && cleanCode.includes('print(f"Bonjour, {name}")')) {
      return { output: 'Bonjour, Mathis' };
    }
    
    // Gestion des variables avec f-strings
    const printMatches = cleanCode.match(/print\(f?"([^"]*\{[^}]+\}[^"]*)"\)/g);
    if (printMatches) {
      for (const match of printMatches) {
        if (match.includes('{name}')) {
          // Chercher la variable name
          const nameMatch = cleanCode.match(/name\s*=\s*"([^"]+)"/);
          if (nameMatch) {
            const name = nameMatch[1];
            const result = match.replace(/\{name\}/g, name).replace(/print\(f?"/, '').replace(/"\)/, '');
            return { output: result };
          }
        }
      }
    }
    
    // Gestion plus flexible des f-strings
    const fStringMatches = cleanCode.match(/print\(f"([^"]+)"\)/g);
    if (fStringMatches) {
      for (const match of fStringMatches) {
        if (match.includes('{name}')) {
          const nameMatch = cleanCode.match(/name\s*=\s*"([^"]+)"/);
          if (nameMatch) {
            const name = nameMatch[1];
            const template = match.replace(/print\(f"/, '').replace(/"\)/, '');
            const result = template.replace(/\{name\}/g, name);
            return { output: result };
          }
        }
      }
    }
    
    // Gestion des fonctions mathématiques simples
    if (cleanCode.includes('calculate_distance') && cleanCode.includes('math.sqrt')) {
      return { output: '5.0' };
    }
    
    if (cleanCode.includes('import math') && cleanCode.includes('math.sqrt((3-0)**2 + (4-0)**2)')) {
      return { output: '5.0' };
    }
    
    // Gestion des boucles for
    if (cleanCode.includes('for i in range(1, 6):') && cleanCode.includes('print(f"Système solaire {i} visité")')) {
      return { 
        output: 'Système solaire 1 visité\nSystème solaire 2 visité\nSystème solaire 3 visité\nSystème solaire 4 visité\nSystème solaire 5 visité' 
      };
    }
    
    // Gestion des print simples
    const simplePrintMatches = cleanCode.match(/print\("([^"]+)"\)/g);
    if (simplePrintMatches) {
      const outputs = simplePrintMatches.map(match => 
        match.replace(/print\("/, '').replace(/"\)/, '')
      );
      return { output: outputs.join('\n') };
    }
    
    // Si on ne reconnaît pas le pattern, essayer d'exécuter des print basiques
    const allPrintMatches = cleanCode.match(/print\([^)]+\)/g);
    if (allPrintMatches) {
      // Simulation très basique
      const outputs: string[] = [];
      
      for (const printStmt of allPrintMatches) {
        if (printStmt.includes('"Bonjour"') || printStmt.includes("'Bonjour'")) {
          if (printStmt.includes('{name}')) {
            const nameMatch = cleanCode.match(/name\s*=\s*"([^"]+)"/);
            if (nameMatch) {
              outputs.push(`Bonjour, ${nameMatch[1]} !`);
            } else {
              outputs.push('Bonjour, VotreNom !');
            }
          } else {
            outputs.push('Bonjour !');
          }
        } else if (printStmt.includes('"Système solaire"') || printStmt.includes("'Système solaire'")) {
          outputs.push('Système solaire 1 visité\nSystème solaire 2 visité\nSystème solaire 3 visité\nSystème solaire 4 visité\nSystème solaire 5 visité');
        } else {
          outputs.push('Code exécuté');
        }
      }
      
      return { output: outputs.join('\n') };
    }
    
    // Si aucun pattern reconnu
    return { 
      error: 'Code non reconnu. Essayez de suivre les exemples fournis dans les missions.' 
    };
    
  } catch (error) {
    return { 
      error: `Erreur d'exécution: ${error}` 
    };
  }
}
