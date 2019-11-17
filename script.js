const left = container.querySelector('.prev'),
    right = container.querySelector('.next'),
    slides = container.querySelector('.slides'),
    slidesItem = container.querySelectorAll('li');

//Конфигурация(по хорошему надо бы сделать изменяемым юзером, но ...) )
let width = 130;
let count = 3;
let position = 0;

left.addEventListener('click', () => {
    position += width * count;

    position = Math.min(0, position);

    slides.style.marginLeft = position + 'px';

    console.log(position);
});

right.addEventListener('click', () => {
    position -= width * count;

    position = Math.max(position, -width * (slidesItem.length - count));

    slides.style.marginLeft = position + 'px';

    console.log(position);
})
