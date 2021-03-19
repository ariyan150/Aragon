const about = document.querySelector("#aboutPage");
const screen = document.querySelector(".aboutPage__poster");


const sectionTwoOptions = {};
const sectionTwoObserver = new IntersectionObserver
    (function( entries, sectionTwoObserver ) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            about.classList.add("inscreen");
          } else {
            about.classList.remove("inscreen");
          }
        });
      },
    sectionTwoOptions);

sectionTwoObserver.observe(screen)