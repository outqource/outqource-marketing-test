window.onmousedown = (event) => {
  const pathname = window.location.pathname;

  if (pathname === "/login") {
    const targets = [event.target, ...event.target?.childNodes];

    for (const target of targets) {
      const className = target.getAttribute("class");
      if (className.includes("btn-naver")) {
        console.log(target);
      }
    }
  }
};
