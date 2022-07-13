window.onmousedown = (event) => {
  // console.log(`event`, event);

  const pathname = window.location.pathname;
  console.log(`pathname`, pathname);

  const targets = event.path;
  // console.log(`targets`, targets);

  if (!targets || !Array.isArray(targets)) {
    return;
  }

  for (const target of targets) {
    const tag = target.tagName.toLowerCase();
    const className = target.getAttribute("class");
    const href = target.getAttribute("href");

    if (className) {
      let log = `${pathname} onmouseover: ${tag}/${className}`;
      if (href) {
        log = log + ` : ${href}`;
      }

      console.log(log);
    }
  }
};

window.onmouseover = (event) => {
  // console.log(`event`, event);

  const pathname = window.location.pathname;
  console.log(`pathname`, pathname);

  const targets = event.path;
  // console.log(`targets`, targets);

  if (!targets || !Array.isArray(targets)) {
    return;
  }

  for (const target of targets) {
    const tag = target.tagName.toLowerCase();
    const className = target.getAttribute("class");
    const href = target.getAttribute("href");

    if (className) {
      let log = `${pathname} onmouseover: ${tag}/${className}`;
      if (href) {
        log = log + ` : ${href}`;
      }

      console.log(log);
    }
  }
};
