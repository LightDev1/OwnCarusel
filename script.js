const left = document.querySelector('.prev'),
    right = document.querySelector('.next'),
    slider = document.querySelector('.carusel'),
    sliderItem = document.querySelectorAll('img'),
    slides = [];
    
    for (let i = 0; i < sliderItem.length; i++) {
        slides[i] = sliderItem[i].src;
        sliderItem[i].remove();
    }

    let step = 0;
    let offSet = 0;


const drawPics = () => {
    let img = document.createElement('img');
    img.src = slides[step];
    img.style.left = offSet*130 + 'px';
    slider.appendChild(img);
    

    if (step + 1 == slides.length) {
        step = 0;
    }
    else {
        step++;
    }
    if (offSet != 4) {
        offSet++;
    }

    console.log(offSet);

}

const move = () => {
    right.removeEventListener('click', move);
    listItems2 = document.querySelectorAll('img');
    let offSet2 = 0;
    for (let i = 1; i < listItems2.length; i++) {
        listItems2[i].style.left = offSet2*130 - 130 + 'px';
        offSet2++;
    }
    setTimeout( () => {
        listItems2[0].remove();
        drawPics();
        right.addEventListener('click', move);
    }, 1000);
    
};

const drawPicsRight = () => {
    let img = document.createElement('img');
    img.src = slides[step];
    img.style.left = -(offSet*130) + 390 + 'px';
    slider.prepend(img);
    

    if (step + 1 == slides.length) {
        step = 0;
    }
    else {
        step++;
    }

    if (offSet != 4) {
        offSet++;
    }
    console.log(offSet);
};

const moveRight = () => {
    left.removeEventListener('click', moveRight);
    listItems3 = document.querySelectorAll('img');
    let offSet3 = 0;
    for (let i = 0; i < listItems3.length; i++) {
        listItems3[i].style.left = offSet3*130 + 'px';
        offSet3++;
    }
    setTimeout( () => {
        listItems3[listItems3.length - 1].remove();
        drawPicsRight();
        drawPics();
        left.addEventListener('click', moveRight);
    }, 1000);
};

drawPics();
drawPics();
drawPics();
drawPics();
drawPics();
drawPicsRight();
right.addEventListener('click', move);
left.addEventListener('click', moveRight);
