var slides = document.querySelectorAll('#slides ul li');
var numSlides = slides.length;
var slideIndex = 0;

var pagers = document.querySelectorAll('.pager>ul>li');

// Show Target Slide
function currentSlide() {
    // reindex
    if (slideIndex < 0) slideIndex=5;
    if (slideIndex > numSlides-1) slideIndex=0;

    // remove actived slide
    [].forEach.call(slides, el => el.classList.remove('slideActive'));
    // active target slide
    slides[slideIndex].classList.add('slideActive');

    // do the same on the pager
    [].forEach.call(pagers, el => el.classList.remove('slideActive'));
    pagers[slideIndex].classList.add('slideActive');

    // reset the progress bar and the timer
    resetProgress();
    resetInterval();
}


// button to toggle slides
function next() {
    slideIndex++;
    currentSlide();
}

function prev() {
    slideIndex--;
    currentSlide();
}


// reset the progress bar
function resetProgress() {
    var bar = document.querySelector('.progressbar');
    var newBar = bar.cloneNode(true);
    var x = bar.parentNode.replaceChild(newBar, bar);
}

// reset the timer
function resetInterval() {
    clearInterval(autoNext);
    autoNext = setInterval(
        function() {
            slideIndex++;
            currentSlide();
        }, 10000);
}


// timer
var autoNext = setInterval(function() {
    next();
}, 10000);


// add event listener to buttons
function addEventListenerById(id, index) {
    document.getElementById(id).addEventListener('click',
        function(){
            slideIndex = index;
            currentSlide();
        });
}

addEventListenerById('first', 0);
addEventListenerById('second', 1);
addEventListenerById('third', 2);
addEventListenerById('fourth', 3);
addEventListenerById('fifth', 4);
addEventListenerById('sixth', 5);


document.getElementById('next')
                        .addEventListener('click',
                            function () {
                                next();
})

document.getElementById('previous')
                        .addEventListener('click',
                            function () {
                                prev();
})