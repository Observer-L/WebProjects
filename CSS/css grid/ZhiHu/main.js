// CornerButtons
const cornerBtns = document.querySelectorAll('.CornerAnimayedFlex');

// Back To Top
// Scroll To Show/hide the Btn
const backToTopBtn = cornerBtns[1]
window.addEventListener('scroll', handleScroll);
function handleScroll(e) {
  const scrollHeight = document.documentElement.scrollTop;
  const viewportHeight = document.documentElement.clientHeight;
  return scrollHeight > viewportHeight / 2
    ? backToTopBtn.classList.remove('CornerAnimayedFlex--hidden')
    : backToTopBtn.classList.add('CornerAnimayedFlex--hidden');
};

// JUMP Slowly
backToTopBtn.addEventListener('click', backToTop);
function backToTop() {
  const timer = setInterval(() => {
    const scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    let speed = Math.floor(-scrollTop / 2);
    if (scrollTop == 0) {
      clearInterval(timer);
    };
    document.documentElement.scrollTop = scrollTop + speed;
  }, 50)
};

// Feed Back From
const FeedBackBtn = cornerBtns[0];
FeedBackBtn.addEventListener('click', popupWindow);
function popupWindow() {
  const feedbackWindow = document.querySelector('.modal-wrapper');
  const closeBtn = feedbackWindow.querySelector('.modal-closeButton');
  const backdrop = feedbackWindow.querySelector('.backdrop');
  feedbackWindow.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  closeBtn.addEventListener('click', () => {
    feedbackWindow.style.display = 'none';
    document.body.style.overflow = '';
  });
  backdrop.addEventListener('click', () => {
    feedbackWindow.style.display = 'none';
    document.body.style.overflow = '';
  })
}






// user menu
const profile = document.querySelector('.header-profile');
const userMenu = profile.querySelector('.user-menu');
profile.addEventListener('click',toggleMenu);
document.addEventListener('click', e => userMenu.classList.remove('menu-toggle'));
function toggleMenu(e) {
  messagesMenu.classList.remove('messages-toggle');
  notifiedPanel.classList.remove('notifications-toggle');
  e.stopPropagation();
  return userMenu.classList.contains('menu-toggle')
        ? userMenu.classList.remove('menu-toggle')
        : userMenu.classList.add('menu-toggle');
}

// Notifications
const notifications = document.querySelector('.header-notifications');
const notifiedPanel = notifications.querySelector('.popover-content');
const messages = document.querySelector('.header-messages');
const messagesMenu = messages.querySelector('.header-messages .popover-content');
const notifiedTabs = notifications.querySelectorAll('.PushNotifications-tab');
notifiedTabs.forEach(tab => tab.addEventListener('click', handleTabsClick));
function handleTabsClick() {
    notifiedTabs.forEach(tab => tab.classList.remove('PushNotifications-activedTab'));
    this.classList.add('PushNotifications-activedTab');
}

const notifiedList = notifiedPanel.querySelector('.PushNotifications-list');
const notifiedDefault = notifiedPanel.querySelector('.PushNotifications-tab:first-child');
notifiedDefault.addEventListener('click', ()=>{
  notifiedFollower.style.display ="none";
  notifiedList.style.display = "block";
})

const notifiedMessage = notifiedPanel.querySelector('.PushNotifications-tab:nth-child(2)');
notifiedMessage.addEventListener('click', ()=>{
  notifiedList.style.display ="none";
  notifiedFollower.style.display = "block";
})


const notifiedFollower = notifiedPanel.querySelector('.PushNotifications-followList');
notifications.addEventListener('click', toggleNotifications);
notifiedPanel.addEventListener('click', e => e.stopPropagation());

function toggleNotifications(e) {
  notifiedPanel.classList.toggle('notifications-toggle');
  userMenu.classList.remove('menu-toggle');
    messagesMenu.classList.remove('messages-toggle');
  e.stopPropagation();
}
document.addEventListener('click', e => notifiedPanel.classList.remove('notifications-toggle'));


messages.addEventListener('click', toggleMessages);
messagesMenu.addEventListener('click', e => e.stopPropagation());

function toggleMessages(e) {
  messagesMenu.classList.toggle('messages-toggle');
  notifiedPanel.classList.remove('notifications-toggle');
  userMenu.classList.remove('menu-toggle');
  console.log(1);
  e.stopPropagation();
}
document.addEventListener('click', e => messagesMenu.classList.remove('messages-toggle'));


// input
const searchBar = document.querySelector('.SearchBar-input');
const input = searchBar.querySelector('.input');
const askBtn = document.querySelector('.SearchBar-askButton');
const searchIcon = document.querySelector('.SearchBar-searchIcon');
input.addEventListener('focus', stretchInput);
function stretchInput() {
    searchBar.classList.add('Stretch-input');
    askBtn.classList.add('SearchBar-hiddenAskButton')
    searchIcon.classList.add('SearchBar-focusedSearchIcon');
}
input.addEventListener('blur', initInput);
function initInput() {
    searchBar.classList.remove('Stretch-input');
    askBtn.classList.remove('SearchBar-hiddenAskButton')
    searchIcon.classList.remove('SearchBar-focusedSearchIcon');
}
