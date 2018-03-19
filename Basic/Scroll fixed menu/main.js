window.onscroll = (e) => {
  let scrollTop = document.documentElement.scrollTop;
  let container = document.getElementsByClassName('container')[0];
  let nav = document.getElementsByTagName('nav')[0];
  let header = document.getElementsByTagName('header')[0];

  if (scrollTop >= (container.scrollHeight / 3)) {
    nav.classList.add('fixed');
    nav.classList.remove('hide');
  } else if (scrollTop < (nav.offsetHeight + header.offsetHeight)) {
    nav.classList.remove(...['hide', 'fixed']);
  } else {
    nav.classList.replace('fixed', 'hide');
  }
}
