"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateName = generateName;
exports.generateMultipleName = generateMultipleName;
function generateName(lang, minLength = 8, maxLength = 20) {
    const randomLang = ["fr", "en", "es", "it"][Math.floor(Math.random() * 4)];
    const chosenLang = lang || randomLang;
    const terms = {
        adjectives: {
            fr: ["Rapide", "Mystique", "Brillant", "Furtif", "Agile", "Étrange", "Glacial"],
            en: ["Fast", "Mystic", "Bright", "Stealthy", "Agile", "Weird", "Icy"],
            es: ["Rápido", "Místico", "Brillante", "Sigiloso", "Ágil", "Raro", "Helado"],
            it: ["Veloce", "Misterioso", "Luminoso", "Furtivo", "Agile", "Strano", "Gelido"]
        },
        nouns: {
            fr: ["Pingouin", "Renard", "Dragon", "Octopus", "Panthère", "Loutre", "Faucon"],
            en: ["Penguin", "Fox", "Dragon", "Octopus", "Panther", "Otter", "Falcon"],
            es: ["Pingüino", "Zorro", "Dragón", "Pulpo", "Pantera", "Nutria", "Halcón"],
            it: ["Pinguino", "Volpe", "Drago", "Polpo", "Pantera", "Lontra", "Falco"]
        },
        techTerms: {
            fr: ["Codeur", "Débugger", "Algorithme", "Script", "Binaire", "Pixel"],
            en: ["Coder", "Debugger", "Algorithm", "Script", "Binary", "Pixel"],
            es: ["Codificador", "Depurador", "Algoritmo", "Script", "Binario", "Píxel"],
            it: ["Codificatore", "Debug", "Algoritmo", "Script", "Binario", "Pixel"]
        }
    };
    let pseudo = "";
    while (pseudo.length < minLength || pseudo.length > maxLength) {
        const adjective = terms.adjectives[chosenLang][Math.floor(Math.random() * terms.adjectives[chosenLang].length)];
        const noun = terms.nouns[chosenLang][Math.floor(Math.random() * terms.nouns[chosenLang].length)];
        const techTerm = terms.techTerms[chosenLang][Math.floor(Math.random() * terms.techTerms[chosenLang].length)];
        pseudo = `${adjective}${noun}${techTerm}`;
    }
    return pseudo;
}
function generateMultipleName(count = 10, lang, minLength = 8, maxLength = 20) {
    const pseudos = [];
    for (let i = 0; i < count; i++) {
        pseudos.push(generateName(lang, minLength, maxLength));
    }
    return pseudos;
}
