window.addEventListener("scroll", function () {
    const stickyElement = document.querySelector("#stickyNavbar");
    const scrollPosition = window.scrollY;
    const maxScroll = 65

    // Apply sticky behavior only up to 300px scroll
    if (scrollPosition > maxScroll) {
      stickyElement.classList.remove("sticky", "top-3");
      stickyElement.classList.add("relative");
    } else {
      stickyElement.classList.add("sticky", "top-3");
      stickyElement.classList.remove("relative");
    }
  });