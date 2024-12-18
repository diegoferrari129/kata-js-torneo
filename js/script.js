// Initial data arrays
const fighters = [
    { name: 'Freezer', power: 8000 },
    { name: 'Vegeta', power: 8500 },
    { name: 'Crilin', power: 500 },
    { name: 'Mr Satan', power: 50 },
    { name: 'Junior', power: 6000 },
    { name: 'Goku', power: 9001 },
    { name: 'Tensing', power: 450 },
    { name: 'Videl', power: 300 },
    { name: 'Bulma', power: 20 },
    { name: 'C-18', power: 7800 },
    { name: 'Gohan', power: 8900 },
    { name: 'Trunks', power: 1250 }
];

const weapons = [
    { name: "Ventaglio della Musa", power: 15 },
    { name: "Scouter", power: 30 },
    { name: "Bastone Roshi", power: 60 },
    { name: "Fagioli Magici", power: 70 },
    { name: "Katana di Yajirobei", power: 85 },
    { name: "Spada del Dragone Azzurro", power: 115 },
    { name: "Armatura Saiyan", power: 145 },
    { name: "Cannone da braccio", power: 170 },
    { name: "Nuvola d'oro", power: 200 },
    { name: "Bastone Nyoi", power: 220 },
    { name: "Spada Z", power: 235 },
    { name: "Orecchini Potara", power: 250 }
];

// Utility functions
// Funzione per generare un numero casuale
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Weapon Selection
const assignWeapons = (fighters, weapons) => {
    const result = [];
    const availableWeapons = [...weapons];
    
    fighters.forEach(fighter => {
        const randomIndex = getRandomNumber(0, availableWeapons.length - 1);
        const weapon = availableWeapons.splice(randomIndex, 1)[0];
        
        result.push({
            name: fighter.name,
            power: fighter.power + weapon.power,
            weapon: weapon.name
        });
    });
    
    return result;
};

// Training
const trainFighters = (fighters) => {
    const trainedFighters = [];
    fighters.forEach(fighter => {
        const trainingMultiplier = getRandomNumber(1, 100);
        trainedFighters.push({
            ...fighter,
            power: fighter.power * trainingMultiplier
        });
    });
    return trainedFighters;
};

// Qualificazione
const qualifyFighters = (fighters) => {
    return fighters.filter(fighter => fighter.power >= 2000);
};

// Combattimento
const fights = (qualifiedFighters) => {
    // Aggiungo un robot se il numero di combattenti è dispari
    if (qualifiedFighters.length % 2 !== 0) {
        qualifiedFighters.push({ name: 'Robot', power: 4000 });
    }

    const winners = [];
    
    // ciclo per ogni coppia di combattenti
    for (let i = 0; i < qualifiedFighters.length; i += 2) {
        const fighter1 = qualifiedFighters[i];
        const fighter2 = qualifiedFighters[i + 1];

        //aggiungo il vincitore alla lista
        if (fighter1.power > fighter2.power) {
            winners.push(fighter1);
        } else {
            winners.push(fighter2);
        }
    }
    
    return winners;
};

// Execute tournament
console.log('FASE 1: SCELTA DELL\'ARMA');
const armedFighters = assignWeapons(fighters, weapons);
console.log(armedFighters);

console.log('FASE 2: ALLENAMENTO');
const trainedFighters = trainFighters(armedFighters);
console.log(trainedFighters);

console.log('FASE 3: QUALIFICAZIONE');
const qualifiedFighters = qualifyFighters(trainedFighters);
console.log(qualifiedFighters);

console.log('FASE 4: COMBATTIMENTO');
const winners = fights(qualifiedFighters);
console.log(winners);