// Lazy Load images
const targets = document.querySelectorAll(".lazy");

// Callback for images
const imagesLazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log("🐱‍🚀");
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");

        img.setAttribute("src", src);
        img.classList.add("fade-in");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(imagesLazyLoad);
