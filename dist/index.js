"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateName = generateName;
exports.generateMultipleNames = generateMultipleNames;
function generateName(lang, nbrWords) {
    if (lang === void 0) { lang = "en"; }
    if (nbrWords === void 0) { nbrWords = 3; }
    var terms = {
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
    var randomLang = ["fr", "en", "es", "it"][Math.floor(Math.random() * 4)];
    var chosenLang = lang || randomLang;
    var getRandomTerm = function (category, lang) {
        // @ts-ignore
        var options = terms[category][lang];
        return options[Math.floor(Math.random() * options.length)];
    };
    var pseudoParts = [];
    for (var i = 0; i < nbrWords; i++) {
        var category = ["adjectives", "nouns", "techTerms"][Math.floor(Math.random() * 3)];
        pseudoParts.push(getRandomTerm(category, chosenLang));
    }
    return pseudoParts.join("");
}
function generateMultipleNames(count, lang, nbrWords) {
    if (count === void 0) { count = 10; }
    if (lang === void 0) { lang = "en"; }
    if (nbrWords === void 0) { nbrWords = 3; }
    var pseudos = [];
    for (var i = 0; i < count; i++) {
        pseudos.push(generateName(lang, nbrWords));
    }
    return pseudos;
}
