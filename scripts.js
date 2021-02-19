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

Type('به گروه تبلیغاتی', 'demo0', 70)
Type('آرگو', 'demo1', 500)
Type('...خوش آمدید', 'demo2', 70)
      
      
function Type(t, id, speed) {
  var i = 0;
  var txt = t;
  var id = id;
  var speed = speed;
  typeWriter()

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById(id).innerHTML += txt.charAt(i);
      setTimeout(typeWriter, speed);
      i++;
    }
  }
}


