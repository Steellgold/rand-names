export declare const CATEGORIES: {
    readonly adjectives: "adjectives";
    readonly nouns: "nouns";
    readonly techTerms: "techTerms";
    readonly lifestyle: "lifestyle";
    readonly cars: "cars";
    readonly food: "food";
    readonly sports: "sports";
    readonly travel: "travel";
};
export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];
export declare function generateName(lang?: string, nbrWords?: number, categories?: Category[]): string;
export declare function generateMultipleNames(count?: number, lang?: string, nbrWords?: number, categories?: Category[]): string[];
