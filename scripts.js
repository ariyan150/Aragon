const header = document.querySelector(".nav");
const poster = document.querySelector("#poster");
const home = document.querySelector(".home1");

const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver
    (function(
        entries,
        sectionOneObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            header.classList.add("scroll");
            poster.classList.add("poster_scroll");
          } else {
            header.classList.remove("scroll");
            poster.classList.remove("poster_scroll");
          }
        });
      },
    sectionOneOptions);

sectionOneObserver.observe(home)

// Type('گروه تبلیغاتی آرگو', 'demo0')
// Type('بزرگترین شرکت', 'demo1')
// Type('با بیشترین سابقه کار', 'demo2')
      
      
// function Type(t, id) {
//   var i = 0;
//   var txt = t;
//   var id = id;
//   var speed = 120;
//   typeWriter()

//   function typeWriter() {
//     if (i < txt.length) {
//       document.getElementById(id).innerHTML += txt.charAt(i);
//       setTimeout(typeWriter, speed);
//       i++;
//     }
//   }
// }