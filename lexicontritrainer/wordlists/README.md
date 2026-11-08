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

Each line contains one vocabulary entry. Put the text before its tag:

```text
word<w>root<r>definition<d>translation 1, translation 2<t>
```

- `<w>`: main word (required)
- `<r>`: optional root / word-family identifier
- `<d>`: definition in the target language (optional)
- `<t>`: English translations separated by commas (optional)
- At least one of `<d>` or `<t>` is needed in addition to `<w>`.
- If `<r>` is omitted, the main word is automatically used as the root.
- Use the same root text for derivatives and closely related words.
- Repeat a word on different lines to document different senses.
- Lines beginning with `#` are comments.

### Example word family

```text
# Spanish vocabulary; the root does not need its own <r> tag.
esperar<w>aguardar que algo suceda<d>to wait, to hope<t>
espera<w>esperar<r>tiempo que se pasa aguardando algo<d>waiting, wait<t>
desesperar<w>esperar<r>perder la esperanza o la paciencia<d>to despair, to lose patience<t>
```

### Notes and answer checking

You may add extra notes in `(parentheses)` or `[brackets]`.
When the app asks a question or checks an answer, text inside
parentheses and brackets is ignored.

## Publishing responsibilities

Only share wordlists you own or have permission to redistribute. Check source
licenses and give attribution where required. Do not include private personal
data in public wordlists.
