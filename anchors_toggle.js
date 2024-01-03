javascript:(() => {
  const anchorAttr = 'data-anchor';
  const anchors = document.querySelectorAll(`[${anchorAttr}]`);

  if (anchors.length == 0) {
    const extCls = 'github-yawaramin-ext-link';
    const extStyId = `${extCls}-id`;
    const extSty = document.getElementById(extStyId) || document.createElement('style');

    extSty.id = extStyId;
    extSty.innerText = `.${extCls} {
  background-color:#e9e9e9;
  border-radius:10px;
  margin-left:4px;
  padding:4px;
  font-family: sans-serif;
  font-size:x-small;
}`;
    document.head.appendChild(extSty);

    document.querySelectorAll('[id], [name]').forEach(elem => {
      if (elem.id != extStyId) {
        const a = document.createElement('a');
        const id = elem.getAttribute('id') || elem.getAttribute('name');

        a.setAttribute('href', `#${id}`);
        a.setAttribute(anchorAttr, 'true');
        a.className = extCls;
        a.innerText = `🔗 ${id}`;

        elem.parentNode?.insertBefore(a, elem);
      }
    });
  } else {
    anchors.forEach(anchor => anchor.parentNode.removeChild(anchor));
  }
})()

