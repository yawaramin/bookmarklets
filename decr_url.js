javascript:(() => {
  const results = /^([^\d.]*)(\d+)([/.][^/.]*)?$/.exec(window.location.pathname);

  if (results != null) {
    const suffix = results[3];
    window.location.pathname = results[1] + (parseInt(results[2]) - 1) + (suffix == null ? '' : suffix);
  }
})()

