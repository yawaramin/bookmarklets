javascript:(async () => {
  const txt = document.getElementById('merge-dialog-commit-message-textfield');
  const results = /^Merged[^(]+\(pull request ([^)]+)\)\n\n([^\n]*)\n\n([^]*)/.exec(txt.value);

  if (results != null) {
    const msg = `${results[2]} (${results[1]})\n\n${results[3]}`;
    await navigator.clipboard.writeText(msg);
    txt.select();

    const wrn = document.createTextNode('✋ remember to paste!');
    txt.parentNode?.insertBefore(wrn, txt);
    txt.addEventListener('paste', evt => wrn.data = '✅ ready to merge!');
  }
})()

