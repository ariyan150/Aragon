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



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".card");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
imgs.forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        let imgsrc = this.style.backgroundImage.split('(')[1].split(')')[0].split('"')[1]
        modalImg.src = imgsrc;
        captionText.innerHTML = this.alt;
      }
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 