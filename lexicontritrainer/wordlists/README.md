# Publishing additional wordlists

This folder is the public downloadable wordlist library at
`https://vekaracodes.github.io/lexicontritrainer/wordlists/`.

## Add a list

1. Put your UTF-8 `.txt` file in this folder, e.g. `FinnishB2Verbs.txt`.
2. Add an entry to `catalog.json` (a JSON array). Example:

   ```json
   [
     {
       "file": "FinnishB2Verbs.txt",
       "title": "Finnish B2 verbs",
       "description": "Intermediate Finnish verbs with English translations."
     }
   ]
   ```

3. Commit and push both files. GitHub Pages will serve the downloads at
   `/lexicontritrainer/wordlists/FinnishB2Verbs.txt`.
4. Check the link in a browser and import the file into LexiconTriTrainer.

No other HTML needs editing. The catalogue script only accepts simple local
`.txt` filenames and escapes the displayed names by using DOM text nodes.

`wordlist-template.txt` is a small example of the app's import format and is
always downloadable independently of the catalogue.

## Vocabulary file format

One word entry per line. Put the **value before** each tag:

```
talo<w>house<t>building used for living<d>talo<r>
```

Supported tags: `<w>` word, `<t>` translation(s), `<d>` definition,
`<r>` root. The parser ignores comment lines starting with `#`.
A valid entry needs a word and at least one translation or definition.

## Publishing responsibilities

Only upload wordlists you own or have permission to redistribute. If using
third-party dictionary definitions, translations, or examples, check license
terms and attribute the source where required. Never include personal data
in public wordlists.
