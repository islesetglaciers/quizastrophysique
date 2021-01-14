// OBJETS HTML (1 objet par question/1 array contenant tous les objets question)
// var question = {texte: "Le texte de la question", reponses: ["rep1","rep2","rep3","rep4"], bonnerep: 1}
// aller chercher propriétés objet:
// question.texte
// question.reponses
// question.bonnerep
// question.reponses[question.bonnerep]

// var lesquestions = [question, question, question];
// question vide
var q0 = 0;

// Questions Niveau Facile
var q1 = {
    texte: "En quoi consistent les ondes gravitationnelles ?",
    reponses: ["Un nuage électrique absorbant des amas d'étoiles", "La collision entre deux astres (naine blanche, trou noir)", "Des résidus du Big Bang", "La création d'un trou noir"],
    bonnerep: 1
}

var q2 = {
    texte: "Que fait un astre de masse importante dans l'espace-temps ?",
    reponses: ["Il déforme la courbe de l'espace-temps", "Il émet de la lumière", "Il devient une étoile", "Il défie les lois de la relativité"],
    bonnerep: 0
}

var q3 = {
    texte: "La théorie des cordes est-elle une théorie de la physique actuelle ?",
    reponses: [" Non, c'est une théorie sur les Harmoniques musicales, issue des travaux de Pythagore", "Non, c'est une théorie physique ancienne (XVIIIe siècle) , issue des travaux du mathématicien Euler, sur les phénomènes de résonance", " Oui, c'est une théorie qui explique la matière et les forces à partir de minuscules cordes vibrant dans un espace à plusieurs dimensions (9 à 11)", "Oui, c'est une théorie d'Einstein faisant partie de ses théories sur la relativité"],
    bonnerep: 2
}

var q4 = {
    texte: "L'Univers a quel âge ?",
    reponses: ["11,7 milliards d'années","12,7 milliards d'années", "13,7 milliards d'années", "14,7 milliards d'années"],
    bonnerep: 2
}

var q5 = {
    texte: "Combien y-a-t-il d'interactions (forces), en physique ?",
    reponses: ["2", "3", "4", "5"],
    bonnerep: 2
}

var q6 = {
    texte: "L'Univers connu est-il plat ou courbe ?",
    reponses: ["Plat", "Courbe (positive en forme de sphère)", "Courbe (négative en forme de selle de cheval)", "Autre forme"],
    bonnerep: 0
}

// Questions Niveau Intermédiaire
var q7 = {
    texte: "Quel satellite naturel peut être théoriquement habité ?",
    reponses: ["Europe", "Io", "Charon", "Titan"],
    bonnerep: 0
}

var q8 = {
    texte: "Quelle est l'antiparticule du photon ?",
    reponses: ["Positron", "Neutron", "Photon", "Électron"],
    bonnerep: 2
}

var q9 = {
    texte: "Un des principes de la relativité générale est :",
    reponses: ["La géodésique", "L'universalité de la chute libre", "La constante Hubble", "La gravité de Newton"],
    bonnerep: 1
}

var q10 = {
    texte: "La vraie formule en relativité restreinte est :",
    reponses: ["Vitesse = distance / temps", "Vitesse = courbure / temps", "Vitesse = masse / temps", "Vitesse = espace / temps"],
    bonnerep: 3
}

var q11 = {
    texte: "Qu'est l'anomalie Pioneer ?",
    reponses: ["Un satellite se décalant loin de son objectif", "Un bruit aigu venu du fin fond de l'Univers", "Le rayonnement de fond cosmologique", "La courbure de l'espace-temps autour des objets célestes massifs"],
    bonnerep: 0
}

var q12 = {
    texte: "Einstein a été récompensé par le Nobel de Physique pour ces travaux sur... ?",
    reponses: ["La Relativité restreinte", "La Relativité générale", "L'espace-temps", "L'aspect corpusculaire de la lumière"],
    bonnerep: 3
}

// Questions Niveau Difficile
var q13 = {
    texte: "Qu'est-ce qu'un Boson ?",
    reponses: ["Un type d'accélérateur de particule, construit sur la frontière Franco-Suisse, chargé de collecter des neutrinos", "Dans le model standard, une 'particule' qui transmet une force (interaction), Photon, Graviton, Gluon, etc...", "C'est un système acoustique, permettant de créer des amplifications d'interférences sonores.", "Aucune de ces réponses"],
    bonnerep: 1
}

var q14 = {
    texte: "Dans une Navette tournant à très grande vitesse autour de la Terre, le temps est-il accéléré ou bien ralenti ?",
    reponses: ["Le temps est ralenti dans la Navette par rapport au temps terrestre (Relativité restreinte)", "Le temps est accéléré dans la Navette par rapport au temps terrestre (Relativité restreinte)", "Non, le temps est identique (distance entre la terre et le satellite pas assez suffisante pour affecter le temps)", "Non, le temps est identique sur la Terre et dans la Navette, le Temps est absolu, il est le même partout dans l'Univers"],
    bonnerep: 0
}

var q15 = {
    texte: "Dans l'environnement de la terre, la courbure de l'espace est-elle identique à celle du temps ?",
    reponses: ["Oui, car faisant partie de la courbure générale de l'espace-temps à 4 dimensions de Minkowski", "Non, pour les objets non massifs (terre, soleil...) la courbure de l'espace est toujours plus importante que celle du temps", "Non, pour les objets non massifs (terre, soleil...) la courbure du temps est plus importante que celle de l'espace", "Oui, car pour les objets non massifs, leur masse n'a pas assez d'influence sur l'espace-temps pour créer une différence"],
    bonnerep: 2
}

var q16 = {
    texte: "Qu'est ce que les Transformations de Lorentz ?",
    reponses: ["Lorentz introduisit un parallèle métaphorique avec des transmutations en physique, pour décrire certaines métamorphoses animales", "Des transformations de structures dans les gaz moléculaires intersidéraux", "Des formules complémentaires en Relativité générale", "Des formules fondamentales en Relativité restreinte"],
    bonnerep: 3
}

var q17 = {
    texte: "Qu'est ce q'un objet Herbig-Haro, en astrophysique ?",
    reponses: ["Un type de Galaxies sphériques, associées dans les quintettes de Stephan-Hubble", "Dans les pouponnières d'étoiles, ce sont des jets de matières issus de proto-étoiles en formations au bout d'énorme piliers de gaz-poussières", "Un diagramme permettant de classer les étoiles, en fonction de leur luminosité (abscisse) et de leur température effective (ordonnée)", "Un type d'objet massif (trou noir) particulier"],
    bonnerep: 1
}

var q18 = {
    texte: "Qu'est-ce que le Baryon ?",
    reponses: ["Une catégorie de particules formées de 3 quarks", "L'antimatière du quark", "Une catégorie de particules formées d'antimatière", "Une propriété de la matière sombre"],
    bonnerep: 0
}

var allQuestions = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18];