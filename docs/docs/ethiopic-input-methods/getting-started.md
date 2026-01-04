---
sidebar_position: 1
---

# Getting Started

Keywrite provides pre-made input methods for various Ethiopic languages. These follow the mnemonic principles outlined in the GFF Ethiopic Keyboard Specification: http://keyboards.ethiopic.org/specification/

Ethiopic script is an ancient writing system used by multiple languages in the Horn of Africa, primarily in Ethiopia and Eritrea. The script is syllabic, meaning each character (called a syllograph) represents a consonant-vowel combination rather than individual letters.

## Available Input Methods

The following input methods correspond to the specifications defined in the [GFF Ethiopic Keyboard Specification](http://keyboards.ethiopic.org/specification/):

| Input Method                  | Name                        | Supported Regions              |
| ----------------------------- | --------------------------- | ------------------------------ |
| `am-ET`                       | Amharic                     | am-ET                          |
| `awn-ET_byn-ER_xan-ET`        | Awngi, Blin, Xamtanga       | awn-ET, byn-ER, xan-ET         |
| `bcq-ET`                      | Bench                       | bcq-ET                         |
| `mym-ET_muz-ET_suq-ET_mdx-ET` | Dizi, Me'en, Mursi, Suri    | mym-ET, muz-ET, suq-ET, mdx-ET |
| `gez-ET_gez-ER`               | Ge'ez                       | gez-ET, gez-ER                 |
| `har-ET`                      | Harari                      | har-ET                         |
| `sgw-ET`                      | Sebatbeit                   | sgw-ET                         |
| `xst-ET`                      | Silt'e                      | xst-ET                         |
| `ti-ER`                       | Tigrinya (Eritrean)         | ti-ER                          |
| `ti-ET`                       | Tigrinya (Ethiopia)         | ti-ET                          |
| `ET`                          | Ethiopic (Language Neutral) | ET                             |

## Installation

```
yarn install @keywrite/ethiopic-input-methods
```

## Ethiopic Input Method Principles

The Ethiopic input methods follow these key principles:

## 1. Phonological Continuity

Letters map between scripts based on phonetic correspondence:

-   `s` → `ስ` (both 's' sound)
-   `m` → `ም` (both 'm' sound)

## 2. Character Class Continuity

-   Letters map to letters
-   Numbers map to numbers
-   Punctuation maps to punctuation

## 3. Ergonomic Design

Frequently occurring characters require fewer keystrokes:

-   `e` → `እ` (common, single key)
-   `ee` → `ዕ` (less common, double key)
