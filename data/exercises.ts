
import { Exercise } from '@/types/course';

export const exercises: Exercise[] = [
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
  {
    id: 'ex-elec-1-5',
    courseId: 'elec-1',
    subject: 'physics',
    title: 'Théorème de Thévenin',
    question: 'Un générateur de Thévenin a une f.é.m. de 12V et une résistance interne de 2Ω. Quel courant débite-t-il dans une charge de 4Ω ?',
    options: ['1 A', '2 A', '3 A', '6 A'],
    correctAnswer: '2 A',
    explanation: `Pour calculer le courant, on applique la loi d'Ohm au circuit équivalent.

**Circuit équivalent:**
Eth en série avec Rth et Rcharge

**Données:**
- Eth = 12 V
- Rth = 2 Ω
- Rcharge = 4 Ω

**Résistance totale:**
Rtot = Rth + Rcharge = 2 + 4 = 6 Ω

**Calcul du courant:**
I = Eth/Rtot = 12/6 = 2 A

**Réponse:** Le courant est de 2 A.

**Tension aux bornes de la charge:**
Ucharge = Rcharge × I = 4 × 2 = 8 V`,
    difficulty: 'medium',
    skill: 'Théorèmes de Thévenin et Norton',
  },
  {
    id: 'ex-elec-1-6',
    courseId: 'elec-1',
    subject: 'physics',
    title: 'Diviseur de tension',
    question: 'Dans un diviseur de tension avec R1 = 100Ω et R2 = 200Ω alimenté par 15V, quelle est la tension aux bornes de R2 ?',
    options: ['5 V', '7,5 V', '10 V', '15 V'],
    correctAnswer: '10 V',
    explanation: `La formule du diviseur de tension est: U2 = U × R2/(R1 + R2)

**Données:**
- U = 15 V
- R1 = 100 Ω
- R2 = 200 Ω

**Calcul:**
U2 = 15 × 200/(100 + 200)
U2 = 15 × 200/300
U2 = 15 × 2/3
U2 = 10 V

**Réponse:** La tension aux bornes de R2 est de 10 V.

**Vérification:**
U1 = 15 × 100/300 = 5 V
U1 + U2 = 5 + 10 = 15 V ✓`,
    difficulty: 'medium',
    skill: 'Diviseur de tension',
  },

  // Exercices Circuit AC
  {
    id: 'ex-elec-2-1',
    courseId: 'elec-2',
    subject: 'physics',
    title: 'Valeur efficace',
    question: 'Un signal sinusoïdal a une amplitude de 325V. Quelle est sa valeur efficace ?',
    options: ['163 V', '230 V', '325 V', '460 V'],
    correctAnswer: '230 V',
    explanation: `La valeur efficace d'un signal sinusoïdal est: Ueff = Umax/√2

**Données:**
- Umax = 325 V
- Ueff = ?

**Calcul:**
Ueff = 325/√2 = 325/1,414 ≈ 230 V

**Réponse:** La valeur efficace est de 230 V.

**Remarque:** C'est la tension du réseau domestique français.
- Umax = 325 V (valeur crête)
- Ueff = 230 V (valeur efficace)
- Umoy = 0 V (valeur moyenne sur une période)`,
    difficulty: 'easy',
    skill: 'Grandeurs sinusoïdales',
  },
  {
    id: 'ex-elec-2-2',
    courseId: 'elec-2',
    subject: 'physics',
    title: 'Réactance inductive',
    question: 'Une inductance de 0,2H est alimentée par une tension de fréquence 50Hz. Quelle est sa réactance ?',
    options: ['10 Ω', '31,4 Ω', '62,8 Ω', '100 Ω'],
    correctAnswer: '62,8 Ω',
    explanation: `La réactance inductive est: XL = Lω = 2πfL

**Données:**
- L = 0,2 H
- f = 50 Hz
- XL = ?

**Calcul:**
XL = 2 × π × 50 × 0,2
XL = 2 × 3,14 × 50 × 0,2
XL = 62,8 Ω

**Réponse:** La réactance inductive est de 62,8 Ω.

**Remarque:** 
- XL augmente avec la fréquence
- À f = 0 (continu): XL = 0 (court-circuit)
- À f → ∞: XL → ∞ (circuit ouvert)`,
    difficulty: 'medium',
    skill: 'Impédances complexes',
  },
  {
    id: 'ex-elec-2-3',
    courseId: 'elec-2',
    subject: 'physics',
    title: 'Réactance capacitive',
    question: 'Un condensateur de 100µF est alimenté par une tension de fréquence 50Hz. Quelle est sa réactance ?',
    options: ['15,9 Ω', '31,8 Ω', '63,6 Ω', '100 Ω'],
    correctAnswer: '31,8 Ω',
    explanation: `La réactance capacitive est: XC = 1/(Cω) = 1/(2πfC)

**Données:**
- C = 100 µF = 100 × 10⁻⁶ F
- f = 50 Hz
- XC = ?

**Calcul:**
XC = 1/(2 × π × 50 × 100 × 10⁻⁶)
XC = 1/(2 × 3,14 × 50 × 0,0001)
XC = 1/0,0314
XC ≈ 31,8 Ω

**Réponse:** La réactance capacitive est de 31,8 Ω.

**Remarque:**
- XC diminue quand la fréquence augmente
- À f = 0 (continu): XC → ∞ (circuit ouvert)
- À f → ∞: XC → 0 (court-circuit)`,
    difficulty: 'medium',
    skill: 'Impédances complexes',
  },
  {
    id: 'ex-elec-2-4',
    courseId: 'elec-2',
    subject: 'physics',
    title: 'Circuit RLC série',
    question: 'Un circuit RLC série a R = 30Ω, XL = 50Ω et XC = 10Ω. Quelle est l\'impédance totale ?',
    options: ['30 Ω', '40 Ω', '50 Ω', '90 Ω'],
    correctAnswer: '50 Ω',
    explanation: `L'impédance d'un circuit RLC série est: Z = √(R² + (XL - XC)²)

**Données:**
- R = 30 Ω
- XL = 50 Ω
- XC = 10 Ω

**Calcul:**
Z = √(30² + (50 - 10)²)
Z = √(900 + 40²)
Z = √(900 + 1600)
Z = √2500
Z = 50 Ω

**Réponse:** L'impédance totale est de 50 Ω.

**Déphasage:**
φ = arctan((XL - XC)/R) = arctan(40/30) ≈ 53°
Le circuit est inductif (φ > 0).`,
    difficulty: 'medium',
    skill: 'Circuit RLC',
  },
  {
    id: 'ex-elec-2-5',
    courseId: 'elec-2',
    subject: 'physics',
    title: 'Puissance active',
    question: 'Un récepteur absorbe 10A sous 230V avec un facteur de puissance de 0,8. Quelle est la puissance active ?',
    options: ['920 W', '1380 W', '1840 W', '2300 W'],
    correctAnswer: '1840 W',
    explanation: `La puissance active est: P = U × I × cos(φ)

**Données:**
- U = 230 V
- I = 10 A
- cos(φ) = 0,8
- P = ?

**Calcul:**
P = 230 × 10 × 0,8
P = 1840 W

**Réponse:** La puissance active est de 1840 W (ou 1,84 kW).

**Autres grandeurs:**
- Puissance apparente: S = U × I = 2300 VA
- Puissance réactive: Q = √(S² - P²) = √(2300² - 1840²) ≈ 1380 VAR
- Vérification: S² = P² + Q² → 2300² = 1840² + 1380² ✓`,
    difficulty: 'medium',
    skill: 'Puissance en alternatif',
  },
  {
    id: 'ex-elec-2-6',
    courseId: 'elec-2',
    subject: 'physics',
    title: 'Facteur de puissance',
    question: 'Un moteur consomme une puissance active de 3kW et une puissance apparente de 5kVA. Quel est son facteur de puissance ?',
    options: ['0,5', '0,6', '0,7', '0,8'],
    correctAnswer: '0,6',
    explanation: `Le facteur de puissance est: cos(φ) = P/S

**Données:**
- P = 3 kW = 3000 W
- S = 5 kVA = 5000 VA
- cos(φ) = ?

**Calcul:**
cos(φ) = 3000/5000 = 0,6

**Réponse:** Le facteur de puissance est de 0,6.

**Interprétation:**
- cos(φ) = 0,6 est faible (mauvais rendement énergétique)
- Déphasage: φ = arccos(0,6) ≈ 53°
- Puissance réactive: Q = √(S² - P²) = √(25 - 9) = 4 kVAR

**Amélioration:** Ajouter des condensateurs pour augmenter cos(φ).`,
    difficulty: 'medium',
    skill: 'Facteur de puissance',
  },

  // Exercices Machines DC
  {
    id: 'ex-elec-3-1',
    courseId: 'elec-3',
    subject: 'physics',
    title: 'Force électromotrice',
    question: 'Un moteur DC a une constante K = 0,5 V/(tr/min), un flux Φ = 0,02 Wb et tourne à 1500 tr/min. Quelle est la f.é.m. ?',
    options: ['15 V', '30 V', '75 V', '150 V'],
    correctAnswer: '15 V',
    explanation: `La f.é.m. d'une machine DC est: E = K × Φ × n

**Attention aux unités:**
- K = 0,5 V/(tr/min) mais la formule utilise tr/s
- n = 1500 tr/min = 1500/60 = 25 tr/s

**Données:**
- K = 0,5 V/(tr/min) = 0,5 × 60 = 30 V·s/tr
- Φ = 0,02 Wb
- n = 25 tr/s

**Calcul:**
E = 30 × 0,02 × 25 = 15 V

**Ou directement:**
E = 0,5 × 0,02 × 1500 = 15 V

**Réponse:** La f.é.m. est de 15 V.`,
    difficulty: 'medium',
    skill: 'Machines à courant continu',
  },
  {
    id: 'ex-elec-3-2',
    courseId: 'elec-3',
    subject: 'physics',
    title: 'Couple électromagnétique',
    question: 'Un moteur DC a K = 1,2 N·m/A, Φ = 0,015 Wb et I = 10A. Quel est le couple électromagnétique ?',
    options: ['0,18 N·m', '1,8 N·m', '18 N·m', '180 N·m'],
    correctAnswer: '0,18 N·m',
    explanation: `Le couple électromagnétique est: Tem = K × Φ × I

**Données:**
- K = 1,2 N·m/A
- Φ = 0,015 Wb
- I = 10 A

**Calcul:**
Tem = 1,2 × 0,015 × 10
Tem = 0,18 N·m

**Réponse:** Le couple électromagnétique est de 0,18 N·m.

**Remarque:**
- Le couple est proportionnel au courant
- Pour augmenter le couple: augmenter I ou Φ
- Attention: I élevé → échauffement`,
    difficulty: 'medium',
    skill: 'Couple électromagnétique',
  },
  {
    id: 'ex-elec-3-3',
    courseId: 'elec-3',
    subject: 'physics',
    title: 'Rendement d\'un moteur',
    question: 'Un moteur absorbe 5kW et fournit une puissance mécanique de 4,2kW. Quel est son rendement ?',
    options: ['0,75', '0,80', '0,84', '0,90'],
    correctAnswer: '0,84',
    explanation: `Le rendement est: η = Pu/Pa

**Données:**
- Pa = 5 kW (puissance absorbée)
- Pu = 4,2 kW (puissance utile)
- η = ?

**Calcul:**
η = 4,2/5 = 0,84 = 84%

**Réponse:** Le rendement est de 0,84 (ou 84%).

**Pertes:**
Pertes = Pa - Pu = 5 - 4,2 = 0,8 kW = 800 W

**Répartition des pertes:**
- Pertes Joule (induit et inducteur)
- Pertes fer (hystérésis et Foucault)
- Pertes mécaniques (frottements, ventilation)`,
    difficulty: 'easy',
    skill: 'Rendement',
  },
  {
    id: 'ex-elec-3-4',
    courseId: 'elec-3',
    subject: 'physics',
    title: 'Vitesse d\'un moteur',
    question: 'Un moteur à excitation séparée: U = 220V, R = 0,5Ω, I = 20A, K×Φ = 2 V/(rad/s). Quelle est la vitesse ?',
    options: ['100 rad/s', '105 rad/s', '110 rad/s', '220 rad/s'],
    correctAnswer: '105 rad/s',
    explanation: `La vitesse se calcule à partir de: U = E + R × I et E = K × Φ × Ω

**Étape 1:** Calculer E
E = U - R × I = 220 - 0,5 × 20 = 220 - 10 = 210 V

**Étape 2:** Calculer Ω
E = K × Φ × Ω
Ω = E/(K × Φ) = 210/2 = 105 rad/s

**Réponse:** La vitesse est de 105 rad/s.

**Conversion:**
n = Ω/(2π) = 105/(2×3,14) ≈ 16,7 tr/s ≈ 1000 tr/min

**Remarque:** La chute de tension R×I réduit la vitesse.`,
    difficulty: 'hard',
    skill: 'Vitesse des moteurs',
  },

  // Exercices Transformateurs
  {
    id: 'ex-elec-4-1',
    courseId: 'elec-4',
    subject: 'physics',
    title: 'Rapport de transformation',
    question: 'Un transformateur a 1000 spires au primaire et 200 spires au secondaire. Quel est le rapport de transformation ?',
    options: ['0,2', '0,5', '2', '5'],
    correctAnswer: '0,2',
    explanation: `Le rapport de transformation est: m = N2/N1

**Données:**
- N1 = 1000 spires (primaire)
- N2 = 200 spires (secondaire)
- m = ?

**Calcul:**
m = 200/1000 = 0,2

**Réponse:** Le rapport de transformation est de 0,2.

**Interprétation:**
- m < 1: transformateur abaisseur
- U2 = m × U1 = 0,2 × U1
- I2 = I1/m = I1/0,2 = 5 × I1

**Exemple:** Si U1 = 230V → U2 = 46V`,
    difficulty: 'easy',
    skill: 'Transformateurs',
  },
  {
    id: 'ex-elec-4-2',
    courseId: 'elec-4',
    subject: 'physics',
    title: 'Tension secondaire',
    question: 'Un transformateur de rapport m = 0,1 a une tension primaire de 230V. Quelle est la tension secondaire ?',
    options: ['2,3 V', '23 V', '230 V', '2300 V'],
    correctAnswer: '23 V',
    explanation: `La tension secondaire est: U2 = m × U1

**Données:**
- m = 0,1
- U1 = 230 V
- U2 = ?

**Calcul:**
U2 = 0,1 × 230 = 23 V

**Réponse:** La tension secondaire est de 23 V.

**Vérification du rapport:**
m = U2/U1 = 23/230 = 0,1 ✓

**Application:** Transformateur pour sonnette ou éclairage basse tension.`,
    difficulty: 'easy',
    skill: 'Transformateurs',
  },
  {
    id: 'ex-elec-4-3',
    courseId: 'elec-4',
    subject: 'physics',
    title: 'Courant secondaire',
    question: 'Un transformateur parfait de rapport m = 0,5 a un courant primaire de 2A. Quel est le courant secondaire ?',
    options: ['1 A', '2 A', '4 A', '8 A'],
    correctAnswer: '4 A',
    explanation: `Pour un transformateur parfait: I2 = I1/m

**Données:**
- m = 0,5
- I1 = 2 A
- I2 = ?

**Calcul:**
I2 = I1/m = 2/0,5 = 4 A

**Réponse:** Le courant secondaire est de 4 A.

**Conservation de la puissance:**
P1 = P2 (transformateur parfait)
U1 × I1 = U2 × I2
U1 × 2 = (0,5 × U1) × 4
U1 × 2 = U1 × 2 ✓

**Remarque:** Quand la tension diminue, le courant augmente.`,
    difficulty: 'medium',
    skill: 'Transformateurs',
  },
  {
    id: 'ex-elec-4-4',
    courseId: 'elec-4',
    subject: 'physics',
    title: 'Rendement d\'un transformateur',
    question: 'Un transformateur absorbe 10kW au primaire et fournit 9,5kW au secondaire. Quel est son rendement ?',
    options: ['0,90', '0,92', '0,95', '0,98'],
    correctAnswer: '0,95',
    explanation: `Le rendement est: η = P2/P1

**Données:**
- P1 = 10 kW (puissance primaire)
- P2 = 9,5 kW (puissance secondaire)
- η = ?

**Calcul:**
η = 9,5/10 = 0,95 = 95%

**Réponse:** Le rendement est de 0,95 (ou 95%).

**Pertes:**
Pertes = P1 - P2 = 10 - 9,5 = 0,5 kW = 500 W

**Répartition des pertes:**
- Pertes fer (hystérésis + Foucault): constantes
- Pertes Joule (R1×I1² + R2×I2²): variables avec la charge

**Remarque:** Les transformateurs ont d'excellents rendements (> 95%).`,
    difficulty: 'easy',
    skill: 'Rendement',
  },

  // Exercices Machines asynchrones
  {
    id: 'ex-elec-5-1',
    courseId: 'elec-5',
    subject: 'physics',
    title: 'Vitesse de synchronisme',
    question: 'Un moteur asynchrone 4 pôles est alimenté par un réseau 50Hz. Quelle est la vitesse de synchronisme ?',
    options: ['750 tr/min', '1000 tr/min', '1500 tr/min', '3000 tr/min'],
    correctAnswer: '1500 tr/min',
    explanation: `La vitesse de synchronisme est: ns = f/p (en tr/s) ou ns = 60×f/p (en tr/min)

**Données:**
- f = 50 Hz
- Nombre de pôles = 4 → p = 2 paires de pôles
- ns = ?

**Calcul:**
ns = 60 × 50/2 = 3000/2 = 1500 tr/min

**Réponse:** La vitesse de synchronisme est de 1500 tr/min.

**Autres vitesses courantes:**
- 2 pôles (p=1): ns = 3000 tr/min
- 4 pôles (p=2): ns = 1500 tr/min
- 6 pôles (p=3): ns = 1000 tr/min
- 8 pôles (p=4): ns = 750 tr/min`,
    difficulty: 'medium',
    skill: 'Machines asynchrones',
  },
  {
    id: 'ex-elec-5-2',
    courseId: 'elec-5',
    subject: 'physics',
    title: 'Glissement',
    question: 'Un moteur asynchrone a une vitesse de synchronisme de 1500 tr/min et tourne à 1440 tr/min. Quel est le glissement ?',
    options: ['0,02', '0,04', '0,06', '0,08'],
    correctAnswer: '0,04',
    explanation: `Le glissement est: g = (ns - n)/ns

**Données:**
- ns = 1500 tr/min (vitesse de synchronisme)
- n = 1440 tr/min (vitesse réelle)
- g = ?

**Calcul:**
g = (1500 - 1440)/1500 = 60/1500 = 0,04 = 4%

**Réponse:** Le glissement est de 0,04 (ou 4%).

**Interprétation:**
- g = 0: vitesse de synchronisme (impossible en charge)
- 0 < g < 0,05: fonctionnement normal
- g = 1: rotor bloqué (démarrage)

**Fréquence rotorique:**
fr = g × f = 0,04 × 50 = 2 Hz`,
    difficulty: 'medium',
    skill: 'Glissement',
  },
  {
    id: 'ex-elec-5-3',
    courseId: 'elec-5',
    subject: 'physics',
    title: 'Pertes Joule rotor',
    question: 'Un moteur asynchrone a une puissance transmise au rotor de 10kW et un glissement de 3%. Quelles sont les pertes Joule rotor ?',
    options: ['30 W', '300 W', '3000 W', '30000 W'],
    correctAnswer: '300 W',
    explanation: `Les pertes Joule rotor sont: pJr = g × Ptr

**Données:**
- Ptr = 10 kW = 10000 W
- g = 3% = 0,03
- pJr = ?

**Calcul:**
pJr = 0,03 × 10000 = 300 W

**Réponse:** Les pertes Joule rotor sont de 300 W.

**Bilan de puissance:**
- Puissance transmise: Ptr = 10000 W
- Pertes Joule rotor: pJr = 300 W
- Puissance électromagnétique: Pem = Ptr - pJr = 9700 W

**Remarque:** Les pertes Joule rotor sont proportionnelles au glissement.`,
    difficulty: 'medium',
    skill: 'Bilan de puissance',
  },
  {
    id: 'ex-elec-5-4',
    courseId: 'elec-5',
    subject: 'physics',
    title: 'Démarrage étoile-triangle',
    question: 'Un moteur a un courant de démarrage direct de 60A. Quel sera le courant au démarrage étoile-triangle ?',
    options: ['20 A', '30 A', '35 A', '40 A'],
    correctAnswer: '35 A',
    explanation: `En démarrage étoile-triangle, le courant est divisé par √3.

**Données:**
- Id(direct) = 60 A
- Id(Y-Δ) = ?

**Calcul:**
Id(Y-Δ) = Id(direct)/√3 = 60/1,732 ≈ 35 A

**Réponse:** Le courant de démarrage étoile-triangle est d'environ 35 A.

**Principe:**
- Démarrage en étoile: tension réduite (U/√3)
- Courant réduit: I/√3
- Couple réduit: C/3
- Puis commutation en triangle

**Avantage:** Réduction du courant d'appel
**Inconvénient:** Couple de démarrage réduit`,
    difficulty: 'medium',
    skill: 'Démarrage des moteurs',
  },

  // Exercices Électronique de puissance
  {
    id: 'ex-elec-6-1',
    courseId: 'elec-6',
    subject: 'physics',
    title: 'Redressement simple alternance',
    question: 'Un redresseur simple alternance est alimenté par 230V efficace. Quelle est la tension moyenne de sortie ?',
    options: ['103,5 V', '207 V', '230 V', '325 V'],
    correctAnswer: '103,5 V',
    explanation: `Pour un redressement simple alternance: Umoy = Umax/π

**Étape 1:** Calculer Umax
Umax = √2 × Ueff = 1,414 × 230 = 325 V

**Étape 2:** Calculer Umoy
Umoy = Umax/π = 325/3,14 ≈ 103,5 V

**Réponse:** La tension moyenne est d'environ 103,5 V.

**Remarque:**
- Simple alternance: une seule alternance redressée
- Ondulation importante
- Peu utilisé (mauvais rendement)

**Formule alternative:** Umoy ≈ 0,45 × Ueff = 0,45 × 230 ≈ 103,5 V`,
    difficulty: 'medium',
    skill: 'Redresseurs',
  },
  {
    id: 'ex-elec-6-2',
    courseId: 'elec-6',
    subject: 'physics',
    title: 'Pont de Graetz',
    question: 'Un pont de Graetz est alimenté par 230V efficace. Quelle est la tension moyenne de sortie ?',
    options: ['103,5 V', '207 V', '230 V', '325 V'],
    correctAnswer: '207 V',
    explanation: `Pour un pont de Graetz (double alternance): Umoy = 2×Umax/π

**Étape 1:** Calculer Umax
Umax = √2 × Ueff = 1,414 × 230 = 325 V

**Étape 2:** Calculer Umoy
Umoy = 2 × Umax/π = 2 × 325/3,14 ≈ 207 V

**Réponse:** La tension moyenne est d'environ 207 V.

**Comparaison:**
- Simple alternance: Umoy ≈ 0,45 × Ueff
- Double alternance: Umoy ≈ 0,9 × Ueff

**Avantages du pont de Graetz:**
- Tension double
- Ondulation réduite
- Meilleur rendement`,
    difficulty: 'medium',
    skill: 'Redresseurs',
  },
  {
    id: 'ex-elec-6-3',
    courseId: 'elec-6',
    subject: 'physics',
    title: 'Hacheur série',
    question: 'Un hacheur série a une tension d\'entrée de 100V et un rapport cyclique de 0,6. Quelle est la tension moyenne de sortie ?',
    options: ['40 V', '60 V', '100 V', '167 V'],
    correctAnswer: '60 V',
    explanation: `Pour un hacheur série (abaisseur): Umoy = α × E

**Données:**
- E = 100 V (tension d'entrée)
- α = 0,6 (rapport cyclique)
- Umoy = ?

**Calcul:**
Umoy = 0,6 × 100 = 60 V

**Réponse:** La tension moyenne de sortie est de 60 V.

**Principe:**
- Interrupteur fermé pendant α×T: U = E
- Interrupteur ouvert pendant (1-α)×T: U = 0
- Valeur moyenne: Umoy = α×E

**Réglage:** Variation de α de 0 à 1 → Umoy de 0 à E`,
    difficulty: 'easy',
    skill: 'Hacheurs',
  },
  {
    id: 'ex-elec-6-4',
    courseId: 'elec-6',
    subject: 'physics',
    title: 'Fréquence de découpage',
    question: 'Un hacheur fonctionne avec une période de découpage de 0,1ms. Quelle est sa fréquence de découpage ?',
    options: ['100 Hz', '1 kHz', '10 kHz', '100 kHz'],
    correctAnswer: '10 kHz',
    explanation: `La fréquence est l'inverse de la période: f = 1/T

**Données:**
- T = 0,1 ms = 0,1 × 10⁻³ s = 10⁻⁴ s
- f = ?

**Calcul:**
f = 1/T = 1/(10⁻⁴) = 10⁴ Hz = 10 kHz

**Réponse:** La fréquence de découpage est de 10 kHz.

**Fréquences typiques:**
- Hacheurs: 1 à 20 kHz
- Onduleurs MLI: 2 à 16 kHz
- Alimentations à découpage: 20 à 100 kHz

**Avantages fréquence élevée:**
- Filtrage plus facile
- Composants plus petits
**Inconvénients:**
- Pertes par commutation`,
    difficulty: 'easy',
    skill: 'Fréquence de découpage',
  },

  // Exercices Systèmes triphasés
  {
    id: 'ex-elec-7-1',
    courseId: 'elec-7',
    subject: 'physics',
    title: 'Relation U et V',
    question: 'Un système triphasé a une tension simple de 230V. Quelle est la tension composée ?',
    options: ['133 V', '230 V', '398 V', '460 V'],
    correctAnswer: '398 V',
    explanation: `La relation entre tension composée et simple est: U = √3 × V

**Données:**
- V = 230 V (tension simple)
- U = ? (tension composée)

**Calcul:**
U = √3 × 230 = 1,732 × 230 ≈ 398 V

**Réponse:** La tension composée est d'environ 398 V.

**Réseau français:**
- Tension simple: V = 230 V (phase-neutre)
- Tension composée: U = 400 V (phase-phase)
- Vérification: 400/230 ≈ 1,73 = √3 ✓

**Notation:** 400V/230V ou 400/230V`,
    difficulty: 'easy',
    skill: 'Systèmes triphasés',
  },
  {
    id: 'ex-elec-7-2',
    courseId: 'elec-7',
    subject: 'physics',
    title: 'Puissance triphasée équilibrée',
    question: 'Une charge triphasée équilibrée absorbe 10A sous 400V avec cos(φ) = 0,8. Quelle est la puissance active ?',
    options: ['3,2 kW', '5,5 kW', '6,9 kW', '8 kW'],
    correctAnswer: '5,5 kW',
    explanation: `La puissance active en triphasé est: P = √3 × U × I × cos(φ)

**Données:**
- U = 400 V (tension composée)
- I = 10 A (courant de ligne)
- cos(φ) = 0,8
- P = ?

**Calcul:**
P = √3 × 400 × 10 × 0,8
P = 1,732 × 400 × 10 × 0,8
P = 5542 W ≈ 5,5 kW

**Réponse:** La puissance active est d'environ 5,5 kW.

**Autres grandeurs:**
- Puissance apparente: S = √3 × U × I = 6,9 kVA
- Puissance réactive: Q = √(S² - P²) ≈ 4,1 kVAR`,
    difficulty: 'medium',
    skill: 'Puissance triphasée',
  },
  {
    id: 'ex-elec-7-3',
    courseId: 'elec-7',
    subject: 'physics',
    title: 'Couplage étoile',
    question: 'Une charge étoile équilibrée a une impédance de phase Z = 20Ω. Alimentée en 400V triphasé, quel est le courant de ligne ?',
    options: ['6,6 A', '11,5 A', '20 A', '23 A'],
    correctAnswer: '11,5 A',
    explanation: `En couplage étoile: I = V/Z avec V = U/√3

**Données:**
- U = 400 V (tension composée)
- Z = 20 Ω (impédance de phase)
- I = ?

**Étape 1:** Calculer V
V = U/√3 = 400/1,732 ≈ 231 V

**Étape 2:** Calculer I
I = V/Z = 231/20 ≈ 11,5 A

**Réponse:** Le courant de ligne est d'environ 11,5 A.

**En étoile:**
- Courant de ligne = Courant de phase
- I = J
- Tension simple: V = U/√3`,
    difficulty: 'medium',
    skill: 'Couplage étoile',
  },
  {
    id: 'ex-elec-7-4',
    courseId: 'elec-7',
    subject: 'physics',
    title: 'Couplage triangle',
    question: 'Une charge triangle équilibrée a une impédance de phase Z = 30Ω. Alimentée en 400V triphasé, quel est le courant de ligne ?',
    options: ['7,7 A', '13,3 A', '23 A', '40 A'],
    correctAnswer: '23 A',
    explanation: `En couplage triangle: I = √3 × J avec J = U/Z

**Données:**
- U = 400 V (tension composée)
- Z = 30 Ω (impédance de phase)
- I = ?

**Étape 1:** Calculer J (courant de phase)
J = U/Z = 400/30 ≈ 13,3 A

**Étape 2:** Calculer I (courant de ligne)
I = √3 × J = 1,732 × 13,3 ≈ 23 A

**Réponse:** Le courant de ligne est d'environ 23 A.

**En triangle:**
- Courant de ligne = √3 × Courant de phase
- I = √3 × J
- Tension de phase = Tension composée: U`,
    difficulty: 'medium',
    skill: 'Couplage triangle',
  },

  // Exercices Automatismes
  {
    id: 'ex-elec-8-1',
    courseId: 'elec-8',
    subject: 'physics',
    title: 'Fonction ET',
    question: 'Pour une porte ET à 2 entrées, combien de combinaisons donnent une sortie à 1 ?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '1',
    explanation: `La fonction ET (AND) donne 1 seulement si toutes les entrées sont à 1.

**Table de vérité:**
| A | B | S = A·B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

**Réponse:** Une seule combinaison donne S = 1 (A=1 ET B=1).

**Équation:** S = A · B

**Symbole:** Porte AND avec 2 entrées et 1 sortie.

**Application:** Conditions multiples à satisfaire simultanément.`,
    difficulty: 'easy',
    skill: 'Logique combinatoire',
  },
  {
    id: 'ex-elec-8-2',
    courseId: 'elec-8',
    subject: 'physics',
    title: 'Fonction OU',
    question: 'Pour une porte OU à 2 entrées, combien de combinaisons donnent une sortie à 1 ?',
    options: ['1', '2', '3', '4'],
    correctAnswer: '3',
    explanation: `La fonction OU (OR) donne 1 si au moins une entrée est à 1.

**Table de vérité:**
| A | B | S = A+B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    1    |

**Réponse:** Trois combinaisons donnent S = 1.

**Équation:** S = A + B

**Symbole:** Porte OR avec 2 entrées et 1 sortie.

**Application:** Plusieurs conditions alternatives (l'une OU l'autre).`,
    difficulty: 'easy',
    skill: 'Logique combinatoire',
  },
  {
    id: 'ex-elec-8-3',
    courseId: 'elec-8',
    subject: 'physics',
    title: 'Théorème de De Morgan',
    question: 'Quelle est l\'expression équivalente à (A + B) barre selon De Morgan ?',
    options: ['A · B', 'Ā · B̄', 'A + B', 'Ā + B̄'],
    correctAnswer: 'Ā · B̄',
    explanation: `Le théorème de De Morgan stipule: (A + B) barre = Ā · B̄

**Démonstration par table de vérité:**
| A | B | A+B | (A+B)̄ | Ā | B̄ | Ā·B̄ |
|---|---|-----|--------|---|---|------|
| 0 | 0 |  0  |   1    | 1 | 1 |  1   |
| 0 | 1 |  1  |   0    | 1 | 0 |  0   |
| 1 | 0 |  1  |   0    | 0 | 1 |  0   |
| 1 | 1 |  1  |   0    | 0 | 0 |  0   |

**Réponse:** (A + B)̄ = Ā · B̄

**Autre théorème:** (A · B)̄ = Ā + B̄

**Application:** Simplification d'expressions logiques.`,
    difficulty: 'medium',
    skill: 'Algèbre de Boole',
  },
  {
    id: 'ex-elec-8-4',
    courseId: 'elec-8',
    subject: 'physics',
    title: 'Bascule RS',
    question: 'Pour une bascule RS, que se passe-t-il si R=1 et S=0 ?',
    options: ['Q = 0 (Reset)', 'Q = 1 (Set)', 'Q inchangé', 'État interdit'],
    correctAnswer: 'Q = 0 (Reset)',
    explanation: `La bascule RS a deux entrées: Set (S) et Reset (R).

**Table de fonctionnement:**
| R | S | Q(t+1) | Action      |
|---|---|--------|-------------|
| 0 | 0 | Q(t)   | Mémorisation|
| 0 | 1 |   1    | Set         |
| 1 | 0 |   0    | Reset       |
| 1 | 1 |   ?    | Interdit    |

**Cas R=1, S=0:**
La sortie Q est forcée à 0 (Reset).

**Réponse:** Q = 0 (Reset)

**Principe:**
- S=1: mise à 1 (Set)
- R=1: mise à 0 (Reset)
- R=S=0: mémorisation de l'état précédent
- R=S=1: état interdit (conflit)`,
    difficulty: 'medium',
    skill: 'Logique séquentielle',
  },
];
