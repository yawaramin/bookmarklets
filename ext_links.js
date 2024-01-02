javascript:(() => {
  const host = window.location.host;

  document.querySelectorAll('a').forEach(a => {
    if (a instanceof HTMLAnchorElement) {
      const href = a.getAttribute('href');

      if (href != null && href.startsWith('http')) {
        const aHost = new URL(href).host;
        if (host != aHost) a.innerText = `${a.innerText} (${aHost})`;
      }
    }
  })
})()

