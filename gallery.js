let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let currentlySelected = 0;
const nodes = document.querySelectorAll(".gallery-img");

prevBtn.addEventListener('click', function(){
    nextBtn.disabled = false;
    nodes[currentlySelected].classList.remove('active');
    currentlySelected--;
    nodes[currentlySelected].classList.add('active');
    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener('click', function(){
    prevBtn.disabled = false;
    nodes[currentlySelected].classList.remove('active');
    currentlySelected++;
    nodes[currentlySelected].classList.add('active');
    if (currentlySelected + 1 === nodes.length) {
        nextBtn.disabled = true;
    }
})