javascript:(() => {
  const anchorAttr = 'data-anchor';
  const anchors = document.querySelectorAll(`[${anchorAttr}]`);

  if (anchors.length == 0) {
    document.querySelectorAll('[id], [name]').forEach(elem => {
      const a = document.createElement('a');
      const id = elem.getAttribute('id') || elem.getAttribute('name');

      a.setAttribute('href', `#${id}`);
      a.setAttribute(anchorAttr, 'true');
      a.innerText = `🔗 ${id}`;

      elem.parentNode?.insertBefore(a, elem);
    });
  } else {
    anchors.forEach(anchor => anchor.parentNode.removeChild(anchor));
  }
})()

