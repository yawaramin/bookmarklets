javascript:document.querySelectorAll('.ak-renderer-document').forEach(cmt => {
  const fst = cmt.children[0].innerText.substring(0, 80);
  cmt.innerHTML = `<details><summary>${fst}...</summary>\n${cmt.innerHTML}</details>`;
})

