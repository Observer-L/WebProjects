const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

// 监听可抓取对象
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// 监听可放置对象
empties.forEach(empty => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
})


function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.add('hide'), 0)
};

function dragEnd() {
    this.className = 'fill';
};

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}

// setTimeout设置为0的意义
// https://www.zhihu.com/question/55050034