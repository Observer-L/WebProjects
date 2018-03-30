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



(function tweet() {
  let tweet_btn = document.getElementsByClassName('tweet')[0];
  let content = document.getElementsByClassName('content')[0];
  let filter = document.getElementById('filter');


  tweet_btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!document.getElementsByClassName('tweet-frame')[0]) {
      let tweetFrame = document.createElement('div');
      tweetFrame.className = 'tweet-frame';
      tweetFrame.innerHTML = `
      <div class="modal-header"><h3 class="modal-title">Compose new Tweet</h3></div>
      <div class="modal-body">
      <div id="tweet-box">
      <img src="img/default_profile_normal.png" class="avatar" />
      <div id="editor" contentEditable="true" data-placeholder="What’s happening?"></div>
      </div>
      <button class="btn close"><i class="fas fa-times"></i></button>
      </div>`;
      content.appendChild(tweetFrame);
      filter.style.display = 'block';


      let closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.addEventListener('click', (e) => {
        console.log('btn');
        content.removeChild(document.getElementsByClassName('tweet-frame')[0]);
        filter.style.display = 'none';
      })
    }
  })

  // 与前一种点击页面其他地方隐藏div的实现方法不同，这里利用div后面的遮罩层，给遮罩层绑定事件实现
  filter.addEventListener('click', (e) => {
    if (document.getElementsByClassName('tweet-frame')[0]) {
      content.removeChild(document.getElementsByClassName('tweet-frame')[0]);
      filter.style.display = 'none';
    }
  })

}())
