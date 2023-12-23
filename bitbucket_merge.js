javascript:(async () => {
  const sel = '#pull-request-details > header > div > div > div.sc-gqjmRU.dlKxWb > div > div.css-1yuhvjn.e1q0qh516 > div > div > div > div.css-1oy5iav > div > button';
  const merge = document.querySelector(sel);

  if (merge != null && merge instanceof HTMLButtonElement) {
    merge.click();
    const txt = document.getElementById('merge-dialog-commit-message-textfield');

    if (txt != null && txt instanceof HTMLTextAreaElement) {
      const results = /^Merged[^(]+\(pull request ([^)]+)\)\n\n([^\n]*)\n\n([^]*)/.exec(txt.value);

      if (results != null) {
        const msg = `${results[2]} (${results[1]})\n\n${results[3]}`;
        await navigator.clipboard.writeText(msg);
        txt.select();

        const wrn = document.createTextNode('✋ remember to paste!');
        txt.addEventListener('paste', evt => wrn.data = '✅ ready to merge!');
        txt.parentNode?.insertBefore(wrn, txt);
      } else console.warn('Default merge message in unexpected format');
    } else console.warn('Merge commit message text box not found');
  } else console.warn(`Merge button not found, probably need to update its selector: ${sel}`);
})()

