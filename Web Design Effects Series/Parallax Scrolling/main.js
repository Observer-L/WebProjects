// jQuery(document).ready(function() {
//   $(window).scroll(function(e) {
//     parallaxScroll();
//   });
//
//   function parallaxScroll() {
//     var scrolled = $(window).scrollTop();
//     console.log(scrolled);
//     $('#parallax-bg-1').css('top', (0 - (scrolled * .10)) + 'px');
//     $('#parallax-bg-2').css('top', (0 - (scrolled * .4)) + 'px');
//     $('#parallax-bg-3').css('top', (0 - (scrolled * .75)) + 'px');
//
//   }
//
// });

window.addEventListener('scroll', (e) => {
  let scrolled = window.pageYOffset;
  let foreground = document.getElementById('parallax-bg-1');
  let middle = document.getElementById('parallax-bg-2');
  let background = document.getElementById('parallax-bg-3');
  foreground.style.top = (0 - (scrolled * .10)) + 'px';
  middle.style.top = (0 - (scrolled * .40)) + 'px';
  background.style.top = (0 - (scrolled * .75)) + 'px';
  console.log(scrolled);
})
