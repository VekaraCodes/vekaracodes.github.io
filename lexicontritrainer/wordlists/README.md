# Publishing additional wordlists

This folder is the public downloadable wordlist library at
`https://vekaracodes.github.io/lexicontritrainer/wordlists/`.

## Add a downloadable wordlist

1. Upload a UTF-8 plain `.txt` file here, for example `FinnishB2Verbs.txt`.
2. Add a corresponding entry to the **existing** `catalog.json` file. Do not overwrite the existing catalogue entries:

   ```json
   {
     "file": "FinnishB2Verbs.txt",
     "title": "Finnish B2 verbs",
     "description": "Intermediate Finnish verbs with English translations."
   }
   ```

3. Commit both changes; the public link will be
   `/lexicontritrainer/wordlists/FinnishB2Verbs.txt`.
4. Open the Wordlists page and test its download link.

## Wordlist file format

A line contains the *value before each closing tag*:

```text
word<w>root<r>definition<d>translation 1, translation 2<t>
```

- `<w>`: main word (required).
- `<r>`: root word / logical word-family identifier (optional).
- `<d>`: definition in the target language (optional).
- `<t>`: English translations separated by commas (optional).
- At least one of `<d>` or `<t>` is needed in addition to `<w>`.
- Omit `<r>` on the root word itself; the word is automatically its own root.
- Derivatives and closely related words should use **the same root text**.
- Repeat a word on different lines to document different senses.
- Lines beginning with `#` are comments.

### Example word family

```text
# Spanish vocabulary; the root does not need its own <r> tag.
esperar<w>aguardar que algo suceda<d>to wait, to hope<t>
espera<w>esperar<r>tiempo que se pasa aguardando algo<d>waiting, wait<t>
desesperar<w>esperar<r>perder la esperanza o la paciencia<d>to despair, to lose patience<t>
```

### Root labels and homonyms — current parser limitation

You may want to annotate homonymous roots with a qualifier, e.g.
`can (container)<r>` versus `can (ability)<r>`. **The currently supplied
`Data.java` parser strips parenthetical qualifiers when grouping roots**, so
these do NOT make separate groups yet.

For now, use distinct root values such as `can_container<r>` and
`can_ability<r>` if you need to keep them separate, or adjust
`WordUnit.getRoot(false)` to preserve parentheses (see accompanying guidance).

## Publishing responsibilities

Only share wordlists you own or have permission to redistribute. Check source
licenses and give attribution where required. Do not include private personal
data in public wordlists.
