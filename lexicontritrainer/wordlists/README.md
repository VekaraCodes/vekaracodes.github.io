# Publishing additional wordlists

This folder is the public downloadable wordlist library at
`https://vekaracodes.github.io/lexicontritrainer/wordlists/`.

The library includes Spanish, French and German core dictionaries, the English
Rare Word Dictionary, and specialised vocabulary lists for subjects such as
travel, abstract concepts, medicine and technical terminology. You can also
import your own lists into LexiconTriTrainer.

## Add a downloadable wordlist

1. Upload a UTF-8 plain `.txt` file here, for example `FinnishB2Verbs.txt`.
2. Add a corresponding entry to the **existing** `catalog.json` file. Do not overwrite existing catalogue entries:

   ```json
   {
     "file": "FinnishB2Verbs.txt",
     "title": "Finnish B2 verbs",
     "description": "Intermediate Finnish verbs with English translations."
   }
   ```

3. Commit both changes; the public link will be
   `/lexicontritrainer/wordlists/FinnishB2Verbs.txt`.
4. Open the Wordlists page and test the download link.

## Wordlist file format

Use a UTF-8 plain-text `.txt` file, with **one vocabulary entry per line**.
Write the value **before** its tag:

```text
word<w>root<r>definition<d>translation 1, translation 2<t>
```

- `<w>`: the word or expression to learn (**required**).
- `<r>`: an optional common root or word-family identifier for related words.
- `<d>`: a definition in the language being studied (optional).
- `<t>`: one or more translations, separated by commas (optional).
- Each entry needs a `<w>` and at least one `<d>` or `<t>`.
- If `<r>` is omitted, the word acts as its own root. Use the **same root** for related derivatives.
- Put different meanings of the same word on separate lines.
- Lines beginning with `#` are comments and are not imported as entries.

### Parentheses versus square brackets

These marks have **different purposes**:

- **Parentheses `(…)`** add context to distinguish a particular meaning. They
  appear with the word when it is used as a question, but the parenthetical
  words are **not intended to be required** in a typed answer. For example,
  `banco (asiento)` and `banco (finanzas)` distinguish *bench* and *bank*;
  the answer word in both cases is `banco`.
- **Square brackets `[…]`** hold extra information, such as gender or a
  preposition. The bracketed information is hidden in the question and shown
  with the revealed answer. For example, `éclair [m]` identifies masculine
  gender; `pensar [en]` records the preposition often used with *pensar*.

### Six example entries

These are **illustrative Spanish and French entries**, showing two meanings of
one word, grammatical notes, and a word family with the shared root `pensar`.
For a real study list, it is usually clearer to keep languages in separate files.

```text
banco (asiento)<w>mueble largo para sentarse<d>bench<t>
banco (finanzas)<w>entidad que guarda dinero<d>bank<t>
éclair [m]<w>pâtisserie fourrée à la crème<d>cream-filled pastry<t>
pensar [en]<w>tener algo en la mente<d>to think about<t>
pensamiento [m]<w>pensar<r>idea o acto de pensar<d>thought<t>
pensador [m]<w>pensar<r>persona que reflexiona<d>thinker<t>
```

The `<r>pensar` values connect *pensamiento* and *pensador* with *pensar*.
The entry for *pensar* itself does not need an explicit `<r>` tag.

For an editable starting point, see [`wordlist-template.txt`](wordlist-template.txt).

## Publishing responsibilities

Only share wordlists you own or have permission to redistribute. Check source
licenses and give attribution where required. Do not include private personal
data in public wordlists.
