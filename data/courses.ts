
import { Course } from '@/types/course';

export const courses: Course[] = [
  // ===== MATHÉMATIQUES TERMINALE S SI =====
  {
    id: 'math-1',
    title: 'Suites numériques',
    subject: 'math',
    description: 'Suites arithmétiques, géométriques et récurrentes',
    duration: '3h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-1-ch1',
        title: 'Suites arithmétiques et géométriques',
        content: `Les suites sont des fonctions définies sur ℕ.

**Suite arithmétique:**
Une suite (un) est arithmétique si un+1 = un + r

Où r est la raison de la suite.

**Terme général:**
un = u0 + n × r

**Somme des n premiers termes:**
Sn = n × (u0 + un)/2 = n × (2u0 + (n-1)r)/2

**Suite géométrique:**
Une suite (un) est géométrique si un+1 = un × q

Où q est la raison de la suite.

**Terme général:**
un = u0 × q^n

**Somme des n premiers termes:**
Sn = u0 × (1 - q^n)/(1 - q) si q ≠ 1

**Vidéos YouTube:**
- Suites arithmétiques: https://www.youtube.com/watch?v=8jB6hDUqN0Y
- Suites géométriques: https://www.youtube.com/watch?v=3WL8i8RzJno
- Sommes de termes: https://www.youtube.com/watch?v=kFlVqFEPHDo`,
        examples: [
          'Suite arithmétique: 2, 5, 8, 11, ... (r = 3)',
          'Suite géométrique: 3, 6, 12, 24, ... (q = 2)',
          'Somme: 1 + 2 + 3 + ... + n = n(n+1)/2'
        ],
      },
      {
        id: 'math-1-ch2',
        title: 'Suites récurrentes et limites',
        content: `Étude des suites définies par récurrence.

**Suite récurrente:**
un+1 = f(un) avec u0 donné

**Sens de variation:**
- Croissante si un+1 ≥ un pour tout n
- Décroissante si un+1 ≤ un pour tout n

**Limite d'une suite:**
lim(n→∞) un = L signifie que un se rapproche de L quand n tend vers l'infini.

**Théorèmes:**
- Suite croissante majorée converge
- Suite décroissante minorée converge
- Théorème des gendarmes

**Suites adjacentes:**
Deux suites (un) et (vn) sont adjacentes si:
- (un) est croissante
- (vn) est décroissante
- lim(vn - un) = 0

**Vidéos YouTube:**
- Suites récurrentes: https://www.youtube.com/watch?v=2kFzCdP8H8A
- Limites de suites: https://www.youtube.com/watch?v=IL2MCJV8x-Y
- Convergence: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'un+1 = √(un + 2) avec u0 = 1',
          'Suite de Fibonacci: un+2 = un+1 + un',
          'lim(1/n) = 0 quand n → ∞'
        ],
      },
    ],
  },
  {
    id: 'math-2',
    title: 'Fonctions - Limites et continuité',
    subject: 'math',
    description: 'Étude des limites et de la continuité des fonctions',
    duration: '3h30',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-2-ch1',
        title: 'Limites de fonctions',
        content: `Étude du comportement d'une fonction aux bornes de son domaine.

**Limite finie en un point:**
lim(x→a) f(x) = L

**Limite infinie:**
lim(x→a) f(x) = +∞ ou -∞

**Limites à l'infini:**
lim(x→+∞) f(x) = L ou ±∞

**Opérations sur les limites:**
- Somme: lim(f + g) = lim(f) + lim(g)
- Produit: lim(f × g) = lim(f) × lim(g)
- Quotient: lim(f/g) = lim(f)/lim(g) si lim(g) ≠ 0

**Formes indéterminées:**
- 0/0, ∞/∞, 0×∞, ∞-∞

**Limites usuelles:**
- lim(x→+∞) x^n = +∞
- lim(x→+∞) 1/x^n = 0
- lim(x→0) sin(x)/x = 1
- lim(x→+∞) e^x = +∞
- lim(x→+∞) ln(x) = +∞

**Vidéos YouTube:**
- Limites de fonctions: https://www.youtube.com/watch?v=yKbUxCJ3Saw
- Formes indéterminées: https://www.youtube.com/watch?v=qKvKjYwZ8Hs
- Limites usuelles: https://www.youtube.com/watch?v=7FYHt5XviKc`,
        examples: [
          'lim(x→2) (x² - 4)/(x - 2) = 4',
          'lim(x→+∞) (3x² + 2x)/(x² - 1) = 3',
          'lim(x→0+) 1/x = +∞'
        ],
      },
      {
        id: 'math-2-ch2',
        title: 'Continuité',
        content: `Une fonction continue n'a pas de "saut" sur son domaine.

**Définition:**
f est continue en a si:
- f(a) existe
- lim(x→a) f(x) existe
- lim(x→a) f(x) = f(a)

**Fonctions continues:**
- Polynômes
- Fonctions rationnelles (sur leur domaine)
- Fonctions trigonométriques
- Fonctions exponentielles et logarithmes
- Composées de fonctions continues

**Théorème des valeurs intermédiaires (TVI):**
Si f est continue sur [a,b] et si k est entre f(a) et f(b), alors il existe c ∈ [a,b] tel que f(c) = k.

**Application:** Résolution d'équations

**Prolongement par continuité:**
Si lim(x→a) f(x) = L, on peut définir f(a) = L pour rendre f continue en a.

**Vidéos YouTube:**
- Continuité: https://www.youtube.com/watch?v=7w8QJhqBESE
- TVI: https://www.youtube.com/watch?v=iKFMrVhZGHk
- Applications: https://www.youtube.com/watch?v=5Hx4QQXJ8Hs`,
        examples: [
          'f(x) = x² est continue sur ℝ',
          'f(x) = 1/x est continue sur ℝ*',
          'TVI: x³ - x - 1 = 0 a une solution dans [1,2]'
        ],
      },
      {
        id: 'math-2-ch3',
        title: 'Asymptotes',
        content: `Les asymptotes décrivent le comportement d'une fonction à l'infini ou près d'une valeur interdite.

**Asymptote verticale:**
x = a est asymptote verticale si lim(x→a) f(x) = ±∞

**Asymptote horizontale:**
y = b est asymptote horizontale si lim(x→±∞) f(x) = b

**Asymptote oblique:**
y = ax + b est asymptote oblique si:
lim(x→±∞) [f(x) - (ax + b)] = 0

**Méthode pour trouver une asymptote oblique:**
1. Calculer a = lim(x→±∞) f(x)/x
2. Calculer b = lim(x→±∞) [f(x) - ax]

**Position relative:**
Étudier le signe de f(x) - (ax + b)

**Vidéos YouTube:**
- Asymptotes: https://www.youtube.com/watch?v=fKjLWSQQzKo
- Asymptote oblique: https://www.youtube.com/watch?v=JrKoccVkVEA
- Position relative: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'f(x) = 1/x a pour asymptotes x = 0 et y = 0',
          'f(x) = (x² + 1)/x a pour asymptote y = x',
          'f(x) = e^x a pour asymptote y = 0 en -∞'
        ],
      },
    ],
  },
  {
    id: 'math-3',
    title: 'Dérivation',
    subject: 'math',
    description: 'Calcul de dérivées et applications',
    duration: '3h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-3-ch1',
        title: 'Nombre dérivé et fonction dérivée',
        content: `La dérivée mesure le taux de variation instantané d'une fonction.

**Nombre dérivé:**
f'(a) = lim(h→0) [f(a+h) - f(a)]/h

**Interprétation géométrique:**
f'(a) est le coefficient directeur de la tangente à la courbe en a.

**Équation de la tangente:**
y = f'(a)(x - a) + f(a)

**Dérivées usuelles:**
- (x^n)' = n × x^(n-1)
- (√x)' = 1/(2√x)
- (1/x)' = -1/x²
- (e^x)' = e^x
- (ln(x))' = 1/x
- (sin(x))' = cos(x)
- (cos(x))' = -sin(x)

**Opérations:**
- (u + v)' = u' + v'
- (ku)' = ku'
- (uv)' = u'v + uv'
- (u/v)' = (u'v - uv')/v²
- (u∘v)' = v' × u'∘v (dérivée composée)

**Vidéos YouTube:**
- Dérivation: https://www.youtube.com/watch?v=LAtPHANEfQo
- Dérivées usuelles: https://www.youtube.com/watch?v=CWulQ1ZSE3c
- Tangente: https://www.youtube.com/watch?v=7XS8p5kQqvI`,
        examples: [
          'f(x) = x³ → f\'(x) = 3x²',
          'f(x) = e^(2x) → f\'(x) = 2e^(2x)',
          'f(x) = ln(x²+1) → f\'(x) = 2x/(x²+1)'
        ],
      },
      {
        id: 'math-3-ch2',
        title: 'Variations et extremums',
        content: `La dérivée permet d'étudier les variations d'une fonction.

**Théorème:**
- Si f' > 0 sur I, alors f est croissante sur I
- Si f' < 0 sur I, alors f est décroissante sur I
- Si f' = 0 sur I, alors f est constante sur I

**Extremum local:**
- Maximum local en a si f'(a) = 0 et f' change de signe de + à -
- Minimum local en a si f'(a) = 0 et f' change de signe de - à +

**Tableau de variations:**
1. Calculer f'(x)
2. Étudier le signe de f'(x)
3. Dresser le tableau de variations

**Extremum global:**
Sur un intervalle fermé [a,b], comparer:
- f(a) et f(b)
- Les valeurs aux points critiques

**Vidéos YouTube:**
- Variations: https://www.youtube.com/watch?v=K9P4GvFdgKo
- Extremums: https://www.youtube.com/watch?v=xQXqVuLh8Qs
- Tableau de variations: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'f(x) = x² - 4x + 3 a un minimum en x = 2',
          'f(x) = -x² + 2x a un maximum en x = 1',
          'f(x) = x³ n\'a pas d\'extremum'
        ],
      },
      {
        id: 'math-3-ch3',
        title: 'Convexité',
        content: `La convexité décrit la courbure d'une fonction.

**Fonction convexe:**
La courbe est "en forme de U" (tournée vers le haut)

**Fonction concave:**
La courbe est "en forme de ∩" (tournée vers le bas)

**Critère de convexité:**
- f est convexe sur I si f'' ≥ 0 sur I
- f est concave sur I si f'' ≤ 0 sur I

**Point d'inflexion:**
Point où f change de convexité (f'' change de signe)

**Inégalité de convexité:**
Si f est convexe sur I, alors pour tout a, b ∈ I et λ ∈ [0,1]:
f(λa + (1-λ)b) ≤ λf(a) + (1-λ)f(b)

**Position relative tangente:**
- Si f convexe: courbe au-dessus de ses tangentes
- Si f concave: courbe en-dessous de ses tangentes

**Vidéos YouTube:**
- Convexité: https://www.youtube.com/watch?v=wFI-h0RFvKc
- Point d'inflexion: https://www.youtube.com/watch?v=K9P4GvFdgKo
- Applications: https://www.youtube.com/watch?v=LAtPHANEfQo`,
        examples: [
          'f(x) = x² est convexe sur ℝ',
          'f(x) = ln(x) est concave sur ℝ+*',
          'f(x) = x³ a un point d\'inflexion en x = 0'
        ],
      },
    ],
  },
  {
    id: 'math-4',
    title: 'Fonction exponentielle',
    subject: 'math',
    description: 'Propriétés et applications de la fonction exponentielle',
    duration: '2h30',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-4-ch1',
        title: 'Définition et propriétés',
        content: `La fonction exponentielle est la fonction réciproque du logarithme népérien.

**Définition:**
exp(x) = e^x où e ≈ 2,718...

**Propriétés algébriques:**
- e^(a+b) = e^a × e^b
- e^(a-b) = e^a / e^b
- e^(-x) = 1/e^x
- (e^a)^b = e^(ab)
- e^0 = 1

**Dérivée:**
(e^x)' = e^x

**Limites:**
- lim(x→+∞) e^x = +∞
- lim(x→-∞) e^x = 0
- lim(x→+∞) e^x/x^n = +∞ (croissance comparée)
- lim(x→-∞) x^n × e^x = 0

**Variations:**
e^x est strictement croissante sur ℝ

**Vidéos YouTube:**
- Fonction exponentielle: https://www.youtube.com/watch?v=UchitHGF4n8
- Propriétés: https://www.youtube.com/watch?v=VbbxFZWfCPE
- Dérivée: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'e^2 × e^3 = e^5',
          '(e^x)' = e^x',
          'e^(ln(x)) = x pour x > 0'
        ],
      },
      {
        id: 'math-4-ch2',
        title: 'Équations et inéquations',
        content: `Résolution d'équations et inéquations avec l'exponentielle.

**Équations:**
- e^x = a ⟺ x = ln(a) si a > 0
- e^x = e^y ⟺ x = y
- e^(f(x)) = a ⟺ f(x) = ln(a)

**Inéquations:**
- e^x > a ⟺ x > ln(a) si a > 0
- e^x < a ⟺ x < ln(a) si a > 0
- e^(f(x)) > e^(g(x)) ⟺ f(x) > g(x)

**Méthode:**
1. Isoler l'exponentielle
2. Appliquer le logarithme
3. Résoudre l'équation obtenue

**Cas particuliers:**
- e^x = 0 n'a pas de solution
- e^x < 0 n'a pas de solution

**Vidéos YouTube:**
- Équations exponentielles: https://www.youtube.com/watch?v=UchitHGF4n8
- Inéquations: https://www.youtube.com/watch?v=VbbxFZWfCPE
- Méthodes de résolution: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'e^x = 5 ⟺ x = ln(5)',
          'e^(2x) = 8 ⟺ 2x = ln(8) ⟺ x = ln(8)/2',
          'e^x > 3 ⟺ x > ln(3)'
        ],
      },
    ],
  },
  {
    id: 'math-5',
    title: 'Fonction logarithme népérien',
    subject: 'math',
    description: 'Propriétés et applications du logarithme népérien',
    duration: '2h30',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-5-ch1',
        title: 'Définition et propriétés',
        content: `Le logarithme népérien est la fonction réciproque de l'exponentielle.

**Définition:**
ln(x) est défini pour x > 0
y = ln(x) ⟺ e^y = x

**Propriétés algébriques:**
- ln(ab) = ln(a) + ln(b)
- ln(a/b) = ln(a) - ln(b)
- ln(a^n) = n × ln(a)
- ln(1) = 0
- ln(e) = 1
- ln(1/a) = -ln(a)

**Dérivée:**
(ln(x))' = 1/x pour x > 0

**Limites:**
- lim(x→+∞) ln(x) = +∞
- lim(x→0+) ln(x) = -∞
- lim(x→+∞) ln(x)/x = 0 (croissance comparée)
- lim(x→0+) x × ln(x) = 0

**Variations:**
ln(x) est strictement croissante sur ]0,+∞[

**Vidéos YouTube:**
- Logarithme népérien: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Propriétés: https://www.youtube.com/watch?v=LtJoJBUSe28
- Dérivée: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'ln(2×3) = ln(2) + ln(3)',
          'ln(e²) = 2',
          '(ln(x²+1))' = 2x/(x²+1)'
        ],
      },
      {
        id: 'math-5-ch2',
        title: 'Équations et inéquations',
        content: `Résolution d'équations et inéquations avec le logarithme.

**Équations:**
- ln(x) = a ⟺ x = e^a
- ln(x) = ln(y) ⟺ x = y (si x, y > 0)
- ln(f(x)) = a ⟺ f(x) = e^a

**Inéquations:**
- ln(x) > a ⟺ x > e^a
- ln(x) < a ⟺ 0 < x < e^a
- ln(f(x)) > ln(g(x)) ⟺ f(x) > g(x) > 0

**Méthode:**
1. Vérifier le domaine de définition (x > 0)
2. Appliquer l'exponentielle
3. Résoudre l'équation obtenue

**Attention:**
ln(x) n'est défini que pour x > 0

**Vidéos YouTube:**
- Équations logarithmiques: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Inéquations: https://www.youtube.com/watch?v=LtJoJBUSe28
- Méthodes: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'ln(x) = 2 ⟺ x = e²',
          'ln(2x-1) = 0 ⟺ 2x-1 = 1 ⟺ x = 1',
          'ln(x) > 1 ⟺ x > e'
        ],
      },
    ],
  },
  {
    id: 'math-6',
    title: 'Intégration',
    subject: 'math',
    description: 'Calcul d\'intégrales et primitives',
    duration: '3h30',
    difficulty: 'advanced',
    chapters: [
      {
        id: 'math-6-ch1',
        title: 'Primitives',
        content: `Une primitive de f est une fonction F telle que F' = f.

**Primitives usuelles:**
- ∫ x^n dx = x^(n+1)/(n+1) + C (n ≠ -1)
- ∫ 1/x dx = ln|x| + C
- ∫ e^x dx = e^x + C
- ∫ cos(x) dx = sin(x) + C
- ∫ sin(x) dx = -cos(x) + C
- ∫ 1/(1+x²) dx = arctan(x) + C

**Linéarité:**
∫ [af(x) + bg(x)] dx = a∫f(x)dx + b∫g(x)dx

**Primitive d'une composée:**
∫ u'(x) × f(u(x)) dx = F(u(x)) + C
où F est une primitive de f

**Intégration par parties:**
∫ u'v dx = uv - ∫ uv' dx

**Vidéos YouTube:**
- Primitives: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Primitives usuelles: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Intégration par parties: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          '∫ 3x² dx = x³ + C',
          '∫ 2x×e^(x²) dx = e^(x²) + C',
          '∫ x×e^x dx = (x-1)e^x + C (par parties)'
        ],
      },
      {
        id: 'math-6-ch2',
        title: 'Intégrale définie',
        content: `L'intégrale définie représente l'aire sous la courbe.

**Définition:**
∫[a,b] f(x) dx = F(b) - F(a)
où F est une primitive de f

**Propriétés:**
- ∫[a,a] f(x) dx = 0
- ∫[a,b] f(x) dx = -∫[b,a] f(x) dx
- ∫[a,b] f(x) dx = ∫[a,c] f(x) dx + ∫[c,b] f(x) dx (relation de Chasles)
- ∫[a,b] [f(x) + g(x)] dx = ∫[a,b] f(x) dx + ∫[a,b] g(x) dx

**Interprétation géométrique:**
- Si f ≥ 0: aire sous la courbe
- Si f ≤ 0: opposé de l'aire
- Aire entre deux courbes: ∫[a,b] |f(x) - g(x)| dx

**Valeur moyenne:**
μ = 1/(b-a) × ∫[a,b] f(x) dx

**Vidéos YouTube:**
- Intégrale définie: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Calcul d'aires: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Applications: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          '∫[0,1] x² dx = [x³/3]₀¹ = 1/3',
          '∫[0,π] sin(x) dx = [-cos(x)]₀^π = 2',
          'Aire entre y=x² et y=x sur [0,1]: ∫[0,1] (x-x²) dx = 1/6'
        ],
      },
      {
        id: 'math-6-ch3',
        title: 'Équations différentielles',
        content: `Une équation différentielle lie une fonction à ses dérivées.

**Équation y' = ay:**
Solution générale: y = Ce^(ax)

**Équation y' = ay + b:**
Solution générale: y = Ce^(ax) - b/a

**Équation y'' + ω²y = 0:**
Solution générale: y = A×cos(ωx) + B×sin(ωx)

**Méthode de résolution:**
1. Trouver la solution générale
2. Utiliser les conditions initiales pour déterminer les constantes

**Condition initiale:**
y(x₀) = y₀ permet de déterminer C

**Applications:**
- Croissance exponentielle
- Décroissance radioactive
- Oscillations harmoniques

**Vidéos YouTube:**
- Équations différentielles: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Résolution: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Applications: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'y\' = 2y avec y(0) = 3 → y = 3e^(2x)',
          'y\' = -y + 1 avec y(0) = 0 → y = 1 - e^(-x)',
          'y\'\' + 4y = 0 → y = A×cos(2x) + B×sin(2x)'
        ],
      },
    ],
  },
  {
    id: 'math-7',
    title: 'Nombres complexes',
    subject: 'math',
    description: 'Forme algébrique, trigonométrique et exponentielle',
    duration: '3h',
    difficulty: 'advanced',
    chapters: [
      {
        id: 'math-7-ch1',
        title: 'Forme algébrique',
        content: `Les nombres complexes étendent les nombres réels.

**Définition:**
z = a + ib où i² = -1
- a = Re(z): partie réelle
- b = Im(z): partie imaginaire

**Opérations:**
- Addition: (a+ib) + (c+id) = (a+c) + i(b+d)
- Multiplication: (a+ib)(c+id) = (ac-bd) + i(ad+bc)
- Conjugué: z̄ = a - ib
- Module: |z| = √(a² + b²)

**Propriétés du conjugué:**
- z + z̄ = 2Re(z)
- z - z̄ = 2iIm(z)
- z × z̄ = |z|²
- z̄̄ = z

**Division:**
z₁/z₂ = (z₁ × z̄₂)/(z₂ × z̄₂) = (z₁ × z̄₂)/|z₂|²

**Vidéos YouTube:**
- Nombres complexes: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Forme algébrique: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Opérations: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          '(2+3i) + (1-i) = 3+2i',
          '(1+i)(1-i) = 1-i² = 2',
          '|3+4i| = √(9+16) = 5'
        ],
      },
      {
        id: 'math-7-ch2',
        title: 'Forme trigonométrique et exponentielle',
        content: `Représentation géométrique des nombres complexes.

**Forme trigonométrique:**
z = r(cos θ + i sin θ)
où r = |z| et θ = arg(z)

**Forme exponentielle:**
z = re^(iθ)

**Formule d'Euler:**
e^(iθ) = cos θ + i sin θ

**Argument:**
- arg(z₁z₂) = arg(z₁) + arg(z₂) [2π]
- arg(z₁/z₂) = arg(z₁) - arg(z₂) [2π]
- arg(z^n) = n × arg(z) [2π]

**Formule de Moivre:**
(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)

**Racines n-ièmes:**
Les racines n-ièmes de z = re^(iθ) sont:
zₖ = r^(1/n) × e^(i(θ+2kπ)/n) pour k = 0, 1, ..., n-1

**Vidéos YouTube:**
- Forme trigonométrique: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Forme exponentielle: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Formule de Moivre: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          '1+i = √2 × e^(iπ/4)',
          '(1+i)⁸ = (√2)⁸ × e^(i×8π/4) = 16',
          'Racines cubiques de 1: 1, e^(i2π/3), e^(i4π/3)'
        ],
      },
    ],
  },
  {
    id: 'math-8',
    title: 'Géométrie dans l\'espace',
    subject: 'math',
    description: 'Vecteurs, droites et plans dans l\'espace',
    duration: '3h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-8-ch1',
        title: 'Vecteurs de l\'espace',
        content: `Extension des vecteurs du plan à l'espace.

**Repère de l'espace:**
(O; i⃗, j⃗, k⃗) avec i⃗, j⃗, k⃗ non coplanaires

**Coordonnées:**
v⃗ = (x, y, z) = xi⃗ + yj⃗ + zk⃗

**Opérations:**
- Addition: u⃗ + v⃗ = (x₁+x₂, y₁+y₂, z₁+z₂)
- Multiplication par un scalaire: λu⃗ = (λx, λy, λz)

**Norme:**
||u⃗|| = √(x² + y² + z²)

**Produit scalaire:**
u⃗ · v⃗ = x₁x₂ + y₁y₂ + z₁z₂
u⃗ · v⃗ = ||u⃗|| × ||v⃗|| × cos(u⃗,v⃗)

**Orthogonalité:**
u⃗ ⊥ v⃗ ⟺ u⃗ · v⃗ = 0

**Colinéarité:**
u⃗ et v⃗ colinéaires ⟺ ∃λ, u⃗ = λv⃗

**Vidéos YouTube:**
- Vecteurs dans l'espace: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Produit scalaire: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Applications: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'u⃗(1,2,3) + v⃗(2,1,0) = (3,3,3)',
          '||u⃗(1,2,2)|| = √(1+4+4) = 3',
          'u⃗(1,0,0) · v⃗(0,1,0) = 0 → orthogonaux'
        ],
      },
      {
        id: 'math-8-ch2',
        title: 'Droites et plans',
        content: `Équations de droites et de plans dans l'espace.

**Équation paramétrique d'une droite:**
Passant par A(x₀,y₀,z₀) de vecteur directeur u⃗(a,b,c):
x = x₀ + ta
y = y₀ + tb
z = z₀ + tc

**Équation cartésienne d'un plan:**
ax + by + cz + d = 0
où n⃗(a,b,c) est un vecteur normal au plan

**Plan défini par trois points:**
Le plan (ABC) a pour vecteur normal n⃗ = AB⃗ ∧ AC⃗

**Distance point-plan:**
d(M,P) = |ax₀ + by₀ + cz₀ + d|/√(a² + b² + c²)

**Intersection:**
- Droite-plan: résoudre le système
- Deux plans: droite d'intersection
- Trois plans: point ou droite ou vide

**Vidéos YouTube:**
- Droites dans l'espace: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Plans: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Intersections: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Droite: (x,y,z) = (1,2,3) + t(1,0,1)',
          'Plan: 2x - y + 3z - 6 = 0',
          'Distance de O(0,0,0) au plan x+y+z-3=0: 3/√3 = √3'
        ],
      },
    ],
  },

  // ===== PHYSIQUE BTS ÉLECTROTECHNIQUE =====
  {
    id: 'elec-1',
    title: 'Circuits électriques en courant continu',
    subject: 'physics',
    description: 'Lois fondamentales et analyse des circuits en régime continu',
    duration: '3h',
    difficulty: 'beginner',
    chapters: [
      {
        id: 'elec-1-ch1',
        title: 'Lois de Kirchhoff et loi d\'Ohm',
        content: `Les lois de Kirchhoff sont les fondements de l'analyse des circuits électriques.

**Loi d'Ohm:**
La tension aux bornes d'une résistance est proportionnelle au courant qui la traverse.
U = R × I

Où:
- U: tension en volts (V)
- R: résistance en ohms (Ω)
- I: intensité en ampères (A)

**Loi des nœuds (1ère loi de Kirchhoff):**
La somme des courants qui arrivent à un nœud est égale à la somme des courants qui en repartent.
∑I(entrantes) = ∑I(sortantes)

**Loi des mailles (2ème loi de Kirchhoff):**
La somme algébrique des tensions le long d'une maille fermée est nulle.
∑U = 0

**Association de résistances:**
- En série: Req = R1 + R2 + R3 + ...
- En parallèle: 1/Req = 1/R1 + 1/R2 + 1/R3 + ...

**Puissance électrique:**
P = U × I = R × I² = U²/R

**Vidéos YouTube:**
- Loi d'Ohm expliquée: https://www.youtube.com/watch?v=8jB6hDUqN0Y
- Lois de Kirchhoff: https://www.youtube.com/watch?v=3WL8i8RzJno
- Associations de résistances: https://www.youtube.com/watch?v=kFlVqFEPHDo`,
        examples: [
          'Circuit série: I constant, U se répartit proportionnellement aux résistances',
          'Circuit parallèle: U constant, I se répartit inversement aux résistances',
          'Diviseur de tension: U2 = U × R2/(R1+R2)',
          'Diviseur de courant: I1 = I × R2/(R1+R2)'
        ],
      },
      {
        id: 'elec-1-ch2',
        title: 'Théorèmes de Thévenin et Norton',
        content: `Ces théorèmes permettent de simplifier l'analyse des circuits complexes.

**Théorème de Thévenin:**
Tout circuit linéaire vu de deux bornes peut être remplacé par un générateur de tension (Eth) en série avec une résistance (Rth).

**Méthode de calcul:**
1. Calculer la tension à vide Eth (circuit ouvert)
2. Calculer la résistance équivalente Rth (sources éteintes)
3. Le circuit équivalent est: Eth en série avec Rth

**Théorème de Norton:**
Tout circuit linéaire vu de deux bornes peut être remplacé par un générateur de courant (In) en parallèle avec une résistance (Rn).

**Relations:**
- In = Eth/Rth
- Rn = Rth
- Eth = In × Rn

**Applications:**
- Simplification de circuits complexes
- Calcul de courant dans une charge variable
- Adaptation d'impédance

**Vidéos YouTube:**
- Théorème de Thévenin: https://www.youtube.com/watch?v=2kFzCdP8H8A
- Théorème de Norton: https://www.youtube.com/watch?v=IL2MCJV8x-Y
- Équivalence Thévenin-Norton: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Circuit avec plusieurs sources: simplification par Thévenin',
          'Calcul de puissance maximale transférée',
          'Conversion Thévenin ↔ Norton'
        ],
      },
      {
        id: 'elec-1-ch3',
        title: 'Méthodes d\'analyse des circuits',
        content: `Différentes méthodes pour analyser les circuits électriques complexes.

**Méthode des mailles:**
On applique la loi des mailles à chaque maille indépendante du circuit.
- Choisir un sens de parcours pour chaque maille
- Écrire l'équation de maille: ∑U = 0
- Résoudre le système d'équations

**Méthode des nœuds:**
On applique la loi des nœuds à chaque nœud du circuit.
- Choisir un nœud de référence (masse)
- Écrire l'équation de nœud pour chaque nœud: ∑I = 0
- Résoudre le système d'équations

**Principe de superposition:**
Dans un circuit linéaire avec plusieurs sources, le courant (ou la tension) en un point est la somme des courants (ou tensions) dus à chaque source prise séparément.

**Méthode:**
1. Éteindre toutes les sources sauf une
2. Calculer la grandeur recherchée
3. Répéter pour chaque source
4. Additionner les résultats

**Vidéos YouTube:**
- Méthode des mailles: https://www.youtube.com/watch?v=nqKFJF8gPpE
- Méthode des nœuds: https://www.youtube.com/watch?v=Tz3t-FH914E
- Principe de superposition: https://www.youtube.com/watch?v=YVLvsgbZGJw`,
        examples: [
          'Circuit à 3 mailles: système de 3 équations',
          'Circuit à 4 nœuds: potentiels nodaux',
          'Circuit avec 2 sources: superposition'
        ],
      },
    ],
  },
  {
    id: 'elec-2',
    title: 'Circuits en courant alternatif',
    subject: 'physics',
    description: 'Analyse des circuits en régime sinusoïdal',
    duration: '3h30',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'elec-2-ch1',
        title: 'Grandeurs sinusoïdales',
        content: `Étude des signaux alternatifs sinusoïdaux.

**Signal sinusoïdal:**
u(t) = Umax × sin(ωt + φ)

Où:
- Umax: amplitude (valeur maximale)
- ω = 2πf: pulsation en rad/s
- f: fréquence en Hz
- T = 1/f: période en secondes
- φ: phase à l'origine en radians

**Valeur efficace:**
Pour un signal sinusoïdal:
Ueff = Umax/√2 ≈ 0,707 × Umax

**Déphasage:**
Le déphasage entre deux signaux est la différence de leurs phases.
Δφ = φ2 - φ1

**Représentation de Fresnel:**
Les grandeurs sinusoïdales sont représentées par des vecteurs tournants (phaseurs).

**Notation complexe:**
U = Ueff × e^(jφ) = Ueff × (cos φ + j sin φ)

**Vidéos YouTube:**
- Signaux sinusoïdaux: https://www.youtube.com/watch?v=yKbUxCJ3Saw
- Valeur efficace: https://www.youtube.com/watch?v=qKvKjYwZ8Hs
- Représentation de Fresnel: https://www.youtube.com/watch?v=7FYHt5XviKc`,
        examples: [
          'u(t) = 230√2 × sin(314t) → Ueff = 230V, f = 50Hz',
          'Déphasage de π/2: signaux en quadrature',
          'Déphasage de π: signaux en opposition de phase'
        ],
      },
      {
        id: 'elec-2-ch2',
        title: 'Impédances complexes',
        content: `Étude des composants en régime sinusoïdal.

**Résistance:**
- Impédance: ZR = R
- Pas de déphasage: φ = 0
- U et I en phase

**Inductance:**
- Impédance: ZL = jLω = jXL
- Réactance inductive: XL = Lω
- Déphasage: φ = +π/2 (U en avance sur I)

**Capacité:**
- Impédance: ZC = 1/(jCω) = -j/Cω = -jXC
- Réactance capacitive: XC = 1/(Cω)
- Déphasage: φ = -π/2 (I en avance sur U)

**Impédance équivalente:**
- En série: Zeq = Z1 + Z2 + Z3 + ...
- En parallèle: 1/Zeq = 1/Z1 + 1/Z2 + 1/Z3 + ...

**Circuit RLC série:**
Z = R + j(XL - XC)
|Z| = √(R² + (XL - XC)²)
φ = arctan((XL - XC)/R)

**Vidéos YouTube:**
- Impédances en alternatif: https://www.youtube.com/watch?v=7w8QJhqBESE
- Circuit RLC série: https://www.youtube.com/watch?v=iKFMrVhZGHk
- Diagramme de Fresnel: https://www.youtube.com/watch?v=5Hx4QQXJ8Hs`,
        examples: [
          'L = 0,1H à f = 50Hz → XL = 31,4Ω',
          'C = 100µF à f = 50Hz → XC = 31,8Ω',
          'Circuit RLC: résonance quand XL = XC'
        ],
      },
      {
        id: 'elec-2-ch3',
        title: 'Puissance en alternatif',
        content: `Calcul des puissances en régime sinusoïdal.

**Puissance instantanée:**
p(t) = u(t) × i(t)

**Puissance active (P):**
C'est la puissance moyenne consommée.
P = Ueff × Ieff × cos(φ)
Unité: Watt (W)

**Puissance réactive (Q):**
C'est la puissance échangée avec les éléments réactifs.
Q = Ueff × Ieff × sin(φ)
Unité: VAR (Volt-Ampère Réactif)

**Puissance apparente (S):**
S = Ueff × Ieff
Unité: VA (Volt-Ampère)

**Relations:**
S² = P² + Q²
S = √(P² + Q²)

**Facteur de puissance:**
cos(φ) = P/S

**Compensation de l'énergie réactive:**
Ajout de condensateurs pour améliorer le facteur de puissance.

**Vidéos YouTube:**
- Puissance en alternatif: https://www.youtube.com/watch?v=fKjLWSQQzKo
- Facteur de puissance: https://www.youtube.com/watch?v=fKjLWSQQzKo
- Compensation réactive: https://www.youtube.com/watch?v=JrKoccVkVEA`,
        examples: [
          'Moteur: P = 5kW, cos(φ) = 0,8 → S = 6,25kVA',
          'Compensation: ajout de condensateurs en parallèle',
          'Amélioration du facteur de puissance de 0,7 à 0,95'
        ],
      },
    ],
  },
  {
    id: 'elec-3',
    title: 'Machines électriques à courant continu',
    subject: 'physics',
    description: 'Étude des moteurs et génératrices à courant continu',
    duration: '4h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'elec-3-ch1',
        title: 'Constitution et principe de fonctionnement',
        content: `Les machines à courant continu sont réversibles: moteur ou génératrice.

**Constitution:**
- Stator (inducteur): crée le champ magnétique
- Rotor (induit): siège de la f.é.m. induite
- Collecteur: assure la commutation
- Balais: contact électrique avec le collecteur

**Principe du moteur:**
Un conducteur parcouru par un courant et placé dans un champ magnétique subit une force (loi de Laplace).
F = B × I × L

**Principe de la génératrice:**
Un conducteur en mouvement dans un champ magnétique est le siège d'une f.é.m. induite (loi de Faraday).
E = B × L × v

**Force électromotrice (f.é.m.):**
E = K × Φ × n

Où:
- K: constante de la machine
- Φ: flux magnétique
- n: vitesse de rotation (tr/s)

**Couple électromagnétique:**
Tem = K × Φ × I

**Vidéos YouTube:**
- Machine à courant continu: https://www.youtube.com/watch?v=LAtPHANEfQo
- Principe du moteur DC: https://www.youtube.com/watch?v=CWulQ1ZSE3c
- Constitution d'une machine DC: https://www.youtube.com/watch?v=7XS8p5kQqvI`,
        examples: [
          'Moteur: énergie électrique → énergie mécanique',
          'Génératrice: énergie mécanique → énergie électrique',
          'Réversibilité: même machine, sens du transfert d\'énergie différent'
        ],
      },
      {
        id: 'elec-3-ch2',
        title: 'Moteur à excitation séparée',
        content: `Le moteur à excitation séparée est le plus utilisé en électrotechnique.

**Schéma équivalent:**
- Circuit inducteur: U = Rexc × Iexc
- Circuit induit: U = E + R × I

**Équations:**
E = K × Φ × n
Tem = K × Φ × I
Tu = Tem - Tpertes

**Bilan de puissance:**
Pa = U × I (puissance absorbée)
Pem = E × I (puissance électromagnétique)
Pu = Tu × Ω (puissance utile)

**Pertes:**
- Pertes Joule induit: pJ = R × I²
- Pertes Joule inducteur: pJexc = Rexc × Iexc²
- Pertes mécaniques et fer: pconstantes

**Rendement:**
η = Pu/Pa = Tu × Ω / (U × I)

**Caractéristiques:**
- Vitesse: n = (U - R × I)/(K × Φ)
- Couple: Tem = K × Φ × I

**Vidéos YouTube:**
- Moteur à excitation séparée: https://www.youtube.com/watch?v=K9P4GvFdgKo
- Bilan de puissance: https://www.youtube.com/watch?v=xQXqVuLh8Qs
- Caractéristiques du moteur DC: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Démarrage: I élevé car E = 0 à l\'arrêt',
          'Réglage de vitesse: variation de U ou Φ',
          'Point de fonctionnement: intersection Tem = Tr'
        ],
      },
      {
        id: 'elec-3-ch3',
        title: 'Autres types de moteurs DC',
        content: `Différents modes d'excitation des machines à courant continu.

**Moteur série:**
- Inducteur en série avec l'induit
- Φ proportionnel à I
- Couple élevé au démarrage
- Vitesse variable avec la charge
- Applications: traction, levage

**Moteur shunt (dérivation):**
- Inducteur en parallèle avec l'induit
- Φ constant
- Vitesse quasi-constante
- Applications: machines-outils

**Moteur compound:**
- Excitation série + excitation shunt
- Compromis entre série et shunt
- Applications: machines nécessitant couple et vitesse

**Démarrage des moteurs:**
- Rhéostat de démarrage
- Limitation du courant d'appel
- Démarrage progressif

**Freinage:**
- Freinage par récupération
- Freinage rhéostatique
- Freinage par contre-courant

**Vidéos YouTube:**
- Moteur série: https://www.youtube.com/watch?v=wFI-h0RFvKc
- Moteur shunt: https://www.youtube.com/watch?v=K9P4GvFdgKo
- Démarrage des moteurs DC: https://www.youtube.com/watch?v=LAtPHANEfQo`,
        examples: [
          'Moteur série: démarrage d\'un tramway',
          'Moteur shunt: tour à métaux',
          'Moteur compound: laminoir'
        ],
      },
    ],
  },
];
