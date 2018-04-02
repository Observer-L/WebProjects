let searchBar = document.getElementById('searchbar');
let mask = document.getElementById('mask');
let zoom = document.getElementById('zoom');
let placeholder = document.getElementById('placeholder');
searchBar.addEventListener('click', (e) => {
  if (!document.querySelector('#searchbar .close-search')) {
    mask.style.background = '#fff';
    zoom.style.left = '6px';
    zoom.style.position = 'absolute'

    mask.style.width = '0';
    mask.style.border = 'none';
    mask.style.padding = '0';

    placeholder.style.display = 'none';

    let closeBtn = document.createElement('span');
    closeBtn.className = 'close-search';
    closeBtn.innerHTML = `<i class="fas fa-times-circle"></i>`
    searchBar.appendChild(closeBtn);
  } else {
    mask.style.background = '';
    zoom.style.left = '';
    zoom.style.position = ''

    mask.style.width = '';
    mask.style.border = '';
    mask.style.padding = '';

    placeholder.style.display = '';

    searchBar.removeChild(document.querySelector('#searchbar .close-search'));
  }

})
