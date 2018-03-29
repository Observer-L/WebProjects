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
  let dropDownMenu = document.querySelector('.dropdown-menu');

  accout.addEventListener('click', (e) => {
    // 待优化
    if (e.target == dropDownMenu || e.target.parentNode.parentNode == dropDownMenu || e.target.parentNode.parentNode.parentNode == dropDownMenu ||
      e.target.parentNode.parentNode.parentNode.parentNode == dropDownMenu || e.target.parentNode.parentNode.parentNode.parentNode.parentNode == dropDownMenu) {
      e.stopPropagation();
      return;
    };
    dropDownMenu.classList.toggle('show');
    e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    dropDownMenu.classList.remove('show');
  });
}());
