// For sticky navbar 
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.offsetHeight;

  let lastScrollY = 0;

  window.addEventListener("scroll", function () {
    if (window.scrollY > navbarHeight) {
      if (window.scrollY > lastScrollY) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.style.zIndex = "1000";
      }
    } else {
      navbar.style.transform = "translateY(0)";
      navbar.style.position = "relative";
    }
    lastScrollY = window.scrollY;
  });
});

// about
document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".hidden");
  function handleScrollAnimation(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleScrollAnimation, {
    threshold: 0.1,
  });

  hiddenElements.forEach(function (element) {
    observer.observe(element);
  });
});

// special?
document.addEventListener("DOMContentLoaded", function () {
  const specialOffersSection = document.querySelector(".special-offers");

  function showSpecialOffers(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        specialOffersSection.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(showSpecialOffers, {
    threshold: 0.2,
  });

  observer.observe(specialOffersSection);
});

