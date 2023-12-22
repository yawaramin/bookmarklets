javascript:document.querySelectorAll('[id], [name]').forEach(elem => {
  const parent = elem.parentNode;

  if (parent != null) {
    const a = document.createElement('a');
    const id = elem.getAttribute('id') || elem.getAttribute('name');

    a.setAttribute('href', `#${id}`);
    a.setAttribute('data-anchor', 'true');
    a.innerText = `🔗 ${id}`;
    parent.insertNode(a, elem);
  }
})

