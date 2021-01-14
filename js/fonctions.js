/**
 * Fonction autoexécutante pour lancer l'application
 * 
 * @param Aucun
 * @return aucun
 */

 (function() {
    var d = document;
    var lesQuestions;
    var numCurrentQuestion = 0;
    var bonneRep;
    var nbreBonnesRep = 0;
    // valeur est le nombre de questions -1 puisque mon questionnaire commence à 0
    var nbredeQuestions = 4;
    // pour localStorage
    var username;
    var results;

    // rip in pieces init.js
    d.querySelector("#btn1").addEventListener('mouseup', displayQuestion);
    d.querySelector("#btn2").addEventListener('mouseup', continuerQuestions);
    d.querySelector("#btn3").addEventListener('mouseup', displayAccueil);
    d.querySelector("#btn4").addEventListener('mouseup', saveResults);
    d.querySelector("#abandon").addEventListener('mouseup', abandon);
    d.querySelector("#valider").addEventListener('mouseup', validerReponse);
    d.querySelector("#question").style.display="none";
    d.querySelector("#fin").style.display="none";

    // afficher questionnaire
    function displayQuestion() {
        if (d.forms[0].niveau.value == "facile") {
            d.querySelector("#question").style.display="block";
            d.querySelector("#accueil").style.display="none";
            d.querySelector("#erreur").style.display="none";
            lesQuestions = questionnaireFacile();
            debutQuestions();
        } else if (d.forms[0].niveau.value == "expert") {
            d.querySelector("#question").style.display="block";
            d.querySelector("#accueil").style.display="none";
            d.querySelector("#erreur").style.display="none";
            lesQuestions = questionnaireExpert();
            debutQuestions();
        } else {
            d.querySelector("#erreur p").innerHTML="Vous devez choisir un niveau!";
            d.querySelector("#erreur").style.display="block";
        }
    }   
    
    // générerun tableau de questions pour le niveau facile
    function questionnaireFacile() {
        //  créer un tableau de questions faciles
        var lesNum = [];
        while (lesNum.length < 3) {
            let iRand = Math.ceil(Math.random() * 6);
            if (lesNum.indexOf(iRand) == -1) {
                lesNum.push(iRand);
            }
        }
        // ajouter les questions intermédiaires
        while (lesNum.length < 5) {
            let iRand = Math.ceil(Math.random() * 12);
            if (lesNum.indexOf(iRand) == -1 && iRand > 6) {
                lesNum.push(iRand);
            }
        }
        // remplacer les numéros par les bonnes questions
        for (let iCount = 0; iCount < 5; iCount++) {
            lesNum[iCount] =  allQuestions[lesNum[iCount]];
        }
        return lesNum;
    }
    
    //  générer un tableau de fonctions pour le niveau expert
    function questionnaireExpert() {
        //  créer un tableau de questions intermédiaires
        var lesNum = [];
        while (lesNum.length < 2) {
            let iRand = Math.ceil(Math.random() * 12);
            if (lesNum.indexOf(iRand) == -1 && iRand > 6) {
                lesNum.push(iRand);
            }
        }
        // ajouter les questions difficiles
        while (lesNum.length < 5) {
            let iRand = Math.ceil(Math.random() * 18);
            if (lesNum.indexOf(iRand) == -1 && iRand > 12) {
                lesNum.push(iRand);
            }
        }   
        // remplacer les numéros par les bonnes questions
        for (let iCount = 0; iCount < 5; iCount++) {
            lesNum[iCount] =  allQuestions[lesNum[iCount]];
        }
        return lesNum;
    }
    
    // fonction pour commencer le questionnaire
    function debutQuestions() {
        // afficher le tire de la section
        d.querySelector("#question h3").innerHTML = "Question " + (numCurrentQuestion + 1);
        // afficher le texte de la question
        d.querySelector("#question p").innerHTML = lesQuestions[numCurrentQuestion].texte;
        // afficher les choix de réponse
        for (let iCount = 0; iCount < 4; iCount++) {
            var olabel = d.createElement("label");
            var oinput = d.createElement("input");
            oinput.setAttribute("type", "radio");
            oinput.setAttribute("name", "lesChoixdeRep");
            oinput.setAttribute("value", iCount);
            olabel.appendChild(oinput);
            // ajouter texte au choix de réponse
            var otext = d.createTextNode(lesQuestions[numCurrentQuestion].reponses[iCount]);
            olabel.appendChild(otext);
            // ajouter au fieldset
            d.querySelector("#question fieldset").appendChild(olabel);
        }
    }

    // fonction pour continuer le questionnaire (4 autres questions)
    function continuerQuestions() {
        if (d.frm2.lesChoixdeRep.value == "") {
            afficheErreur("Vous devez choisir une réponse!");
            return;
        }
        d.querySelector("#good").style.display="none";
        d.querySelector("#erreur").style.display="none";
        bonneRep = lesQuestions[numCurrentQuestion].bonnerep;
        if (d.frm2.lesChoixdeRep.value == bonneRep) {
            nbreBonnesRep++;
        }
        numCurrentQuestion++;
        d.querySelector("#question h3").innerHTML = "Question " + (numCurrentQuestion + 1);
        if (numCurrentQuestion <= nbredeQuestions) {
            // effacer les choix de réponse de la question précédente
            d.querySelector("#question fieldset").innerHTML=""
            // afficher le texte de la question
            d.querySelector("#question p").innerHTML = lesQuestions[numCurrentQuestion].texte;
            // afficher les choix de réponse
            for (let iCount = 0; iCount < 4; iCount++) {
                var olabel = d.createElement("label");
                var oinput = d.createElement("input");
                oinput.setAttribute("type", "radio");
                oinput.setAttribute("name", "lesChoixdeRep");
                oinput.setAttribute("value", iCount);
                olabel.appendChild(oinput);
                // ajouter texte au choix de réponse
                var otext = d.createTextNode(lesQuestions[numCurrentQuestion].reponses[iCount]);
                olabel.appendChild(otext);
                // ajouter au fieldset
                d.querySelector("#question fieldset").appendChild(olabel);
            }
        } else {
            displayFin();
        }
    }

    // fonction pour valider la réponse donnée
    function validerReponse() {
        var bonneRep = lesQuestions[numCurrentQuestion].bonnerep;
        if (d.frm2.lesChoixdeRep.value == bonneRep) {
            afficheBonneRep();
            for (let iCount = 0; iCount < 4; iCount++) {
                d.querySelectorAll("#question input")[iCount].disabled = true;
            }
        } else if (d.frm2.lesChoixdeRep.value == "") {
            afficheErreur("Vous devez choisir une réponse!");
        } else {
            afficheErreur("Mauvaise Réponse!");
            for (let iCount = 0; iCount < 4; iCount++) {
                d.querySelectorAll("#question input")[iCount].disabled = true;
            }
        }
    }

    // message d'erreur
    function afficheErreur(msg) {
        d.querySelector("#erreur p").innerHTML = msg;
        d.querySelector("#erreur").style.display="block";
    }
    
    // message bonne réponse
    function afficheBonneRep() {
        d.querySelector("#good").style.display="block";
    }

    // abandon du quiz
    function abandon() {
        bonneRep = lesQuestions[numCurrentQuestion].bonnerep;
        if (d.frm2.lesChoixdeRep.value == bonneRep) {
            nbreBonnesRep++;
        }
        displayFin();
    }

    // afficher les résultats
    function displayFin() {
        d.querySelector("#fin").style.display="block";
        d.querySelector("#question").style.display="none";
        d.querySelector("#good").style.display="none";
        d.querySelector("#erreur").style.display="none";
        d.querySelector("#fin p").innerHTML = "Vous avez obtenu " + nbreBonnesRep + " bonne(s) réponse(s) sur " + (nbredeQuestions + 1) + " pour un total de " + (nbreBonnesRep * 20) + "%"
    }

    // sauvegarder les résultats
    function saveResults() {
        username = d.frm3.username.value;
        results = [];
        results.push(nbreBonnesRep * 20);
        localStorage.setItem(username, results);
        console.log(localStorage.getItem(username));
    }

    // recommencer
    function displayAccueil() {
        window.location.reload();
    }

 })();