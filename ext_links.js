javascript:(() => {
  const host = window.location.host;
  document.querySelectorAll('a').forEach(a => {
    if (a instanceof HTMLAnchorElement) {
      const href = a.getAttribute('href');

      if (href != null && href.startsWith('http') && host != new URL(href).host)
        a.innerText = '🌐 ' + a.innerText;
    }
  })
})()

