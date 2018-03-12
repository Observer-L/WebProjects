let myItems = document.getElementsByTagName('li');
let TodoList = document.querySelector('.list-item.incompleted ul');
let ToDoItems = TodoList.getElementsByTagName('li');

// 添加节点
let newTask = document.getElementById('new-task');
document.querySelector('.add button').addEventListener('click', (e) => {
    if (newTask.value == '') {
        alert('please fill the form');
        return;
    }
    let newItem = document.createElement('li');
    newItem.innerText = newTask.value;
    if (ToDoItems[0]) {
        ToDoItems[0].parentNode.insertBefore(newItem, ToDoItems[0]);
    } else {
        TodoList.appendChild(newItem)
    }

    newTask.value = '';
    addBtns();
    closeItem();
    doneItem();
})


// 删除节点
let closeBtns = document.getElementsByClassName('close');

function closeItem() {
    [].forEach.call(closeBtns, btn => btn.addEventListener('click', (e) => {
        btn.parentNode.parentNode.removeChild(btn.parentNode);
    }));
}


// 动态添加按钮
function addBtns() {
    for (let i = 0; i < ToDoItems.length; i++) {
        // 创建li的子节点
        let closeSpan = document.createElement('span');
        let closeTxt = document.createTextNode('×');
        let doneSpan = document.createElement('span');
        let doneTxt = document.createTextNode('√');

        closeSpan.className = 'btn close';
        doneSpan.className = 'btn done';

        closeSpan.appendChild(closeTxt);
        doneSpan.appendChild(doneTxt);
        ToDoItems[i].appendChild(closeSpan);
        ToDoItems[i].appendChild(doneSpan);
    }
}


// 打勾
function doneItem() {
    let doneBtns = document.querySelectorAll('.incompleted .done');
    let doneItems = document.querySelector('.completed');
    [].forEach.call(doneBtns, btn => btn.addEventListener('click', (e) => {
        btn.parentNode.classList.toggle('checked');
        doneItems.appendChild(btn.parentNode);
    }));

}

window.onload = function() {
    addBtns();
    closeItem();
    doneItem();
}