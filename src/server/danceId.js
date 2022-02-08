//Note: Dance catorization taken from the approved tempi in ndca rule book
// https://ndca.org/pdf/2019%20January%20-%20Compiled%20Rule%20Book%20Master%20v1.pdf
// https://www.beatsperminuteonline.com/en/home/bpm-beats-per-minute-reference-for-dance-genres

const smoothBallroomDances = {
    "Waltz": {
        time_signature: "3",
        bpm: [84, 90],
    },
    "Foxtrot": {
        time_signature: "4",
        bpm: [120, 136],
    },
    "Tango": {
        time_signature: "2",
        bpm: [60, 64],
    },
    "Viennese Waltz": {
        time_signature: "3",
        bpm: [159, 162],
    },
}

const standardBallroomDances = {
    "Waltz": {
        time_signature: "3",
        bpm: [84, 90],
    },
    "Foxtrot": {
        time_signature: "4",
        bpm: [112, 120],
    },
    "Tango": {
        time_signature: "2",
        bpm: [64, 64],
    },
    "Viennese Waltz": {
        time_signature: "3",
        bpm: [168, 180],
    },
    "Quickstep": {
        time_signature: "4",
        bpm: [192, 208],
    },
}

const rhythmDances = {
    "Cha Cha": {
        time_signature: "4",
        bpm: [120, 128],
    },
    "Rhumba": {
        time_signature: "4",
        bpm: [120, 144],
    },
    "East Coast Swing": {
        time_signature: "4",
        bpm: [136, 144],
    },
    "Mambo": {
        time_signature: "4",
        bpm: [188, 204],
    },

    "Bolero": {
        time_signature: "4",
        bpm: [96, 104],
    }
}

const latinDances = {
    "Cha Cha": {
        time_signature: "4",
        bpm: [120, 124],
    },
    "Rhumba": {
        time_signature: "4",
        bpm: [88, 108],
    },
    "Samba": {
        time_signature: "2",
        bpm: [96, 104],
    },
    "Paso Doble": {
        time_signature: "2",
        bpm: [112, 112],
    },
    "Jive": {
        time_signature: "4",
        bpm: [152, 176],
    },
}

const socialDances = {
    "Salsa": {
        time_signature: "4",
        bpm: [180, 300],
    },
    "West Coast Swing": {
        time_signature: "4",
        bpm: [112, 128],
    },
    "Merengue": {
        time_signature: "2",
        bpm: [130, 200],
    },
    "Bachata": {
        time_signature: "4",
        bpm: [90, 200]
    },
    "Polka": {
        time_signature: "2",
        bpm: [120, 124],
    },
    "Hustle": {
        time_signature: "4",
        bpm: [112, 120],
    }
}

const danceInfo = {
    "Smooth": smoothBallroomDances,
    "Standard": standardBallroomDances,
    "Latin": latinDances,
    "Rhythm": rhythmDances,
    "Social": socialDances
};

function getDanceData() {
    return danceInfo;
}

function identifyDances(temp, time_signature) {
    var matchingDances = [];
    for (let danceType in danceInfo) {
        const dances = danceInfo[danceType];
        for (let dance in dances) {
            const danceObject = dances[dance];
            const isInBpmRange = temp >= danceObject.bpm[0] && temp <= danceObject.bpm[1];
            if (danceObject.time_signature == time_signature && isInBpmRange) {
                console.log("I found a dance that matches! " + dance)
                matchingDances.push(dance);
            }
        }
    }
    return matchingDances;
}

module.exports = { identifyDances, getDanceData };