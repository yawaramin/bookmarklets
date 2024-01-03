javascript:(() => {
  const host = window.location.host;
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

  document.querySelectorAll('a').forEach(a => {
    if (a instanceof HTMLAnchorElement) {
      const href = a.getAttribute('href');

      if (href != null && href.startsWith('http')) {
        const aHost = new URL(href).host;
        if (host != aHost) {
          const span = document.createElement('span');

          span.className = extCls;
          span.innerText = aHost;
          a.appendChild(span);
        }
      }
    }
  })
})()

