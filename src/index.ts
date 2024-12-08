export function generateName(
  lang: string = "en",
  nbrWords: number = 3
): string {
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

  const randomLang = (["fr", "en", "es", "it"] as const)[Math.floor(Math.random() * 4)];
  const chosenLang = lang || randomLang;

  const getRandomTerm = (category: keyof typeof terms, lang: string) => {
    // @ts-ignore
    const options = terms[category][lang as keyof typeof terms[category]];
    return options[Math.floor(Math.random() * options.length)];
  };

  const pseudoParts: string[] = [];
  for (let i = 0; i < nbrWords; i++) {
    const category = ["adjectives", "nouns", "techTerms"][
      Math.floor(Math.random() * 3)
    ] as keyof typeof terms;
    
    pseudoParts.push(getRandomTerm(category, chosenLang));
  }

  return pseudoParts.join("");
}

export function generateMultipleNames(
  count: number = 10,
  lang: string = "en",
  nbrWords: number = 3
): string[] {
  const pseudos: string[] = [];
  for (let i = 0; i < count; i++) {
      pseudos.push(generateName(lang, nbrWords));
  }
  return pseudos;
}