javascript:document.querySelectorAll('[id], [name]').forEach(elem => {
  const a = document.createElement('a');
  const id = elem.getAttribute('id') || elem.getAttribute('name');
  a.setAttribute('href', `#${id}`);
  a.setAttribute('data-anchor', 'true');
  a.innerText = `🔗 ${id}`;

  elem.parentNode?.insertBefore(a, elem);
})

