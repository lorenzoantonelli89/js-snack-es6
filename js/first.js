function getRandomValue(min, max) {
    let localMin = min;
    let localMax = max - min + 1;
    return Math.floor(Math.random() * localMax) + localMin;
}

// creare un array di oggetti ogni oggetto descriverà una bii
// da corsa con le seguenti proprietà: nome e peso
// stampare a schermo la bici con peso minore

function es1() {
    let bikes = [
        {'name' : 'MTB', 'weigth' : 30},
        {'name' : 'CORSA', 'weigth' : 20},
        {'name' : 'STRADA', 'weigth' : 15}
    ];

    let bikeMin = {
        name : '',
        weigth : Number.MAX_SAFE_INTEGER
    };

    for(let i = 0; i < bikes.length; i++){

        if (bikes[i]['weigth'] < bikeMin['weigth']) {
            bikeMin = bikes[i];
        }
    }
    console.log('ESERCIZIO 1');
    console.log('Array totale di Oggetti');
    console.log(bikes);
    console.log('Oggetto con peso minore');
    console.log(bikeMin);
    console.log('');
}

// creare un array di oggetti di squadre di calcio
// ogni squadra avrà diverse proprietà :
// nome, punti fatti, falli subuti.
// nome sarà l'unica proprietà da compilare 
// le altre sarnno a 0

// generare numeri random al posto degli 0 nelle proprietà
// punti fatti e falli subiti

// usando la destrutturazione creiamo un nuovo array
//  i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console

function es2() {
    let teams = [
        { 'name': 'Juventus', 'score': 0, 'penalty': 0 },
        { 'name': 'Milan', 'score': 0, 'penalty': 0 },
        { 'name': 'Inter', 'score': 0, 'penalty': 0 },
        { 'name': 'Atalanta', 'score': 0, 'penalty': 0 },
        { 'name': 'Genoa', 'score': 0, 'penalty': 0 },
        { 'name': 'Fiorentina', 'score': 0, 'penalty': 0 },
    ];

    let arrTeams = [];
    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        team['score'] = getRandomValue(0, 70);
        team['penalty'] = getRandomValue(0, 80);
        let penalty = team['penalty'];
        let name = team['name'];
        arrTeams.push({ name, penalty });
    }

    console.log('ESERCIZIO 2');
    console.log('Array di oggetti squadre');
    console.log(teams);
    console.log('Array di oggetti con solo nome e penalty');
    console.log(arrTeams);
}

function init() {
    es1();
    es2();
}

$(document).ready(init);