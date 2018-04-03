let searchBar = document.getElementById('searchbar');
let mask = document.getElementById('mask');
let zoom = document.getElementById('zoom');
let searchInput = document.querySelector('#searchbar input');
let placeholder = document.getElementById('placeholder');

// searchBar
searchBar.addEventListener('click', e => {
  if (mask.className == '') {
    mask.classList.add('mask-hide');
    zoom.classList.add('zoom-hide');
    placeholder.style.display = 'none';
    document.querySelector('#searchbar input').focus();
  }
  e.stopPropagation();

  let closeBtn = document.getElementById('close');
  closeBtn.addEventListener('click', e => {
    mask.classList.remove('mask-hide');
    zoom.classList.remove('zoom-hide');
    placeholder.style.display = '';

    if (searchInput.value != '') {
      placeholder.innerText = searchInput.value;
    } else {
      placeholder.innerText = '搜索';
    }

    e.stopPropagation();
  });

  document.addEventListener('click', e => {
    mask.classList.remove('mask-hide');
    zoom.classList.remove('zoom-hide');
    placeholder.style.display = '';
    if (searchInput.value != '') {
      placeholder.innerText = searchInput.value;
    } else {
      placeholder.innerText = '搜索';
    }
  });
})

// navbar scroll
let navbar = document.getElementById('navbar');
window.addEventListener('scroll', e => {
  if (window.scrollY > 400) {
    navbar.style.height = '52px';
    title.style.opacity = '0';
    searchBar.style.top = '-15px';
  } else {
    navbar.style.height = '';
    title.style.opacity = '';
    searchBar.style.top = '';
  }
})
