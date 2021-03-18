let sortBtnvid = document.querySelector('.filter-menu.video').children;
let sortItemvid = document.querySelectorAll('.video_card');

for(let k = 0; k < sortItemvid.length; k++) {
    sortItemvid[k].classList.remove('avtive');
    sortItemvid[k].classList.add('delete');

    if(sortItemvid[k].getAttribute('data-item') == 'montakhab'){
        sortItemvid[k].classList.remove('delete');
        sortItemvid[k].classList.add('active');
    }
}

for (let i = 0; i < sortBtnvid.length; i++) {
    sortBtnvid[i].addEventListener('click', function() {
        for(let j = 0; j < sortBtnvid.length; j++) {
            sortBtnvid[j].classList.remove('current');
        }

        this.classList.add('current');

        let targetData = this.getAttribute('data-target');
        
        for(let k = 0; k < sortItemvid.length; k++) {
            sortItemvid[k].classList.remove('avtive');
            sortItemvid[k].classList.add('delete');

            if(sortItemvid[k].getAttribute('data-item') == targetData){
                sortItemvid[k].classList.remove('delete');
                sortItemvid[k].classList.add('active');
            }
        }

    })
}