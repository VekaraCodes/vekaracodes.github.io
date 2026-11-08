# LexiconTriTrainer GitHub Pages website

Static, mobile-friendly website for the LexiconTriTrainer Android app:

- `/index.html` — home and feature overview
- `/privacy-policy.html` — privacy policy (HTML page suitable for Play Console)
- `/PRIVACY_POLICY.md` — editable standalone text of the policy
- `/wordlists/index.html` — directory for additional wordlists
- `/wordlists/catalog.json` — metadata for the 11 published wordlists (core and supplementary)
- `/wordlists/wordlist-template.txt` — working example with root-tag and word-family explanations
- `/assets/site.css` and `/assets/wordlists.js` — local assets (no build tools or external libraries)
- `/assets/vekaracodes-logo.webp` — optimized version of the supplied VekaraCodes brush-stroke logo, displayed in the project section and page footers
- `/assets/lexicontritrainer-logo.webp` — supplied L3 brush-style logo used for the LexiconTriTrainer site branding

## Deploy

Copy this folder's **contents** into the root of the repository or the
configured GitHub Pages publishing folder. If your Pages source is set to
`/docs`, copy them under `/docs` instead. Do not create a nested
`lexicontritrainer-site` directory in the publishing root.

Commit and push. If you have already configured GitHub Pages, keep the same
**Settings → Pages** branch/folder. The links work under the project path
`/lexicontritrainer/` because they use relative URLs.

Expected public URLs:

- Home: https://vekaracodes.github.io/lexicontritrainer/
- Privacy: https://vekaracodes.github.io/lexicontritrainer/privacy-policy.html
- Wordlists: https://vekaracodes.github.io/lexicontritrainer/wordlists/

The wordlist catalogue works on GitHub Pages. For testing locally, run
`python3 -m http.server 8000` from this folder, then open
`http://localhost:8000/`; opening HTML via `file://` will usually prevent
`fetch('catalog.json')` from loading. The static empty state remains usable.

See `wordlists/README.md` for adding wordlists.

## Important review items before publishing to Google Play

1. **Add a monitored private privacy contact:** The draft currently directs
   visitors to the VekaraCodes GitHub developer profile. Confirm a usable
   private contact method there; ideally add an actual developer/support
   email address to both `privacy-policy.html` and `PRIVACY_POLICY.md`.
2. **Verify the Android manifest and Gradle dependencies:** The supplied Android manifest has no requested permissions and the supplied
   Gradle build files did not show advertising or analytics dependencies.
   Still verify the **merged release manifest**, included transitive libraries,
   and Play Console Data safety declaration before publishing.
3. **Check `android:allowBackup` and data extraction rules:** Android can
   back up private files/preferences by default. The policy explains the
   possibility rather than promising that backups are always disabled.
4. **Ensure the privacy policy is available inside the Android app:** Google
   Play requires an in-app privacy policy link or text in addition to the
   public Play Console link. Verify this in the app resources/menu.
5. **Check existing content:** The live GitHub Pages site was not retrievable
   during preparation, so this is a replacement design. Preserve any
   important content or live URLs from your current site before overwriting.
6. **Keep the privacy policy in sync** with the Play Console Data safety form,
   especially if networking, ads, crash reporting, analytics, or backup
   settings change. Update the policy date for future revisions.

## Accessibility and privacy design

Semantic landmarks, skip link, visible focus rings, responsive single-column
layouts on narrow screens, reduced-motion support, high-contrast typography,
plain system fonts, and text alternatives for illustrative content. No
external analytics, images, advertising scripts, or CDN fonts are loaded.

## Current catalogue and root-tag documentation

The 11 entries in `wordlists/catalog.json` are the latest entries supplied in
this conversation. The full `.txt` vocabulary files are **not** in this package;
they remain in your GitHub repository and must not be deleted.

The newest `wordlists/index.html`, `wordlists/README.md`, and
`wordlists/wordlist-template.txt` include `<r>` root grouping guidance.
For the Java parser version supplied, parenthetical qualifiers in root
identifiers are removed, so use distinct identifiers (e.g. `can_container`)
when you need to distinguish homonyms without changing the Java app.
