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
    // 点头像关闭菜单后hoverText消失，待优化
    if (document.querySelector('.hover-text')) {
      document.querySelector('.hover-text').style.display = 'none';
    }
    accout.removeEventListener('mouseover', hoverText, false);


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
    accout.addEventListener('mouseover', hoverText, false);
  });
}());




function hoverText() {
  let accout = document.querySelector('.accout');
  if (!accout.querySelector('.hover-text')) {
    console.log(1);
    let div = document.createElement('div');
    div.className = 'hover-text';
    let text = document.createElement('span');
    text.innerText = 'Profile and Settings';
    div.appendChild(text);
    accout.appendChild(div);
  };

  accout.addEventListener('mouseout', (e) => {
    if (accout.querySelector('.hover-text')) {
      accout.removeChild(accout.querySelector('.hover-text'))
    }
  });
}

let accout = document.querySelector('.accout');
accout.addEventListener('mouseover', hoverText, false);
