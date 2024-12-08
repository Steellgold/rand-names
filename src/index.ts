export const CATEGORIES = {
  adjectives: 'adjectives',
  nouns: 'nouns',
  techTerms: 'techTerms',
  lifestyle: 'lifestyle',
  cars: 'cars',
  food: 'food',
  sports: 'sports',
  travel: 'travel'
} as const;

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export function generateName(
  lang: string = "en",
  nbrWords: number = 3,
  categories: Category[] = []
): string {
  const terms = {
    adjectives: {
      fr: [
        "Rapide", "Mystique", "Brillant", "Furtif", "Agile", "Étrange", "Glacial",
        "Élégant", "Intrépide", "Sombre", "Radieux", "Lumineux", "Précis", "Audacieux",
        "Silencieux", "Imposant", "Fluide", "Sauvage", "Innovant", "Robuste",
        "Puissant", "Vif", "Aventurier", "Astucieux", "Brave", "Énigmatique",
        "Fort", "Chaleureux", "Raffiné", "Majestueux"
      ],
      en: [
        "Fast", "Mystic", "Bright", "Stealthy", "Agile", "Weird", "Icy",
        "Elegant", "Fearless", "Dark", "Radiant", "Luminous", "Precise", "Bold",
        "Silent", "Imposing", "Fluid", "Wild", "Innovative", "Sturdy",
        "Powerful", "Quick", "Adventurous", "Clever", "Brave", "Enigmatic",
        "Strong", "Warm", "Refined", "Majestic"
      ],
      es: [
        "Rápido", "Místico", "Brillante", "Sigiloso", "Ágil", "Raro", "Helado",
        "Elegante", "Intrépido", "Oscuro", "Radiante", "Luminoso", "Preciso", "Atrevido",
        "Silencioso", "Imponente", "Fluido", "Salvaje", "Innovador", "Resistente",
        "Poderoso", "Rápido", "Aventurero", "Ingenioso", "Valiente", "Enigmático",
        "Fuerte", "Cálido", "Refinado", "Majestuoso"
      ],
      it: [
        "Veloce", "Misterioso", "Luminoso", "Furtivo", "Agile", "Strano", "Gelido",
        "Elegante", "Intrepido", "Oscuro", "Radioso", "Lumineux", "Preciso", "Audace",
        "Silenzioso", "Imponente", "Fluido", "Selvaggio", "Innovativo", "Robusto",
        "Potente", "Rapido", "Avventuroso", "Astuto", "Coraggioso", "Enigmatico",
        "Forte", "Caldo", "Raffinato", "Maestoso"
      ]
    },
    nouns: {
      fr: [
        "Pingouin", "Renard", "Dragon", "Octopus", "Panthère", "Loutre", "Faucon",
        "Serpent", "Éléphant", "Chouette", "Requin", "Griffon", "Corbeau", "Hérisson",
        "Hibou", "Caribou", "Loup", "Tigre", "Étoile", "Aigle",
        "Cheval", "Lynx", "Lion", "Léopard", "Castor", "Papillon",
        "Phoque", "Moineau", "Paon", "Cygne"
      ],
      en: [
        "Penguin", "Fox", "Dragon", "Octopus", "Panther", "Otter", "Falcon",
        "Snake", "Elephant", "Owl", "Shark", "Griffon", "Raven", "Hedgehog",
        "Hawk", "Caribou", "Wolf", "Tiger", "Star", "Eagle",
        "Horse", "Lynx", "Lion", "Leopard", "Beaver", "Butterfly",
        "Seal", "Sparrow", "Peacock", "Swan"
      ],
      es: [
        "Pingüino", "Zorro", "Dragón", "Pulpo", "Pantera", "Nutria", "Halcón",
        "Serpiente", "Elefante", "Búho", "Tiburón", "Grifo", "Cuervo", "Erizo",
        "Águila", "Lobo", "Tigre", "Estrella", "Caribú", "León",
        "Caballo", "Lince", "Leopardo", "Castor", "Mariposa", "Foca",
        "Gorrión", "Pavo real", "Cisne", "Jaguar"
      ],
      it: [
        "Pinguino", "Volpe", "Drago", "Polpo", "Pantera", "Lontra", "Falco",
        "Serpente", "Elefante", "Gufo", "Squalo", "Grifone", "Corvo", "Riccio",
        "Aquila", "Lupo", "Tigre", "Stella", "Caribù", "Leone",
        "Cavallo", "Lince", "Leopardo", "Castoro", "Farfalla", "Foca",
        "Passero", "Pavone", "Cigno", "Giaguaro"
      ]
    },
    techTerms: {
      fr: [
        "Codeur", "Débugger", "Algorithme", "Script", "Binaire", "Pixel",
        "Cloud", "Serveur", "IA", "Donnée", "Crypto", "Réseau", "Base", "Table",
        "Compression", "Hachage", "Kernel", "Système", "Packet", "Envoi",
        "Langage", "API", "Module", "Programmation", "Logiciel", "Plugin",
        "Framework", "Objet", "Classe", "Index"
      ],
      en: [
        "Coder", "Debugger", "Algorithm", "Script", "Binary", "Pixel",
        "Cloud", "Server", "AI", "Data", "Crypto", "Network", "Database", "Table",
        "Compression", "Hashing", "Kernel", "System", "Packet", "Transfer",
        "Language", "API", "Module", "Programming", "Software", "Plugin",
        "Framework", "Object", "Class", "Index"
      ],
      es: [
        "Codificador", "Depurador", "Algoritmo", "Script", "Binario", "Píxel",
        "Nube", "Servidor", "IA", "Datos", "Cripto", "Red", "Base", "Tabla",
        "Compresión", "Hash", "Núcleo", "Sistema", "Paquete", "Transferencia",
        "Lenguaje", "API", "Módulo", "Programación", "Software", "Plugin",
        "Framework", "Objeto", "Clase", "Índice"
      ],
      it: [
        "Codificatore", "Debug", "Algoritmo", "Script", "Binario", "Pixel",
        "Cloud", "Server", "IA", "Dati", "Cripto", "Rete", "Database", "Tabella",
        "Compressione", "Hashing", "Kernel", "Sistema", "Pacchetto", "Trasferimento",
        "Linguaggio", "API", "Modulo", "Programmazione", "Software", "Plugin",
        "Framework", "Oggetto", "Classe", "Indice"
      ]
    },
    lifestyle: {
      fr: [
        "Aventurier", "Nomade", "Minimaliste", "Créatif", "Zen", 
        "Entrepreneur", "Voyageur", "Sportif", "Artiste", "Écolo", 
        "Gourmand", "Passionné", "Libre", "Inspirant", "Dynamique"
      ],
      en: [
        "Adventurer", "Nomad", "Minimalist", "Creative", "Zen", 
        "Entrepreneur", "Traveler", "Athlete", "Artist", "Eco-friendly", 
        "Foodie", "Passionate", "Free", "Inspiring", "Dynamic"
      ],
      es: [
        "Aventurero", "Nómada", "Minimalista", "Creativo", "Zen", 
        "Emprendedor", "Viajero", "Atleta", "Artista", "Ecológico", 
        "Gourmet", "Apasionado", "Libre", "Inspirador", "Dinámico"
      ],
      it: [
        "Avventuriero", "Nomade", "Minimalista", "Creativo", "Zen", 
        "Imprenditore", "Viaggiatore", "Atleta", "Artista", "Ecologico", 
        "Buongustaio", "Appassionato", "Libero", "Ispirante", "Dinamico"
      ]
    },
    cars: {
      fr: [
        "Sportive", "Électrique", "Luxueuse", "Compacte", "Robuste", 
        "Rapide", "Élégante", "Futuriste", "Puissante", "Écologique",
        "Classique", "Innovante", "Confortable", "Performante", "Agile"
      ],
      en: [
        "Sporty", "Electric", "Luxury", "Compact", "Robust", 
        "Fast", "Elegant", "Futuristic", "Powerful", "Eco-friendly",
        "Classic", "Innovative", "Comfortable", "High-performance", "Agile"
      ],
      es: [
        "Deportivo", "Eléctrico", "Lujoso", "Compacto", "Robusto", 
        "Rápido", "Elegante", "Futurista", "Potente", "Ecológico",
        "Clásico", "Innovador", "Cómodo", "De alto rendimiento", "Ágil"
      ],
      it: [
        "Sportivo", "Elettrico", "Lussuoso", "Compatto", "Robusto", 
        "Veloce", "Elegante", "Futuristico", "Potente", "Ecologico",
        "Classico", "Innovativo", "Confortevole", "Prestazionale", "Agile"
      ]
    },
    food: {
      fr: [
        "Délicieux", "Épicé", "Sucré", "Raffiné", "Frais", 
        "Rustique", "Exotique", "Crémeux", "Léger", "Savoureux",
        "Authentique", "Gourmet", "Copieux", "Végétalien", "Bio"
      ],
      en: [
        "Delicious", "Spicy", "Sweet", "Refined", "Fresh", 
        "Rustic", "Exotic", "Creamy", "Light", "Tasty",
        "Authentic", "Gourmet", "Hearty", "Vegan", "Organic"
      ],
      es: [
        "Delicioso", "Picante", "Dulce", "Refinado", "Fresco", 
        "Rústico", "Exótico", "Cremoso", "Ligero", "Sabroso",
        "Auténtico", "Gourmet", "Abundante", "Vegano", "Orgánico"
      ],
      it: [
        "Delizioso", "Piccante", "Dolce", "Raffinato", "Fresco", 
        "Rustico", "Esotico", "Cremoso", "Leggero", "Saporito",
        "Autentico", "Gourmet", "Abbondante", "Vegano", "Biologico"
      ]
    },
    
    sports: {
      fr: [
        "Agile", "Puissant", "Endurant", "Stratégique", "Dynamique", 
        "Intrépide", "Technique", "Rapide", "Mental", "Compétitif",
        "Précis", "Explosif", "Tactique", "Concentré", "Réactif"
      ],
      en: [
        "Agile", "Powerful", "Enduring", "Strategic", "Dynamic", 
        "Fearless", "Technical", "Fast", "Mental", "Competitive",
        "Precise", "Explosive", "Tactical", "Focused", "Reactive"
      ],
      es: [
        "Ágil", "Poderoso", "Resistente", "Estratégico", "Dinámico", 
        "Intrépido", "Técnico", "Rápido", "Mental", "Competitivo",
        "Preciso", "Explosivo", "Táctico", "Concentrado", "Reactivo"
      ],
      it: [
        "Agile", "Potente", "Resistente", "Strategico", "Dinamico", 
        "Intrepido", "Tecnico", "Veloce", "Mentale", "Competitivo",
        "Preciso", "Esplosivo", "Tattico", "Concentrato", "Reattivo"
      ]
    },
    travel: {
      fr: [
        "Aventurier", "Explorateur", "Exotique", "Lointain", "Authentique", 
        "Mystérieux", "Culturel", "Panoramique", "Pittoresque", "Immersif",
        "Spontané", "Épique", "Inattendu", "Inspirant", "Transformateur"
      ],
      en: [
        "Adventurous", "Exploratory", "Exotic", "Far-flung", "Authentic", 
        "Mysterious", "Cultural", "Panoramic", "Picturesque", "Immersive",
        "Spontaneous", "Epic", "Unexpected", "Inspiring", "Transformative"
      ],
      es: [
        "Aventurero", "Explorador", "Exótico", "Lejano", "Auténtico", 
        "Misterioso", "Cultural", "Panorámico", "Pintoresco", "Inmersivo",
        "Espontáneo", "Épico", "Inesperado", "Inspirador", "Transformador"
      ],
      it: [
        "Avventuroso", "Esplorativo", "Esotico", "Lontano", "Autentico", 
        "Misterioso", "Culturale", "Panoramico", "Pittoresco", "Immersivo",
        "Spontaneo", "Epico", "Inaspettato", "Ispirante", "Trasformativo"
      ]
    },
    animals: {
      fr: [
        "Lion", "Tigre", "Aigle", "Requin", "Loup", "Dauphin", "Éléphant", "Girafe", 
        "Gorille", "Jaguar", "Koala", "Léopard", "Lézard", "Lynx", "Morse", "Orque", 
        "Panda", "Phoque", "Renard", "Serpent", "Zèbre", "Crocodile", "Chameau", "Ours"
      ],
      en: [
        "Lion", "Tiger", "Eagle", "Shark", "Wolf", "Dolphin", "Elephant", "Giraffe", 
        "Gorilla", "Jaguar", "Koala", "Leopard", "Lizard", "Lynx", "Walrus", "Orca", 
        "Panda", "Seal", "Fox", "Snake", "Zebra", "Crocodile", "Camel", "Bear"
      ],
      es: [
        "León", "Tigre", "Águila", "Tiburón", "Lobo", "Delfín", "Elefante", "Jirafa", 
        "Gorila", "Jaguar", "Koala", "Leopardo", "Lagarto", "Lince", "Morsa", "Orca", 
        "Panda", "Foca", "Zorro", "Serpiente", "Cebra", "Cocodrilo", "Camello", "Oso"
      ],
      it: [
        "Leone", "Tigre", "Aquila", "Squalo", "Lupo", "Delfino", "Elefante", "Giraffa", 
        "Gorilla", "Giaguaro", "Koala", "Leopardo", "Lucertola", "Lince", "Tricheco", "Orca", 
        "Panda", "Foca", "Volpe", "Serpente", "Zebra", "Coccodrillo", "Cammello", "Orso"
      ]
    },
    professions: {
      fr: ["Astronaute", "Architecte", "Chirurgien", "Pilote", "Photographe", "Detective", "Écrivain"],
      en: ["Astronaut", "Architect", "Surgeon", "Pilot", "Photographer", "Detective", "Writer"],
      es: ["Astronauta", "Arquitecto", "Cirujano", "Piloto", "Fotógrafo", "Detective", "Escritor"],
      it: ["Astronauta", "Architetto", "Chirurgo", "Pilota", "Fotografo", "Detective", "Scrittore"]
    },
    colors: {
      fr: ["Écarlate", "Émeraude", "Améthyste", "Cobalt", "Corail", "Électrique", "Bronze"],
      en: ["Scarlet", "Emerald", "Amethyst", "Cobalt", "Coral", "Electric", "Bronze"],
      es: ["Escarlata", "Esmeralda", "Amatista", "Cobalto", "Coral", "Eléctrico", "Bronce"],
      it: ["Scarlatto", "Smeraldo", "Ametista", "Cobalto", "Corallo", "Elettrico", "Bronzo"]
    },
  };

  const randomLang = (["fr", "en", "es", "it"] as const)[Math.floor(Math.random() * 4)];
  const chosenLang = lang || randomLang;

  const availableCategories = categories.length > 0 
    ? categories 
    : Object.values(CATEGORIES);

    const getRandomTerm = (category: Category, lang: string) => {
      // @ts-ignore
      const options = terms[category][lang as keyof typeof terms[category]];
      return options[Math.floor(Math.random() * options.length)];
  };

  const nameParts: string[] = [];
  for (let i = 0; i < nbrWords; i++) {
    const category = availableCategories[
      Math.floor(Math.random() * availableCategories.length)
    ];
    
    nameParts.push(getRandomTerm(category, chosenLang));
  }

  return nameParts.join("");
}

export function generateMultipleNames(
  count: number = 10,
  lang: string = "en",
  nbrWords: number = 3,
  categories: Category[] = []
): string[] {
  const names: string[] = [];
  for (let i = 0; i < count; i++) {
    names.push(generateName(lang, nbrWords, categories));
  }

  return names;
}