
import { Course } from '@/types/course';

export const courses: Course[] = [
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
  {
    id: 'elec-4',
    title: 'Transformateurs monophasés',
    subject: 'physics',
    description: 'Étude des transformateurs en régime sinusoïdal',
    duration: '3h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'elec-4-ch1',
        title: 'Constitution et principe',
        content: `Le transformateur permet de modifier les niveaux de tension.

**Constitution:**
- Circuit magnétique (noyau ferromagnétique)
- Enroulement primaire (N1 spires)
- Enroulement secondaire (N2 spires)

**Principe:**
Un courant alternatif dans le primaire crée un flux magnétique variable qui induit une tension dans le secondaire.

**Rapport de transformation:**
m = N2/N1 = U2/U1 = I1/I2

**Types de transformateurs:**
- Abaisseur: m < 1 (U2 < U1)
- Élévateur: m > 1 (U2 > U1)
- Isolement: m = 1 (U2 = U1)

**Équations:**
- Primaire: U1 = -N1 × dΦ/dt
- Secondaire: U2 = -N2 × dΦ/dt

**Flux magnétique:**
Φ = Φmax × sin(ωt)

**Vidéos YouTube:**
- Transformateur monophasé: https://www.youtube.com/watch?v=UchitHGF4n8
- Principe du transformateur: https://www.youtube.com/watch?v=VbbxFZWfCPE
- Rapport de transformation: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Transformateur 230V/24V: m = 24/230 ≈ 0,104',
          'Transformateur élévateur: centrale électrique',
          'Transformateur d\'isolement: sécurité'
        ],
      },
      {
        id: 'elec-4-ch2',
        title: 'Transformateur réel',
        content: `Prise en compte des imperfections du transformateur.

**Pertes dans le transformateur:**
- Pertes fer (magnétiques): hystérésis + courants de Foucault
- Pertes Joule: R1 × I1² + R2 × I2²

**Schéma équivalent:**
- Résistances des enroulements: R1, R2
- Inductances de fuite: L1, L2
- Résistance représentant les pertes fer: Rf
- Inductance magnétisante: Lm

**Chute de tension:**
ΔU = U20 - U2
Où U20 est la tension à vide

**Rendement:**
η = P2/P1 = P2/(P2 + pertes)

**Essais du transformateur:**
- Essai à vide: détermination du rapport m et des pertes fer
- Essai en court-circuit: détermination des résistances et réactances

**Indice horaire:**
Déphasage entre primaire et secondaire (couplage des enroulements).

**Vidéos YouTube:**
- Transformateur réel: https://www.youtube.com/watch?v=UchitHGF4n8
- Pertes dans le transformateur: https://www.youtube.com/watch?v=VbbxFZWfCPE
- Essais du transformateur: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Essai à vide: I10 faible, mesure de P10 (pertes fer)',
          'Essai en court-circuit: U1cc faible, mesure de Pcc (pertes Joule)',
          'Rendement maximal quand pertes fer = pertes Joule'
        ],
      },
      {
        id: 'elec-4-ch3',
        title: 'Couplages et transformateurs triphasés',
        content: `Transformateurs pour systèmes triphasés.

**Couplages possibles:**
- Étoile (Y): tensions simples et composées
- Triangle (Δ): tensions composées
- Zigzag (Z): amélioration de l'équilibrage

**Symboles de couplage:**
- Yy: étoile-étoile
- Yd: étoile-triangle
- Dy: triangle-étoile
- Dz: triangle-zigzag

**Relations en triphasé:**
- Tension composée: U = √3 × V
- Puissance: P = √3 × U × I × cos(φ)

**Indice horaire:**
Déphasage entre primaire et secondaire exprimé en heures (0 à 11).

**Applications:**
- Distribution électrique
- Adaptation de tension
- Isolement galvanique

**Vidéos YouTube:**
- Transformateur triphasé: https://www.youtube.com/watch?v=UchitHGF4n8
- Couplages étoile-triangle: https://www.youtube.com/watch?v=VbbxFZWfCPE
- Indice horaire: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Couplage Dy11: distribution BT',
          'Couplage Yd11: élévation de tension',
          'Couplage Yz11: alimentation déséquilibrée'
        ],
      },
    ],
  },
  {
    id: 'elec-5',
    title: 'Machines asynchrones triphasées',
    subject: 'physics',
    description: 'Étude des moteurs asynchrones',
    duration: '4h',
    difficulty: 'advanced',
    chapters: [
      {
        id: 'elec-5-ch1',
        title: 'Constitution et principe',
        content: `Le moteur asynchrone est le plus utilisé dans l'industrie.

**Constitution:**
- Stator: enroulements triphasés créant un champ tournant
- Rotor: cage d'écureuil ou bobiné
- Entrefer: espace entre stator et rotor

**Principe du champ tournant:**
Trois enroulements décalés de 120° alimentés par un système triphasé créent un champ magnétique tournant.

**Vitesse de synchronisme:**
ns = f/p

Où:
- f: fréquence du réseau (Hz)
- p: nombre de paires de pôles
- ns: vitesse en tr/s

**Glissement:**
g = (ns - n)/ns

Où:
- n: vitesse du rotor
- g: glissement (0 < g < 1)

**Fréquence rotorique:**
fr = g × f

**Principe de fonctionnement:**
Le champ tournant induit des courants dans le rotor qui créent un couple.

**Vidéos YouTube:**
- Moteur asynchrone: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Champ tournant: https://www.youtube.com/watch?v=LtJoJBUSe28
- Principe du moteur asynchrone: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Moteur 2 pôles, 50Hz: ns = 50/1 = 50 tr/s = 3000 tr/min',
          'Moteur 4 pôles, 50Hz: ns = 50/2 = 25 tr/s = 1500 tr/min',
          'Glissement nominal: 2 à 5%'
        ],
      },
      {
        id: 'elec-5-ch2',
        title: 'Bilan de puissance et caractéristiques',
        content: `Analyse énergétique du moteur asynchrone.

**Bilan de puissance:**
Pa = √3 × U × I × cos(φ) (puissance absorbée)
Ptr = Pa - pJs (puissance transmise au rotor)
Pem = Ptr - pJr (puissance électromagnétique)
Pu = Pem - pméca (puissance utile)

**Pertes:**
- Pertes Joule stator: pJs = 3 × Rs × I²
- Pertes fer: pfer (constantes)
- Pertes Joule rotor: pJr = g × Ptr
- Pertes mécaniques: pméca (frottements, ventilation)

**Couple électromagnétique:**
Tem = Pem/Ωs = Ptr/(2π × ns)

**Couple utile:**
Tu = Pu/Ω = Pu/(2π × n)

**Rendement:**
η = Pu/Pa

**Caractéristique couple-vitesse:**
- Zone stable: 0 < g < gn
- Couple de démarrage: Td
- Couple maximal: Tmax
- Couple nominal: Tn

**Vidéos YouTube:**
- Bilan de puissance moteur asynchrone: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Caractéristiques du moteur: https://www.youtube.com/watch?v=LtJoJBUSe28
- Rendement et pertes: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Moteur 5,5kW, η = 0,85 → Pa = 6,47kW',
          'Glissement 3% → pJr = 0,03 × Ptr',
          'Point de fonctionnement: Tem = Tr'
        ],
      },
      {
        id: 'elec-5-ch3',
        title: 'Démarrage et variation de vitesse',
        content: `Méthodes de démarrage et de contrôle des moteurs asynchrones.

**Problème du démarrage:**
- Courant de démarrage élevé: Id = 5 à 8 × In
- Couple de démarrage faible: Td = 0,5 à 1,5 × Tn

**Démarrage direct:**
- Simple et économique
- Réservé aux petites puissances
- Pointe de courant importante

**Démarrage étoile-triangle:**
- Réduction du courant: Id/√3
- Réduction du couple: Td/3
- Commutation étoile → triangle

**Démarrage statorique:**
- Résistances ou inductances en série
- Réduction progressive de la tension
- Démarrage progressif

**Démarrage rotorique:**
- Moteur à rotor bobiné
- Résistances rotoriques
- Amélioration du couple de démarrage

**Variation de vitesse:**
- Variation de fréquence (variateur)
- Variation du nombre de pôles
- Variation du glissement

**Variateur de fréquence:**
- Redresseur + onduleur
- Contrôle U/f = constante
- Variation continue de la vitesse

**Vidéos YouTube:**
- Démarrage moteur asynchrone: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Démarrage étoile-triangle: https://www.youtube.com/watch?v=LtJoJBUSe28
- Variateur de vitesse: https://www.youtube.com/watch?v=8wHVQNu3Tz8`,
        examples: [
          'Démarrage Y-Δ: Id = 2,5 × In au lieu de 7 × In',
          'Variateur: vitesse de 0 à 100% de ns',
          'Freinage par injection de courant continu'
        ],
      },
    ],
  },
  {
    id: 'elec-6',
    title: 'Électronique de puissance',
    subject: 'physics',
    description: 'Composants et convertisseurs statiques',
    duration: '4h',
    difficulty: 'advanced',
    chapters: [
      {
        id: 'elec-6-ch1',
        title: 'Composants de l\'électronique de puissance',
        content: `Les semi-conducteurs de puissance permettent de contrôler l'énergie électrique.

**Diode de puissance:**
- Composant unidirectionnel non commandable
- Conduction: VAK > 0
- Blocage: VAK < 0
- Applications: redressement, roue libre

**Thyristor:**
- Composant unidirectionnel commandable à l'amorçage
- Amorçage: impulsion sur la gâchette
- Blocage: courant s'annule
- Applications: gradateurs, redresseurs commandés

**Transistor IGBT:**
- Composant commandable à l'amorçage et au blocage
- Commande par tension (grille)
- Fréquences de commutation élevées
- Applications: onduleurs, hacheurs

**MOSFET de puissance:**
- Composant rapide
- Faibles pertes en commutation
- Applications: alimentations à découpage

**Caractéristiques:**
- Tension maximale: VDRM, VRRM
- Courant maximal: ITAV, IF(AV)
- Pertes: conduction + commutation

**Vidéos YouTube:**
- Composants de puissance: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Diode et thyristor: https://www.youtube.com/watch?v=AQqyGNOP_3o
- IGBT et MOSFET: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Diode: redressement simple alternance',
          'Thyristor: gradateur de lumière',
          'IGBT: onduleur de variateur de vitesse'
        ],
      },
      {
        id: 'elec-6-ch2',
        title: 'Redresseurs',
        content: `Conversion alternatif → continu.

**Redressement non commandé:**
- Diodes uniquement
- Tension de sortie fixe
- Applications: alimentations simples

**Redresseur simple alternance:**
- 1 diode
- Ud(moy) = Umax/π ≈ 0,45 × Ueff
- Ondulation importante

**Redresseur double alternance:**
- Pont de Graetz (4 diodes)
- Ud(moy) = 2 × Umax/π ≈ 0,9 × Ueff
- Meilleure qualité

**Redressement commandé:**
- Thyristors
- Tension de sortie variable
- Angle d'amorçage α

**Pont mixte:**
- 2 thyristors + 2 diodes
- Ud(moy) = (Umax/π) × (1 + cos α)

**Pont tout thyristors:**
- 4 thyristors
- Ud(moy) = (2 × Umax/π) × cos α
- Fonctionnement en onduleur possible

**Filtrage:**
- Condensateur: lissage de tension
- Inductance: lissage de courant

**Vidéos YouTube:**
- Redresseurs: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Pont de Graetz: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Redresseur commandé: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Redresseur monophasé: alimentation 12V',
          'Redresseur triphasé: variateur de vitesse',
          'Pont tout thyristors: réversibilité'
        ],
      },
      {
        id: 'elec-6-ch3',
        title: 'Hacheurs et onduleurs',
        content: `Convertisseurs continu-continu et continu-alternatif.

**Hacheur série (Buck):**
- Abaisseur de tension
- Umoy = α × E
- α: rapport cyclique (0 < α < 1)

**Hacheur parallèle (Boost):**
- Élévateur de tension
- Umoy = E/(1 - α)

**Hacheur 4 quadrants:**
- Réversibilité en tension et courant
- Pont en H (4 interrupteurs)

**Onduleur monophasé:**
- Conversion DC → AC
- Pont en H
- Modulation de largeur d'impulsion (MLI/PWM)

**Onduleur triphasé:**
- 6 interrupteurs (IGBT)
- Création d'un système triphasé
- Applications: variateurs de vitesse

**Commande MLI:**
- Fréquence de découpage élevée
- Contrôle de l'amplitude et de la fréquence
- Réduction des harmoniques

**Vidéos YouTube:**
- Hacheurs: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Onduleurs: https://www.youtube.com/watch?v=AQqyGNOP_3o
- MLI/PWM: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Hacheur série: alimentation ordinateur portable',
          'Hacheur 4Q: traction électrique',
          'Onduleur: alimentation sans interruption (ASI)'
        ],
      },
    ],
  },
  {
    id: 'elec-7',
    title: 'Systèmes triphasés',
    subject: 'physics',
    description: 'Étude des réseaux triphasés équilibrés et déséquilibrés',
    duration: '3h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'elec-7-ch1',
        title: 'Systèmes triphasés équilibrés',
        content: `Le système triphasé est le mode de distribution de l'énergie électrique.

**Définition:**
Système de trois tensions sinusoïdales de même amplitude et déphasées de 2π/3 (120°).

**Tensions simples:**
v1(t) = V × sin(ωt)
v2(t) = V × sin(ωt - 2π/3)
v3(t) = V × sin(ωt - 4π/3)

**Tensions composées:**
u12 = v1 - v2
u23 = v2 - v3
u31 = v3 - v1

**Relations:**
U = √3 × V
U: tension composée
V: tension simple

**Couplage étoile:**
- Point neutre commun
- Tensions simples accessibles
- I = J (courant de ligne = courant de phase)

**Couplage triangle:**
- Pas de neutre
- Tensions composées uniquement
- I = √3 × J

**Puissance triphasée:**
P = 3 × V × J × cos(φ) = √3 × U × I × cos(φ)

**Vidéos YouTube:**
- Systèmes triphasés: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Couplage étoile-triangle: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Puissance en triphasé: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Réseau 400V/230V: U = 400V, V = 230V',
          'Charge étoile: 3 impédances identiques',
          'Charge triangle: moteur triphasé'
        ],
      },
      {
        id: 'elec-7-ch2',
        title: 'Mesure de puissance en triphasé',
        content: `Méthodes de mesure de la puissance en triphasé.

**Méthode des trois wattmètres:**
- Système avec neutre
- P = P1 + P2 + P3
- Mesure directe de chaque phase

**Méthode des deux wattmètres (Blondel):**
- Système sans neutre
- P = P1 + P2
- Valable même si déséquilibré

**Théorème de Blondel:**
La puissance active d'un système à n conducteurs se mesure avec n-1 wattmètres.

**Calcul du facteur de puissance:**
tan(φ) = √3 × (P1 - P2)/(P1 + P2)

**Puissance réactive:**
Q = √3 × (P1 - P2)

**Wattmètre triphasé:**
- Mesure directe P, Q, S
- Affichage du cos(φ)
- Analyseur de réseau

**Vidéos YouTube:**
- Mesure de puissance triphasée: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Méthode des 2 wattmètres: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Théorème de Blondel: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Charge équilibrée: P1 = P2 = P3',
          'Charge inductive: P1 > P2',
          'Charge capacitive: P1 < P2'
        ],
      },
      {
        id: 'elec-7-ch3',
        title: 'Systèmes déséquilibrés',
        content: `Analyse des systèmes triphasés non équilibrés.

**Causes du déséquilibre:**
- Charges monophasées
- Défaut d'isolement
- Rupture de phase

**Composantes symétriques (Fortescue):**
Tout système déséquilibré peut se décomposer en trois systèmes équilibrés:
- Système direct (positif)
- Système inverse (négatif)
- Système homopolaire (zéro)

**Méthode de résolution:**
1. Calculer les composantes symétriques
2. Résoudre chaque système séparément
3. Superposer les résultats

**Conséquences du déséquilibre:**
- Échauffement des machines
- Couple pulsatoire
- Courant dans le neutre

**Compensation:**
- Répartition des charges
- Condensateurs de compensation
- Filtres actifs

**Vidéos YouTube:**
- Systèmes déséquilibrés: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Composantes symétriques: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Méthode de Fortescue: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Charge monophasée sur réseau triphasé',
          'Rupture d\'une phase: système inverse',
          'Court-circuit: composante homopolaire'
        ],
      },
    ],
  },
  {
    id: 'elec-8',
    title: 'Automatismes et logique',
    subject: 'physics',
    description: 'Systèmes automatisés et logique combinatoire',
    duration: '3h',
    difficulty: 'intermediate',
    chapters: [
      {
        id: 'elec-8-ch1',
        title: 'Logique combinatoire',
        content: `Fonctions logiques de base et algèbre de Boole.

**Fonctions logiques de base:**
- ET (AND): S = A · B
- OU (OR): S = A + B
- NON (NOT): S = Ā
- NAND: S = A · B (barre)
- NOR: S = A + B (barre)
- XOR: S = A ⊕ B

**Algèbre de Boole:**
- Commutativité: A + B = B + A
- Associativité: (A + B) + C = A + (B + C)
- Distributivité: A · (B + C) = A · B + A · C
- Théorèmes de De Morgan: A + B (barre) = Ā · B̄

**Table de vérité:**
Tableau donnant la sortie pour toutes les combinaisons d'entrées.

**Simplification:**
- Tableau de Karnaugh
- Méthode algébrique
- Minimisation du nombre de portes

**Circuits combinatoires:**
- Décodeurs
- Multiplexeurs
- Comparateurs
- Additionneurs

**Vidéos YouTube:**
- Logique combinatoire: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Algèbre de Boole: https://www.youtube.com/watch?v=AQqyGNOP_3o
- Tableau de Karnaugh: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Fonction ET: S = 1 ssi A = 1 ET B = 1',
          'Fonction OU: S = 1 si A = 1 OU B = 1',
          'XOR: détection de parité'
        ],
      },
      {
        id: 'elec-8-ch2',
        title: 'Logique séquentielle',
        content: `Systèmes à mémoire et automates.

**Bascules:**
- Bascule RS: Set-Reset
- Bascule D: Data (recopie l'entrée)
- Bascule JK: universelle
- Bascule T: Toggle (basculement)

**Registres:**
- Registre à décalage
- Registre de stockage
- Applications: mémoires, conversions

**Compteurs:**
- Compteur asynchrone (ripple)
- Compteur synchrone
- Compteur modulo N
- Décompteur

**Automates:**
- Diagramme d'états
- Table de transition
- Équations d'évolution

**GRAFCET:**
- Représentation graphique
- Étapes et transitions
- Actions associées aux étapes

**Vidéos YouTube:**
- Logique séquentielle: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Bascules: https://www.youtube.com/watch?v=AQqyGNOP_3o
- GRAFCET: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Bascule RS: mémorisation d\'un état',
          'Compteur 0-9: affichage digital',
          'GRAFCET: cycle de machine automatique'
        ],
      },
      {
        id: 'elec-8-ch3',
        title: 'Automates programmables (API)',
        content: `Programmation et utilisation des automates industriels.

**Constitution d'un API:**
- Unité centrale (CPU)
- Modules d'entrées/sorties
- Alimentation
- Interfaces de communication

**Langages de programmation:**
- Ladder (schéma à contacts)
- Grafcet (SFC)
- Liste d'instructions (IL)
- Texte structuré (ST)
- Blocs fonctionnels (FBD)

**Programmation Ladder:**
- Contacts NO (normalement ouvert)
- Contacts NF (normalement fermé)
- Bobines
- Temporisations
- Compteurs

**Fonctions avancées:**
- Temporisateurs (TON, TOF, TP)
- Compteurs (CTU, CTD)
- Comparateurs
- Opérations arithmétiques

**Applications:**
- Automatisation industrielle
- Contrôle de processus
- Supervision

**Vidéos YouTube:**
- Automates programmables: https://www.youtube.com/watch?v=8wHVQNu3Tz8
- Programmation Ladder: https://www.youtube.com/watch?v=AQqyGNOP_3o
- GRAFCET sur API: https://www.youtube.com/watch?v=LtJoJBUSe28`,
        examples: [
          'Démarrage étoile-triangle automatique',
          'Contrôle de niveau de cuve',
          'Chaîne de production automatisée'
        ],
      },
    ],
  },
];
