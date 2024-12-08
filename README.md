# Random Name Generator

**Random Name Generator** is a simple and efficient package that generates multilingual pseudonyms by combining words from various categories like adjectives, nouns, tech terms, lifestyle, cars, food, sports, and travel. It supports multiple languages and allows configuration of the number of words in pseudonyms.

## Features

- **Available Languages**: English (`en`), French (`fr`), Spanish (`es`), Italian (`it`).
- **Dynamic Combinations**: Combines words from multiple categories.
- **Customizable**: 
  - Specify the number of words (`nbrWords`)
  - Generate multiple names at once
  - Select specific word categories
- **Multilingual Usage**: Easily switch between languages.

---

## Installation

Add the package to your project using NPM or PNPM:

```bash
npm install just-random-names
```

```bash
pnpm install just-random-names
```

---

## Usage

### 1. Generate a Random Name

Import the `generateName` function to create a random pseudonym:

```typescript
import { generateName } from "just-random-names";

// Example: Generate a pseudonym in French with 3 words
const pseudo = generateName("fr", 3);
console.log(pseudo); // Example: "RapideDragonCodeur"

// Example: Generate a pseudonym using only lifestyle and travel categories
const specificPseudo = generateName("en", 2, [lifestyle, travel]);
console.log(specificPseudo); // Example: "NomadEpic"
```

### 2. Generate Multiple Names

Use `generateMultipleNames` to generate multiple pseudonyms at once:

```typescript
import { generateMultipleNames } from "just-random-names";

// Example: Generate 5 pseudonyms in English with 2 words each
const pseudos = generateMultipleNames(5, "en", 2);
console.log(pseudos);
// Example: [ "FastPenguin", "BrightDragon", "IcyFalcon", "WeirdOtter", "AgileCoder" ]

// Example: Generate 3 pseudonyms using only tech and sports categories
const techSportsPseudos = generateMultipleNames(3, "en", 2, [sports]);
console.log(techSportsPseudos);
// Example: [ "CoderAgile", "DebuggerPrecise", "APICompetitive" ]
```

---

## Parameters

### `generateName(lang: string = "en", nbrWords: number = 3, categories: Category[] = []): string`

| Parameter    | Type       | Description                                                                                      |
|--------------|------------|--------------------------------------------------------------------------------------------------|
| `lang`       | `string`   | Language for the words: `"en"` (English), `"fr"` (French), `"es"` (Spanish), `"it"` (Italian).   |
| `nbrWords`   | `number`   | Number of words in the pseudonym.                                                                |
| `categories` | `Category[]`| Optional array of categories to use. If empty, uses all categories.                               |

**Returns**: A string representing a unique pseudonym.

### Available Categories

- `adjectives`
- `nouns`
- `techTerms`
- `lifestyle`
- `cars`
- `food`
- `sports`
- `travel`
- `animals`
- `professions`

### `generateMultipleNames(count: number = 10, lang: string = "en", nbrWords: number = 3, categories: Category[] = []): string[]`

| Parameter    | Type       | Description                                                                                      |
|--------------|------------|--------------------------------------------------------------------------------------------------|
| `count`      | `number`   | Number of pseudonyms to generate.                                                                |
| `lang`       | `string`   | Language for the words: `"en"` (English), `"fr"` (French), `"es"` (Spanish), `"it"` (Italian).   |
| `nbrWords`   | `number`   | Number of words in each pseudonym.                                                               |
| `categories` | `Category[]`| Optional array of categories to use. If empty, uses all categories.                               |

**Returns**: An array containing multiple pseudonyms.

---

## Advanced Examples

### Random Generation with Default Language and Categories

```typescript
const randomPseudo = generateName(); // Generates a pseudonym in English with 3 words from all categories
console.log(randomPseudo); // Example: "BrightOtterAlgorithm"
```

### Generation in Spanish with Specific Categories

```typescript
const pseudoEs = generateName("es", 3, ["lifestyle", "travel"]);
console.log(pseudoEs); // Example: "AventureroLejanoLibre"
```

---

## License

This project is licensed under the **MIT** license.