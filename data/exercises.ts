
import { Exercise } from '@/types/course';

export const exercises: Exercise[] = [
  {
    id: 'ex-math-1',
    courseId: 'math-1',
    subject: 'math',
    title: 'Calcul de limite',
    question: 'Calculer lim(x→2) (x² - 4)/(x - 2)',
    options: ['0', '2', '4', 'La limite n\'existe pas'],
    correctAnswer: '4',
    explanation: `Pour calculer cette limite, on remarque une forme indéterminée 0/0.

**Étape 1:** Factoriser le numérateur
x² - 4 = (x - 2)(x + 2)

**Étape 2:** Simplifier
(x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2 (pour x ≠ 2)

**Étape 3:** Calculer la limite
lim(x→2) (x + 2) = 2 + 2 = 4

**Réponse:** La limite vaut 4.`,
    difficulty: 'medium',
    skill: 'Calcul de limites',
  },
  {
    id: 'ex-math-2',
    courseId: 'math-1',
    subject: 'math',
    title: 'Domaine de définition',
    question: 'Quel est le domaine de définition de f(x) = 1/(x² - 9) ?',
    options: ['ℝ', 'ℝ \\ {-3, 3}', 'ℝ \\ {3}', ']-∞, -3[ ∪ ]-3, 3[ ∪ ]3, +∞['],
    correctAnswer: 'ℝ \\ {-3, 3}',
    explanation: `Pour déterminer le domaine de définition, on cherche les valeurs interdites.

**Condition:** Le dénominateur ne doit pas être nul.
x² - 9 ≠ 0

**Résolution:**
x² - 9 = 0
x² = 9
x = ±3

**Conclusion:** La fonction est définie pour tous les réels sauf -3 et 3.

**Notation:** Df = ℝ \\ {-3, 3} ou ]-∞, -3[ ∪ ]-3, 3[ ∪ ]3, +∞[`,
    difficulty: 'easy',
    skill: 'Domaine de définition',
  },
  {
    id: 'ex-math-3',
    courseId: 'math-2',
    subject: 'math',
    title: 'Calcul de dérivée',
    question: 'Calculer la dérivée de f(x) = x³ - 2x² + 5x - 1',
    options: ['3x² - 4x + 5', '3x² - 2x + 5', 'x² - 4x + 5', '3x² - 4x + 1'],
    correctAnswer: '3x² - 4x + 5',
    explanation: `Pour dériver un polynôme, on applique la formule (xⁿ)' = n·xⁿ⁻¹ à chaque terme.

**Dérivée terme par terme:**
- (x³)' = 3x²
- (-2x²)' = -2·2x = -4x
- (5x)' = 5
- (-1)' = 0

**Résultat:**
f'(x) = 3x² - 4x + 5

**Vérification:** On peut vérifier en calculant f'(0) = 5, ce qui correspond au coefficient de x dans f(x).`,
    difficulty: 'easy',
    skill: 'Dérivation',
  },
  {
    id: 'ex-math-4',
    courseId: 'math-2',
    subject: 'math',
    title: 'Équation de tangente',
    question: 'Soit f(x) = x². Quelle est l\'équation de la tangente en x = 2 ?',
    options: ['y = 4x - 4', 'y = 2x', 'y = 4x', 'y = 2x + 4'],
    correctAnswer: 'y = 4x - 4',
    explanation: `L'équation de la tangente en a est: y = f'(a)(x - a) + f(a)

**Étape 1:** Calculer f(2)
f(2) = 2² = 4

**Étape 2:** Calculer f'(x)
f'(x) = 2x

**Étape 3:** Calculer f'(2)
f'(2) = 2·2 = 4

**Étape 4:** Équation de la tangente
y = 4(x - 2) + 4
y = 4x - 8 + 4
y = 4x - 4

**Interprétation:** La tangente a pour coefficient directeur 4 et passe par le point (2, 4).`,
    difficulty: 'medium',
    skill: 'Dérivation',
  },
  {
    id: 'ex-physics-1',
    courseId: 'physics-1',
    subject: 'physics',
    title: 'Deuxième loi de Newton',
    question: 'Une force de 20N est appliquée à un objet de 5kg. Quelle est son accélération ?',
    options: ['2 m/s²', '4 m/s²', '10 m/s²', '100 m/s²'],
    correctAnswer: '4 m/s²',
    explanation: `On applique la deuxième loi de Newton: F = m·a

**Données:**
- Force: F = 20 N
- Masse: m = 5 kg
- Accélération: a = ?

**Formule:**
a = F/m

**Calcul:**
a = 20/5 = 4 m/s²

**Réponse:** L'accélération est de 4 m/s².

**Remarque:** L'unité de l'accélération est le mètre par seconde carrée (m/s²).`,
    difficulty: 'easy',
    skill: 'Lois de Newton',
  },
  {
    id: 'ex-physics-2',
    courseId: 'physics-1',
    subject: 'physics',
    title: 'Énergie cinétique',
    question: 'Un objet de 2kg se déplace à 10 m/s. Quelle est son énergie cinétique ?',
    options: ['20 J', '50 J', '100 J', '200 J'],
    correctAnswer: '100 J',
    explanation: `L'énergie cinétique est donnée par: Ec = ½·m·v²

**Données:**
- Masse: m = 2 kg
- Vitesse: v = 10 m/s
- Énergie cinétique: Ec = ?

**Calcul:**
Ec = ½ × 2 × 10²
Ec = 1 × 100
Ec = 100 J

**Réponse:** L'énergie cinétique est de 100 joules.

**Remarque:** L'énergie cinétique est proportionnelle au carré de la vitesse. Si on double la vitesse, l'énergie est multipliée par 4.`,
    difficulty: 'easy',
    skill: 'Énergie mécanique',
  },
  {
    id: 'ex-physics-3',
    courseId: 'physics-1',
    subject: 'physics',
    title: 'Conservation de l\'énergie',
    question: 'Un objet tombe de 5m de hauteur. Quelle est sa vitesse juste avant l\'impact ? (g = 10 m/s²)',
    options: ['5 m/s', '10 m/s', '15 m/s', '20 m/s'],
    correctAnswer: '10 m/s',
    explanation: `On utilise la conservation de l'énergie mécanique.

**État initial (en haut):**
- Ep = m·g·h
- Ec = 0 (vitesse nulle)
- Em = m·g·h

**État final (en bas):**
- Ep = 0 (h = 0)
- Ec = ½·m·v²
- Em = ½·m·v²

**Conservation:**
m·g·h = ½·m·v²
g·h = ½·v²
v² = 2·g·h
v² = 2 × 10 × 5 = 100
v = 10 m/s

**Réponse:** La vitesse est de 10 m/s.`,
    difficulty: 'medium',
    skill: 'Énergie mécanique',
  },
  {
    id: 'ex-physics-4',
    courseId: 'physics-2',
    subject: 'physics',
    title: 'Loi d\'Ohm',
    question: 'Une résistance de 10Ω est traversée par un courant de 2A. Quelle est la tension à ses bornes ?',
    options: ['5 V', '12 V', '20 V', '200 V'],
    correctAnswer: '20 V',
    explanation: `On applique la loi d'Ohm: U = R·I

**Données:**
- Résistance: R = 10 Ω
- Intensité: I = 2 A
- Tension: U = ?

**Calcul:**
U = R × I
U = 10 × 2
U = 20 V

**Réponse:** La tension est de 20 volts.

**Remarque:** La loi d'Ohm est fondamentale en électricité. Elle relie trois grandeurs: tension (V), résistance (Ω) et intensité (A).`,
    difficulty: 'easy',
    skill: 'Lois électriques',
  },
  {
    id: 'ex-physics-5',
    courseId: 'physics-2',
    subject: 'physics',
    title: 'Résistances en série',
    question: 'Deux résistances de 4Ω et 6Ω sont en série. Quelle est la résistance équivalente ?',
    options: ['2.4 Ω', '5 Ω', '10 Ω', '24 Ω'],
    correctAnswer: '10 Ω',
    explanation: `Pour des résistances en série, on additionne les valeurs.

**Formule:**
Req = R1 + R2 + R3 + ...

**Données:**
- R1 = 4 Ω
- R2 = 6 Ω

**Calcul:**
Req = 4 + 6 = 10 Ω

**Réponse:** La résistance équivalente est de 10 Ω.

**Rappel:**
- En série: Req = R1 + R2 (on additionne)
- En parallèle: 1/Req = 1/R1 + 1/R2 (on additionne les inverses)`,
    difficulty: 'easy',
    skill: 'Lois électriques',
  },
];
