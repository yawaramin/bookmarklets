javascript:(() => {
  const odocToc = document.querySelector('nav.odoc-toc');

  if (odocToc == null) {
    console.warn('Could not find odoc TOC');
    return;
  }

  const addToToc = (title, entries, dropChars) => {
    if (entries.length == 0) return;
    entries.sort();

    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');

    h3.innerText = title;
    odocToc.appendChild(h3);
    odocToc.appendChild(ul);

    entries.forEach(entry => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.setAttribute('href', '#' + entry);
      a.innerText = entry.substring(dropChars);
      li.appendChild(a);
      ul.appendChild(li);
    });
  };

  const vals = [];
  const types = [];
  const modules = [];
  const moduleTypes = [];

  document.querySelectorAll('div[id]').forEach(divWithId => {
    const id = divWithId.id;

    if (id.startsWith('val-')) vals.push(id);
    else if (id.startsWith('type-')) types.push(id);
    else if (id.startsWith('module-')) modules.push(id);
    else if (id.startsWith('module-type-')) moduleTypes.push(id);
  });

  addToToc('Module Types', moduleTypes, 12);
  addToToc('Modules', modules, 7);
  addToToc('Types', types, 5);
  addToToc('Values', vals, 4);
})()

