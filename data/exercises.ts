
import { Exercise } from '@/types/course';

export const exercises: Exercise[] = [
  // ===== EXERCICES MATHÉMATIQUES =====
  
  // Suites numériques
  {
    id: 'ex-math-1-1',
    courseId: 'math-1',
    subject: 'math',
    title: 'Suite arithmétique - Terme général',
    question: 'Une suite arithmétique a pour premier terme u₀ = 3 et pour raison r = 5. Quel est le terme u₁₀ ?',
    options: ['48', '50', '53', '58'],
    correctAnswer: '53',
    explanation: `Pour une suite arithmétique, le terme général est: un = u₀ + n × r

**Données:**
- u₀ = 3
- r = 5
- n = 10

**Calcul:**
u₁₀ = 3 + 10 × 5 = 3 + 50 = 53

**Réponse:** u₁₀ = 53

**Vérification:** On peut aussi calculer terme par terme:
u₀ = 3, u₁ = 8, u₂ = 13, ..., u₁₀ = 53`,
    difficulty: 'easy',
    skill: 'Suites arithmétiques',
  },
  {
    id: 'ex-math-1-2',
    courseId: 'math-1',
    subject: 'math',
    title: 'Suite géométrique - Terme général',
    question: 'Une suite géométrique a pour premier terme u₀ = 2 et pour raison q = 3. Quel est le terme u₅ ?',
    options: ['162', '243', '486', '729'],
    correctAnswer: '486',
    explanation: `Pour une suite géométrique, le terme général est: un = u₀ × q^n

**Données:**
- u₀ = 2
- q = 3
- n = 5

**Calcul:**
u₅ = 2 × 3⁵ = 2 × 243 = 486

**Réponse:** u₅ = 486

**Vérification:** On peut aussi calculer terme par terme:
u₀ = 2, u₁ = 6, u₂ = 18, u₃ = 54, u₄ = 162, u₅ = 486`,
    difficulty: 'easy',
    skill: 'Suites géométriques',
  },
  {
    id: 'ex-math-1-3',
    courseId: 'math-1',
    subject: 'math',
    title: 'Somme de termes arithmétiques',
    question: 'Quelle est la somme des 10 premiers termes d\'une suite arithmétique de premier terme u₀ = 2 et de raison r = 3 ?',
    options: ['155', '165', '175', '185'],
    correctAnswer: '155',
    explanation: `La somme des n premiers termes d'une suite arithmétique est:
Sn = n × (u₀ + un)/2 ou Sn = n × (2u₀ + (n-1)r)/2

**Données:**
- u₀ = 2
- r = 3
- n = 10

**Méthode 1:** Calculer u₉ puis utiliser la première formule
u₉ = 2 + 9 × 3 = 29
S₁₀ = 10 × (2 + 29)/2 = 10 × 31/2 = 155

**Méthode 2:** Utiliser directement la deuxième formule
S₁₀ = 10 × (2×2 + 9×3)/2 = 10 × 31/2 = 155

**Réponse:** S₁₀ = 155`,
    difficulty: 'medium',
    skill: 'Sommes de suites',
  },
  {
    id: 'ex-math-1-4',
    courseId: 'math-1',
    subject: 'math',
    title: 'Limite de suite',
    question: 'Quelle est la limite de la suite un = (3n + 2)/(n + 1) quand n tend vers l\'infini ?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '3',
    explanation: `Pour calculer la limite d'une fraction rationnelle, on divise numérateur et dénominateur par la plus haute puissance de n.

**Calcul:**
un = (3n + 2)/(n + 1)
   = (3 + 2/n)/(1 + 1/n)

Quand n → +∞:
- 2/n → 0
- 1/n → 0

Donc: lim(n→+∞) un = 3/1 = 3

**Réponse:** La limite est 3.

**Interprétation:** La suite se rapproche de 3 quand n devient très grand.`,
    difficulty: 'medium',
    skill: 'Limites de suites',
  },

  // Limites et continuité
  {
    id: 'ex-math-2-1',
    courseId: 'math-2',
    subject: 'math',
    title: 'Limite en un point',
    question: 'Quelle est la limite de f(x) = (x² - 4)/(x - 2) quand x tend vers 2 ?',
    options: ['0', '2', '4', 'La limite n\'existe pas'],
    correctAnswer: '4',
    explanation: `On a une forme indéterminée 0/0. Il faut factoriser.

**Factorisation:**
x² - 4 = (x - 2)(x + 2)

**Simplification:**
f(x) = (x - 2)(x + 2)/(x - 2) = x + 2 pour x ≠ 2

**Calcul de la limite:**
lim(x→2) f(x) = lim(x→2) (x + 2) = 2 + 2 = 4

**Réponse:** La limite est 4.

**Remarque:** f(2) n'est pas définie, mais la limite existe.`,
    difficulty: 'medium',
    skill: 'Limites de fonctions',
  },
  {
    id: 'ex-math-2-2',
    courseId: 'math-2',
    subject: 'math',
    title: 'Limite à l\'infini',
    question: 'Quelle est la limite de f(x) = (2x² + 3x)/(x² - 1) quand x tend vers +∞ ?',
    options: ['0', '1', '2', '+∞'],
    correctAnswer: '2',
    explanation: `Pour une limite à l'infini d'une fraction rationnelle, on divise par la plus haute puissance de x.

**Calcul:**
f(x) = (2x² + 3x)/(x² - 1)
     = (2 + 3/x)/(1 - 1/x²)

Quand x → +∞:
- 3/x → 0
- 1/x² → 0

Donc: lim(x→+∞) f(x) = 2/1 = 2

**Réponse:** La limite est 2.

**Règle:** Pour une fraction rationnelle, la limite à l'infini est le quotient des coefficients dominants.`,
    difficulty: 'medium',
    skill: 'Limites à l\'infini',
  },
  {
    id: 'ex-math-2-3',
    courseId: 'math-2',
    subject: 'math',
    title: 'Continuité',
    question: 'La fonction f(x) = (x² - 1)/(x - 1) est-elle continue en x = 1 ?',
    options: ['Oui', 'Non', 'On ne peut pas savoir', 'Seulement si on prolonge par continuité'],
    correctAnswer: 'Seulement si on prolonge par continuité',
    explanation: `Pour qu'une fonction soit continue en a, il faut:
1. f(a) existe
2. lim(x→a) f(x) existe
3. lim(x→a) f(x) = f(a)

**Analyse:**
- f(1) n'existe pas (division par 0)
- Calculons la limite:
  f(x) = (x² - 1)/(x - 1) = (x - 1)(x + 1)/(x - 1) = x + 1 pour x ≠ 1
  lim(x→1) f(x) = 2

**Conclusion:**
f n'est pas continue en 1, mais on peut la prolonger par continuité en posant f(1) = 2.

**Réponse:** Seulement si on prolonge par continuité.`,
    difficulty: 'hard',
    skill: 'Continuité',
  },
  {
    id: 'ex-math-2-4',
    courseId: 'math-2',
    subject: 'math',
    title: 'Asymptote verticale',
    question: 'La fonction f(x) = 1/(x - 3) admet une asymptote verticale. Quelle est son équation ?',
    options: ['x = 0', 'x = 1', 'x = 3', 'y = 0'],
    correctAnswer: 'x = 3',
    explanation: `Une asymptote verticale x = a existe si lim(x→a) f(x) = ±∞

**Analyse:**
f(x) = 1/(x - 3)

Quand x → 3:
- Si x → 3⁺: f(x) → +∞
- Si x → 3⁻: f(x) → -∞

**Réponse:** L'asymptote verticale est x = 3.

**Remarque:** y = 0 est l'asymptote horizontale (quand x → ±∞).`,
    difficulty: 'easy',
    skill: 'Asymptotes',
  },

  // Dérivation
  {
    id: 'ex-math-3-1',
    courseId: 'math-3',
    subject: 'math',
    title: 'Dérivée d\'un polynôme',
    question: 'Quelle est la dérivée de f(x) = 3x⁴ - 2x² + 5 ?',
    options: ['12x³ - 4x', '12x³ - 2x', '3x³ - 4x', '12x⁴ - 4x²'],
    correctAnswer: '12x³ - 4x',
    explanation: `On applique la formule (x^n)' = n × x^(n-1) à chaque terme.

**Calcul:**
f(x) = 3x⁴ - 2x² + 5

f'(x) = 3 × 4x³ - 2 × 2x + 0
      = 12x³ - 4x

**Réponse:** f'(x) = 12x³ - 4x

**Rappel:** La dérivée d'une constante est 0.`,
    difficulty: 'easy',
    skill: 'Dérivation',
  },
  {
    id: 'ex-math-3-2',
    courseId: 'math-3',
    subject: 'math',
    title: 'Dérivée composée',
    question: 'Quelle est la dérivée de f(x) = e^(2x+1) ?',
    options: ['e^(2x+1)', '2e^(2x+1)', 'e^(2x)', '2e^(2x)'],
    correctAnswer: '2e^(2x+1)',
    explanation: `On utilise la formule de dérivation composée: (e^u)' = u' × e^u

**Identification:**
u(x) = 2x + 1
u'(x) = 2

**Calcul:**
f'(x) = u'(x) × e^(u(x))
      = 2 × e^(2x+1)
      = 2e^(2x+1)

**Réponse:** f'(x) = 2e^(2x+1)

**Vérification:** Si x = 0, f'(0) = 2e¹ = 2e`,
    difficulty: 'medium',
    skill: 'Dérivée composée',
  },
  {
    id: 'ex-math-3-3',
    courseId: 'math-3',
    subject: 'math',
    title: 'Équation de tangente',
    question: 'Quelle est l\'équation de la tangente à la courbe f(x) = x² au point d\'abscisse x = 2 ?',
    options: ['y = 2x', 'y = 4x - 4', 'y = 4x', 'y = 2x + 4'],
    correctAnswer: 'y = 4x - 4',
    explanation: `L'équation de la tangente en a est: y = f'(a)(x - a) + f(a)

**Calcul de f(2):**
f(2) = 2² = 4

**Calcul de f'(x):**
f'(x) = 2x
f'(2) = 4

**Équation de la tangente:**
y = 4(x - 2) + 4
y = 4x - 8 + 4
y = 4x - 4

**Réponse:** y = 4x - 4

**Vérification:** La tangente passe par (2, 4): 4×2 - 4 = 4 ✓`,
    difficulty: 'medium',
    skill: 'Tangente',
  },
  {
    id: 'ex-math-3-4',
    courseId: 'math-3',
    subject: 'math',
    title: 'Variations d\'une fonction',
    question: 'La fonction f(x) = -x² + 4x - 3 est croissante sur quel intervalle ?',
    options: [']-∞, 2]', '[2, +∞[', ']-∞, +∞[', 'Jamais croissante'],
    correctAnswer: ']-∞, 2]',
    explanation: `Pour étudier les variations, on calcule f'(x) et on étudie son signe.

**Calcul de f'(x):**
f'(x) = -2x + 4

**Étude du signe:**
f'(x) = 0 ⟺ -2x + 4 = 0 ⟺ x = 2

- Si x < 2: f'(x) > 0 → f croissante
- Si x > 2: f'(x) < 0 → f décroissante

**Réponse:** f est croissante sur ]-∞, 2]

**Remarque:** f admet un maximum en x = 2 avec f(2) = 1.`,
    difficulty: 'medium',
    skill: 'Variations',
  },

  // Fonction exponentielle
  {
    id: 'ex-math-4-1',
    courseId: 'math-4',
    subject: 'math',
    title: 'Propriété de l\'exponentielle',
    question: 'Simplifier e³ × e⁵',
    options: ['e⁸', 'e¹⁵', 'e²', '8e'],
    correctAnswer: 'e⁸',
    explanation: `On utilise la propriété: e^a × e^b = e^(a+b)

**Calcul:**
e³ × e⁵ = e^(3+5) = e⁸

**Réponse:** e⁸

**Autres propriétés:**
- e^a / e^b = e^(a-b)
- (e^a)^b = e^(ab)
- e^0 = 1`,
    difficulty: 'easy',
    skill: 'Fonction exponentielle',
  },
  {
    id: 'ex-math-4-2',
    courseId: 'math-4',
    subject: 'math',
    title: 'Équation exponentielle',
    question: 'Résoudre e^x = 7',
    options: ['x = 7', 'x = e⁷', 'x = ln(7)', 'x = 7/e'],
    correctAnswer: 'x = ln(7)',
    explanation: `Pour résoudre e^x = a, on applique le logarithme népérien.

**Résolution:**
e^x = 7
⟺ ln(e^x) = ln(7)
⟺ x = ln(7)

**Réponse:** x = ln(7) ≈ 1,946

**Vérification:** e^(ln(7)) = 7 ✓

**Rappel:** ln et exp sont des fonctions réciproques.`,
    difficulty: 'easy',
    skill: 'Équations exponentielles',
  },
  {
    id: 'ex-math-4-3',
    courseId: 'math-4',
    subject: 'math',
    title: 'Dérivée avec exponentielle',
    question: 'Quelle est la dérivée de f(x) = x × e^x ?',
    options: ['e^x', 'x × e^x', '(x+1) × e^x', '(x-1) × e^x'],
    correctAnswer: '(x+1) × e^x',
    explanation: `On utilise la formule (uv)' = u'v + uv'

**Identification:**
u(x) = x → u'(x) = 1
v(x) = e^x → v'(x) = e^x

**Calcul:**
f'(x) = 1 × e^x + x × e^x
      = e^x + x × e^x
      = (1 + x) × e^x
      = (x + 1) × e^x

**Réponse:** f'(x) = (x+1) × e^x

**Vérification:** Si x = 0, f'(0) = 1 × e⁰ = 1`,
    difficulty: 'medium',
    skill: 'Dérivée avec exponentielle',
  },

  // Fonction logarithme
  {
    id: 'ex-math-5-1',
    courseId: 'math-5',
    subject: 'math',
    title: 'Propriété du logarithme',
    question: 'Simplifier ln(8) - ln(2)',
    options: ['ln(6)', 'ln(4)', 'ln(10)', '4'],
    correctAnswer: 'ln(4)',
    explanation: `On utilise la propriété: ln(a) - ln(b) = ln(a/b)

**Calcul:**
ln(8) - ln(2) = ln(8/2) = ln(4)

**Réponse:** ln(4)

**Vérification numérique:**
ln(8) ≈ 2,079
ln(2) ≈ 0,693
ln(8) - ln(2) ≈ 1,386 = ln(4) ✓`,
    difficulty: 'easy',
    skill: 'Fonction logarithme',
  },
  {
    id: 'ex-math-5-2',
    courseId: 'math-5',
    subject: 'math',
    title: 'Équation logarithmique',
    question: 'Résoudre ln(x) = 3',
    options: ['x = 3', 'x = e³', 'x = ln(3)', 'x = 3e'],
    correctAnswer: 'x = e³',
    explanation: `Pour résoudre ln(x) = a, on applique l'exponentielle.

**Résolution:**
ln(x) = 3
⟺ e^(ln(x)) = e³
⟺ x = e³

**Réponse:** x = e³ ≈ 20,09

**Vérification:** ln(e³) = 3 ✓

**Rappel:** e^(ln(x)) = x pour x > 0`,
    difficulty: 'easy',
    skill: 'Équations logarithmiques',
  },
  {
    id: 'ex-math-5-3',
    courseId: 'math-5',
    subject: 'math',
    title: 'Dérivée avec logarithme',
    question: 'Quelle est la dérivée de f(x) = ln(x²) ?',
    options: ['1/x²', '2/x', '2x', '1/(2x)'],
    correctAnswer: '2/x',
    explanation: `On peut utiliser deux méthodes.

**Méthode 1:** Simplifier d'abord
f(x) = ln(x²) = 2ln(x)
f'(x) = 2 × 1/x = 2/x

**Méthode 2:** Dérivée composée
u(x) = x² → u'(x) = 2x
f'(x) = u'(x)/u(x) = 2x/x² = 2/x

**Réponse:** f'(x) = 2/x

**Remarque:** Cette fonction est définie pour x ≠ 0.`,
    difficulty: 'medium',
    skill: 'Dérivée avec logarithme',
  },

  // Intégration
  {
    id: 'ex-math-6-1',
    courseId: 'math-6',
    subject: 'math',
    title: 'Primitive d\'un polynôme',
    question: 'Quelle est une primitive de f(x) = 3x² ?',
    options: ['x³', 'x³ + C', '6x', '3x³'],
    correctAnswer: 'x³ + C',
    explanation: `On utilise la formule: ∫ x^n dx = x^(n+1)/(n+1) + C

**Calcul:**
∫ 3x² dx = 3 × x³/3 + C = x³ + C

**Réponse:** x³ + C (où C est une constante)

**Vérification:** (x³ + C)' = 3x² ✓

**Remarque:** Il existe une infinité de primitives, différant d'une constante.`,
    difficulty: 'easy',
    skill: 'Primitives',
  },
  {
    id: 'ex-math-6-2',
    courseId: 'math-6',
    subject: 'math',
    title: 'Intégrale définie',
    question: 'Calculer ∫₀¹ 2x dx',
    options: ['0', '1', '2', '4'],
    correctAnswer: '1',
    explanation: `On calcule d'abord une primitive, puis on applique la formule.

**Primitive:**
F(x) = x²

**Calcul:**
∫₀¹ 2x dx = [x²]₀¹ = F(1) - F(0) = 1² - 0² = 1

**Réponse:** 1

**Interprétation géométrique:** C'est l'aire du triangle sous la droite y = 2x entre 0 et 1.
Aire = (base × hauteur)/2 = (1 × 2)/2 = 1 ✓`,
    difficulty: 'easy',
    skill: 'Intégrale définie',
  },
  {
    id: 'ex-math-6-3',
    courseId: 'math-6',
    subject: 'math',
    title: 'Intégrale avec exponentielle',
    question: 'Calculer ∫₀¹ e^x dx',
    options: ['1', 'e', 'e - 1', 'e + 1'],
    correctAnswer: 'e - 1',
    explanation: `La primitive de e^x est e^x.

**Calcul:**
∫₀¹ e^x dx = [e^x]₀¹ = e¹ - e⁰ = e - 1

**Réponse:** e - 1 ≈ 1,718

**Remarque:** C'est l'aire sous la courbe de l'exponentielle entre 0 et 1.`,
    difficulty: 'medium',
    skill: 'Intégrale avec exponentielle',
  },

  // Nombres complexes
  {
    id: 'ex-math-7-1',
    courseId: 'math-7',
    subject: 'math',
    title: 'Addition de nombres complexes',
    question: 'Calculer (3 + 2i) + (1 - 4i)',
    options: ['4 - 2i', '4 + 2i', '2 - 2i', '4 - 6i'],
    correctAnswer: '4 - 2i',
    explanation: `On additionne séparément les parties réelles et imaginaires.

**Calcul:**
(3 + 2i) + (1 - 4i) = (3 + 1) + (2 - 4)i
                     = 4 - 2i

**Réponse:** 4 - 2i

**Vérification:**
- Partie réelle: 3 + 1 = 4 ✓
- Partie imaginaire: 2 - 4 = -2 ✓`,
    difficulty: 'easy',
    skill: 'Nombres complexes',
  },
  {
    id: 'ex-math-7-2',
    courseId: 'math-7',
    subject: 'math',
    title: 'Module d\'un nombre complexe',
    question: 'Quel est le module de z = 3 + 4i ?',
    options: ['5', '7', '12', '25'],
    correctAnswer: '5',
    explanation: `Le module est: |z| = √(a² + b²) où z = a + ib

**Calcul:**
z = 3 + 4i
|z| = √(3² + 4²)
    = √(9 + 16)
    = √25
    = 5

**Réponse:** |z| = 5

**Remarque:** C'est la distance de z à l'origine dans le plan complexe.`,
    difficulty: 'easy',
    skill: 'Module',
  },
  {
    id: 'ex-math-7-3',
    courseId: 'math-7',
    subject: 'math',
    title: 'Conjugué',
    question: 'Quel est le conjugué de z = 2 - 3i ?',
    options: ['-2 + 3i', '2 + 3i', '-2 - 3i', '3 - 2i'],
    correctAnswer: '2 + 3i',
    explanation: `Le conjugué de z = a + ib est z̄ = a - ib

**Calcul:**
z = 2 - 3i
z̄ = 2 - (-3)i = 2 + 3i

**Réponse:** z̄ = 2 + 3i

**Propriété:** z × z̄ = |z|²
Vérification: (2-3i)(2+3i) = 4 - 9i² = 4 + 9 = 13 = |z|² ✓`,
    difficulty: 'easy',
    skill: 'Conjugué',
  },

  // Géométrie dans l'espace
  {
    id: 'ex-math-8-1',
    courseId: 'math-8',
    subject: 'math',
    title: 'Norme d\'un vecteur',
    question: 'Quelle est la norme du vecteur u⃗(2, 3, 6) ?',
    options: ['5', '7', '11', '49'],
    correctAnswer: '7',
    explanation: `La norme d'un vecteur est: ||u⃗|| = √(x² + y² + z²)

**Calcul:**
u⃗(2, 3, 6)
||u⃗|| = √(2² + 3² + 6²)
      = √(4 + 9 + 36)
      = √49
      = 7

**Réponse:** ||u⃗|| = 7

**Interprétation:** C'est la longueur du vecteur dans l'espace.`,
    difficulty: 'easy',
    skill: 'Vecteurs dans l\'espace',
  },
  {
    id: 'ex-math-8-2',
    courseId: 'math-8',
    subject: 'math',
    title: 'Produit scalaire',
    question: 'Calculer u⃗(1, 2, 3) · v⃗(2, 0, 1)',
    options: ['3', '5', '6', '8'],
    correctAnswer: '5',
    explanation: `Le produit scalaire est: u⃗ · v⃗ = x₁x₂ + y₁y₂ + z₁z₂

**Calcul:**
u⃗(1, 2, 3) · v⃗(2, 0, 1) = 1×2 + 2×0 + 3×1
                          = 2 + 0 + 3
                          = 5

**Réponse:** u⃗ · v⃗ = 5

**Remarque:** Si le produit scalaire est nul, les vecteurs sont orthogonaux.`,
    difficulty: 'easy',
    skill: 'Produit scalaire',
  },

  // ===== EXERCICES PHYSIQUE (BTS ÉLECTROTECHNIQUE) =====
  
  // Exercices Circuit DC
  {
    id: 'ex-elec-1-1',
    courseId: 'elec-1',
    subject: 'physics',
    title: 'Loi d\'Ohm - Calcul de résistance',
    question: 'Une résistance est traversée par un courant de 2A et la tension à ses bornes est de 24V. Quelle est la valeur de cette résistance ?',
    options: ['8 Ω', '12 Ω', '24 Ω', '48 Ω'],
    correctAnswer: '12 Ω',
    explanation: `On applique la loi d'Ohm: U = R × I

**Données:**
- Tension: U = 24 V
- Intensité: I = 2 A
- Résistance: R = ?

**Formule:**
R = U/I

**Calcul:**
R = 24/2 = 12 Ω

**Réponse:** La résistance vaut 12 Ω.

**Vérification:** U = R × I = 12 × 2 = 24 V ✓`,
    difficulty: 'easy',
    skill: 'Loi d\'Ohm',
  },
  {
    id: 'ex-elec-1-2',
    courseId: 'elec-1',
    subject: 'physics',
    title: 'Résistances en série',
    question: 'Trois résistances de 10Ω, 20Ω et 30Ω sont montées en série. Quelle est la résistance équivalente ?',
    options: ['5,45 Ω', '20 Ω', '60 Ω', '6000 Ω'],
    correctAnswer: '60 Ω',
    explanation: `Pour des résistances en série, on additionne les valeurs.

**Formule:**
Req = R1 + R2 + R3

**Données:**
- R1 = 10 Ω
- R2 = 20 Ω
- R3 = 30 Ω

**Calcul:**
Req = 10 + 20 + 30 = 60 Ω

**Réponse:** La résistance équivalente est de 60 Ω.

**Remarque:** En série, la résistance équivalente est toujours supérieure à la plus grande résistance.`,
    difficulty: 'easy',
    skill: 'Associations de résistances',
  },
  {
    id: 'ex-elec-1-3',
    courseId: 'elec-1',
    subject: 'physics',
    title: 'Résistances en parallèle',
    question: 'Deux résistances de 6Ω et 3Ω sont montées en parallèle. Quelle est la résistance équivalente ?',
    options: ['2 Ω', '3 Ω', '4,5 Ω', '9 Ω'],
    correctAnswer: '2 Ω',
    explanation: `Pour des résistances en parallèle, on utilise la formule des inverses.

**Formule:**
1/Req = 1/R1 + 1/R2

**Données:**
- R1 = 6 Ω
- R2 = 3 Ω

**Calcul:**
1/Req = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2
Req = 2 Ω

**Réponse:** La résistance équivalente est de 2 Ω.

**Remarque:** En parallèle, la résistance équivalente est toujours inférieure à la plus petite résistance.`,
    difficulty: 'medium',
    skill: 'Associations de résistances',
  },
  {
    id: 'ex-elec-1-4',
    courseId: 'elec-1',
    subject: 'physics',
    title: 'Puissance électrique',
    question: 'Un appareil fonctionne sous 230V et consomme un courant de 5A. Quelle est sa puissance ?',
    options: ['46 W', '235 W', '1150 W', '1265 W'],
    correctAnswer: '1150 W',
    explanation: `La puissance électrique se calcule par: P = U × I

**Données:**
- Tension: U = 230 V
- Intensité: I = 5 A
- Puissance: P = ?

**Calcul:**
P = U × I = 230 × 5 = 1150 W

**Réponse:** La puissance est de 1150 W (ou 1,15 kW).

**Autres formules:**
- P = R × I² (si on connaît R et I)
- P = U²/R (si on connaît U et R)`,
    difficulty: 'easy',
    skill: 'Puissance électrique',
  },
];
