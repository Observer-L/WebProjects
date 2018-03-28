(function activeTabs() {
  let tabs = document.querySelectorAll('.tabs ul li');
  [].forEach.call(tabs, tab => tab.addEventListener('click', (e) => {
    [].forEach.call(tabs, tab => {
      tab.classList.remove('active')
    });
    tab.classList.add('active');
  }))
}());

(function showDropDownMenu() {
  let accout = document.querySelector('.accout');
  let dropDownMenu = accout.querySelector('.dropdown-menu');

  accout.addEventListener('click', (e)=>{
    dropDownMenu.classList.toggle('show');
  })
}())
