# Random Name Generator

**Random Name Generator** is a simple and efficient package that generates multilingual pseudonyms by combining adjectives, nouns, and technical terms. It supports multiple languages and allows configuration of the number of words in pseudonyms.

## Features

- **Available Languages**: English (`en`), French (`fr`), Spanish (`es`), Italian (`it`).
- **Dynamic Combinations**: Combines adjectives, nouns, and technical terms.
- **Customizable**: Specify the number of words (`nbrWords`) or generate multiple names at once.
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
```

### 2. Generate Multiple Names

Use `generateMultipleNames` to generate multiple pseudonyms at once:

```typescript
import { generateMultipleNames } from "just-random-names";

// Example: Generate 5 pseudonyms in English with 2 words each
const pseudos = generateMultipleNames(5, "en", 2);
console.log(pseudos);
// Example: [ "FastPenguin", "BrightDragon", "IcyFalcon", "WeirdOtter", "AgileCoder" ]
```

---

## Parameters

### `generateName(lang: string = "en", nbrWords: number = 3): string`

| Parameter  | Type     | Description                                                                                      |
|------------|----------|--------------------------------------------------------------------------------------------------|
| `lang`     | `string` | Language for the words: `"en"` (English), `"fr"` (French), `"es"` (Spanish), `"it"` (Italian).   |
| `nbrWords` | `number` | Number of words in the pseudonym.                                                                |

**Returns**: A string representing a unique pseudonym.

---

### `generateMultipleNames(count: number = 10, lang: string = "en", nbrWords: number = 3): string[]`

| Parameter  | Type     | Description                                                                                      |
|------------|----------|--------------------------------------------------------------------------------------------------|
| `count`    | `number` | Number of pseudonyms to generate.                                                                |
| `lang`     | `string` | Language for the words: `"en"` (English), `"fr"` (French), `"es"` (Spanish), `"it"` (Italian).   |
| `nbrWords` | `number` | Number of words in each pseudonym.                                                               |

**Returns**: An array containing multiple pseudonyms.

---

## Advanced Examples

### Random Generation with Default Language

```typescript
const randomPseudo = generateName(); // Generates a pseudonym in English with 3 words
console.log(randomPseudo); // Example: "BrightOtterAlgorithm"
```

### Generation in Spanish with 4 Words

```typescript
const pseudoEs = generateName("es", 4);
console.log(pseudoEs); // Example: "MísticoZorroAlgoritmoPantera"
```

---

## License

This project is licensed under the **MIT** license.