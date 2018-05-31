const tags = document.querySelectorAll('.flash span');
const tagsLen = tags.length;
let i = 0;
let counter = 1;

function toggleTags() {
    tags.forEach(tag => tag.style.zIndex = 0);
    setInterval(() => {
        i >= tagsLen - 1 ? i = 0 : i++;
        tags[i].style.zIndex = counter;
        counter++;
    }, 1000);
}


toggleTags();


// Q
// 再flashText中如果设置tags[i].style.zIndex += 1
// 则z-index是在当前样式值得后面+1,而且是字符串形式（由于行内样式得原因？？）
// 因此在外部设置一个计数器然后重新赋值给z-index即可
