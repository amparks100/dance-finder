//Note: Dance catorization taken from the approved tempi in ndca rule book
// https://ndca.org/pdf/2019%20January%20-%20Compiled%20Rule%20Book%20Master%20v1.pdf
// https://www.beatsperminuteonline.com/en/home/bpm-beats-per-minute-reference-for-dance-genres

const smoothBallroomDances = {
    "Waltz": {
        time_signature: "3",
        bpm: [84, 90],
        genres: []
    },
    "Foxtrot": {
        time_signature: "4",
        bpm: [120, 136],
        genres: []
    },
    "Tango": {
        time_signature: "2",
        bpm: [60, 64],
        genres: []
    },
    "Viennese Waltz": {
        time_signature: "3",
        bpm: [159, 162],
        genres: []
    },
}

const standardBallroomDances = {
    "Waltz": {
        time_signature: "3",
        bpm: [84, 90],
        genres: []
    },
    "Foxtrot": {
        time_signature: "4",
        bpm: [112, 120],
        genres: []
    },
    "Tango": {
        time_signature: "2",
        bpm: [64, 64],
        genres: []
    },
    "Viennese Waltz": {
        time_signature: "3",
        bpm: [168, 180],
        genres: []
    },
    "Quickstep": {
        time_signature: "4",
        bpm: [192, 208],
        genres: []
    },
}

const rhythmDances = {
    "Cha Cha": {
        time_signature: "4",
        bpm: [120, 128],
        genres: []
    },
    "Rhumba": {
        time_signature: "4",
        bpm: [120, 144],
        genres: []
    },
    "East Coast Swing": {
        time_signature: "4",
        bpm: [136, 144],
        genres: []
    },
    "Mambo": {
        time_signature: "4",
        bpm: [188, 204],
        genres: []
    },

    "Bolero": {
        time_signature: "4",
        bpm: [96, 104],
        genres: []
    }
}

const latinDances = {
    "Cha Cha": {
        time_signature: "4",
        bpm: [120, 124],
        genres: []
    },
    "Rhumba": {
        time_signature: "4",
        bpm: [88, 108],
        genres: []
    },
    "Samba": {
        time_signature: "2",
        bpm: [96, 104],
        genres: []
    },
    "Paso Doble": {
        time_signature: "2",
        bpm: [112, 112],
        genres: []
    },
    "Jive": {
        time_signature: "4",
        bpm: [152, 176],
        genres: []
    },
}

const socialDances = {
    "Salsa": {
        time_signature: "4",
        bpm: [180, 300],
        genres: ["latin", "latino", "brazil", "salsa"]
    },
    "West Coast Swing": {
        time_signature: "4",
        bpm: [112, 128],
        genres: []
    },
    "Merengue": {
        time_signature: "2",
        bpm: [130, 200],
        genres: ["latin", "latino", "brazil", "salsa"]
    },
    "Bachata": {
        time_signature: "4",
        bpm: [90, 200],
        genres: ["latin", "latino", "brazil", "salsa"]
    },
    "Polka": {
        time_signature: "2",
        bpm: [120, 124],
        genres: []
    },
    "Hustle": {
        time_signature: "4",
        bpm: [112, 120],
        genres: []
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

function identifyDances(temp, time_signature, song_genres) {
    var matchingDances = [];
    for (let danceType in danceInfo) {
        const dances = danceInfo[danceType];
        for (let dance in dances) {
            const danceObject = dances[dance];
            const isInBpmRange = temp >= danceObject.bpm[0] && temp <= danceObject.bpm[1];

            //if a dance has genres specified, check that the song genres match
            const isGenreMatch = !(danceObject.genres.length > 0);
            if (!isGenreMatch) {
                for (let danceGenre in danceObject.genres) {
                    if (song_genres.includes(danceGenre)) {
                        isGenreMatch = true;
                    }
                }
            }

            if (danceObject.time_signature == time_signature && isInBpmRange && isGenreMatch) {
                console.log("I found a dance that matches! " + dance)
                matchingDances.push(dance);
            }
        }
    }
    return matchingDances;
}

module.exports = { identifyDances, getDanceData };