/* Read the local JSON catalogue. This script makes no third-party requests. */
(function () {
  'use strict';
  const target = document.getElementById('wordlist-catalog');
  if (!target) return;

  // Only allow simple local .txt filenames, so catalogue entries cannot redirect visitors.
  const validFile = (name) => typeof name === 'string' && /^[a-zA-Z0-9][a-zA-Z0-9._-]*\.txt$/.test(name) && !name.includes('..');

  fetch('catalog.json', {cache: 'no-store'})
    .then((response) => {
      if (!response.ok) throw new Error('Catalogue unavailable');
      return response.json();
    })
    .then((entries) => {
      if (!Array.isArray(entries) || entries.length === 0) return;
      const valid = entries.filter(item => item && validFile(item.file) && typeof item.title === 'string' && item.title.trim());
      if (valid.length === 0) return;
      const list = document.createElement('div');
      list.className = 'file-list';
      for (const item of valid) {
        const card = document.createElement('article');
        card.className = 'file-row';
        const details = document.createElement('div');
        const name = document.createElement('h3');
        name.textContent = item.title;
        const desc = document.createElement('p');
        desc.textContent = item.description || 'Plain-text wordlist for LexiconTriTrainer';
        const link = document.createElement('a');
        link.href = encodeURIComponent(item.file);
        link.download = item.file;
        link.textContent = 'Download .txt';
        link.setAttribute('aria-label', 'Download ' + item.title + ' as a text file');
        details.append(name, desc);
        card.append(details, link);
        list.append(card);
      }
      target.replaceChildren(list);
    })
    .catch(() => {
      // Retain the useful static empty state if the manifest cannot be read.
    });
})();
