
import { Course } from '@/types/course';

export const courses: Course[] = [
  {
    id: 'math-1',
    title: 'Fonctions et Limites',
    subject: 'math',
    description: 'Étude des fonctions, limites et continuité',
    duration: '2h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-1-ch1',
        title: 'Introduction aux fonctions',
        content: `Les fonctions sont des relations mathématiques qui associent à chaque élément d'un ensemble de départ un unique élément d'un ensemble d'arrivée.

**Définition formelle:**
Une fonction f de E vers F est une relation qui associe à tout élément x de E un unique élément y de F, noté f(x).

**Notation:** f: E → F, x ↦ f(x)

**Domaine de définition:**
L'ensemble des valeurs de x pour lesquelles f(x) existe.

**Exemples de fonctions usuelles:**
- Fonction affine: f(x) = ax + b
- Fonction polynomiale: f(x) = ax² + bx + c
- Fonction exponentielle: f(x) = eˣ
- Fonction logarithme: f(x) = ln(x)`,
        examples: [
          'f(x) = 2x + 3 est une fonction affine',
          'g(x) = x² - 4x + 1 est une fonction polynomiale',
          'h(x) = 1/x est définie pour x ≠ 0'
        ],
      },
      {
        id: 'math-1-ch2',
        title: 'Limites de fonctions',
        content: `La limite d'une fonction en un point décrit le comportement de la fonction au voisinage de ce point.

**Définition intuitive:**
lim(x→a) f(x) = L signifie que f(x) se rapproche de L quand x se rapproche de a.

**Propriétés des limites:**
- lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)
- lim(x→a) [k·f(x)] = k·lim(x→a) f(x)
- lim(x→a) [f(x)·g(x)] = lim(x→a) f(x) · lim(x→a) g(x)

**Formes indéterminées:**
- 0/0, ∞/∞, 0·∞, ∞-∞

**Limites remarquables:**
- lim(x→0) sin(x)/x = 1
- lim(x→∞) (1 + 1/x)ˣ = e`,
        examples: [
          'lim(x→2) (x² - 4)/(x - 2) = lim(x→2) (x + 2) = 4',
          'lim(x→∞) 1/x = 0',
          'lim(x→0⁺) 1/x = +∞'
        ],
      },
    ],
  },
  {
    id: 'math-2',
    title: 'Dérivation',
    subject: 'math',
    description: 'Calcul de dérivées et applications',
    duration: '1h30',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'math-2-ch1',
        title: 'Nombre dérivé et fonction dérivée',
        content: `La dérivée mesure le taux de variation instantané d'une fonction.

**Nombre dérivé:**
Le nombre dérivé de f en a est:
f'(a) = lim(h→0) [f(a+h) - f(a)]/h

**Interprétation géométrique:**
f'(a) est le coefficient directeur de la tangente à la courbe en x = a.

**Fonction dérivée:**
La fonction qui à x associe f'(x).

**Dérivées usuelles:**
- (xⁿ)' = n·xⁿ⁻¹
- (eˣ)' = eˣ
- (ln(x))' = 1/x
- (sin(x))' = cos(x)
- (cos(x))' = -sin(x)

**Opérations sur les dérivées:**
- (u + v)' = u' + v'
- (ku)' = ku'
- (uv)' = u'v + uv'
- (u/v)' = (u'v - uv')/v²`,
        examples: [
          'Si f(x) = x³, alors f\'(x) = 3x²',
          'Si f(x) = 2x² + 3x - 1, alors f\'(x) = 4x + 3',
          'Si f(x) = eˣ·sin(x), alors f\'(x) = eˣ·sin(x) + eˣ·cos(x)'
        ],
      },
    ],
  },
  {
    id: 'physics-1',
    title: 'Mécanique Newtonienne',
    subject: 'physics',
    description: 'Lois de Newton et applications',
    duration: '2h30',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'physics-1-ch1',
        title: 'Les trois lois de Newton',
        content: `Les lois de Newton sont les fondements de la mécanique classique.

**Première loi (Principe d'inertie):**
Un corps persiste dans son état de repos ou de mouvement rectiligne uniforme si la somme des forces qui s'exercent sur lui est nulle.

**Deuxième loi (Principe fondamental de la dynamique):**
La somme des forces appliquées à un corps est égale au produit de sa masse par son accélération.
∑F = m·a

**Troisième loi (Principe d'action-réaction):**
Si un corps A exerce une force sur un corps B, alors B exerce sur A une force de même intensité, de même direction mais de sens opposé.

**Applications:**
- Chute libre: F = m·g
- Plan incliné: décomposition des forces
- Mouvement circulaire: force centripète`,
        examples: [
          'Un livre posé sur une table reste immobile (1ère loi)',
          'F = m·a : une force de 10N sur 2kg donne a = 5m/s²',
          'Fusée: les gaz éjectés vers le bas propulsent la fusée vers le haut'
        ],
      },
      {
        id: 'physics-1-ch2',
        title: 'Énergie mécanique',
        content: `L'énergie mécanique est la somme de l'énergie cinétique et de l'énergie potentielle.

**Énergie cinétique:**
Ec = ½·m·v²

**Énergie potentielle de pesanteur:**
Ep = m·g·h

**Énergie mécanique:**
Em = Ec + Ep

**Conservation de l'énergie mécanique:**
Dans un système isolé sans frottements, l'énergie mécanique se conserve.

**Théorème de l'énergie cinétique:**
La variation d'énergie cinétique est égale au travail des forces:
ΔEc = W(F)

**Puissance:**
P = W/t = F·v`,
        examples: [
          'Pendule: conversion Ec ↔ Ep',
          'Chute libre: Ep diminue, Ec augmente, Em constante',
          'Travail du poids: W = m·g·h'
        ],
      },
    ],
  },
  {
    id: 'physics-2',
    title: 'Électricité',
    subject: 'physics',
    description: 'Circuits électriques et lois fondamentales',
    duration: '2h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'physics-2-ch1',
        title: 'Lois de Kirchhoff',
        content: `Les lois de Kirchhoff permettent d'analyser les circuits électriques.

**Loi des nœuds:**
La somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en repartent.
∑I(entrantes) = ∑I(sortantes)

**Loi des mailles:**
La somme algébrique des tensions le long d'une maille est nulle.
∑U = 0

**Loi d'Ohm:**
U = R·I

**Association de résistances:**
- En série: Req = R1 + R2 + R3 + ...
- En parallèle: 1/Req = 1/R1 + 1/R2 + 1/R3 + ...

**Puissance électrique:**
P = U·I = R·I² = U²/R`,
        examples: [
          'Circuit série: I constant, U se répartit',
          'Circuit parallèle: U constant, I se répartit',
          'Diviseur de tension: U2 = U·R2/(R1+R2)'
        ],
      },
    ],
  },
];
