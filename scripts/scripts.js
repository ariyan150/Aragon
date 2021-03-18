const header = document.querySelector(".nav");
const home = document.querySelector(".observer");

const banner = document.querySelector(".banner");


const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver
    (function(
        entries,
        sectionOneObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            header.classList.add("scroll");
            banner.classList.add("scroll_banner");
          } else {
            header.classList.remove("scroll");
            banner.classList.remove("scroll_banner");
          }
        });
      },
    sectionOneOptions);

sectionOneObserver.observe(home)



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".contain_card");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
imgs.forEach(img => {
    img.onclick = function(){
        innerimg = img.querySelector('.card')
        modal.style.display = "block";
        let imgsrc = innerimg.style.backgroundImage.split('(')[1].split(')')[0].split('"')[1]
        modalImg.src = imgsrc;
        captionText.innerHTML = this.alt;
      }
})


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalImg.src = '';
} 