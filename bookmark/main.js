// 监听submit事件
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// 保存书签
function saveBookmark(e) {
    // 获取表单值
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;

    // 验证表单
    if (!validateForm(siteName, siteURL)) {
        return false;
    }

    // 书签对象
    var bookmark = {
        name: siteName,
        url: siteURL
    }

    // 储存数据
    if (localStorage.getItem('bookmarks') === null) {
        // 初始化
        var bookmarks = [];
        // 添加书签对象
        bookmarks.push(bookmark);
        // 本地存储
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {
        // 从本地存储获取书签解析为JS数组
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    // 重设表单
    document.getElementById('myForm').reset();

    // 显示最新结果
    showResults();

    // 阻止表单submit
    e.preventDefault();
}

// 删除书签
function deleteBookmark(url) {
    // 从本地存储获取书签
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // 查找目标书签
    for (i in bookmarks) {
        if (bookmarks[i].url == url) {
            // 从数组中移除目标书签
            bookmarks.splice(i, 1);
        }
    }
    // 重新存储书签
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // 显示最新结果
    showResults();
}

// 验证表单
function validateForm(siteName, siteURL) {
    // 表单非空验证
    if (!siteName || !siteURL) {
        alert('Please fill in the form');
        return false;
    }
    // 链接验证
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (!siteURL.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}


// 从Web获取JSON数据,转为JS数组
function showResults() {
    if (localStorage.getItem('bookmarks') === null) return;
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));


    var results = document.getElementById('results')
    results.innerHTML = '';

    // 输出书签
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        results.innerHTML += `
					        <div class="bookmark">
					        <h2>${name}</h2>
					        <a href="${url}" target="_blank" class="btn btn-normal">View</a>
					        <a href="#" onclick="deleteBookmark('${url}')" class="btn btn-danger">Delete</a>
					        </div>
					        `
    }
}


// 页面加载或刷新后显示书签(若有)
window.onload = function() {
    showResults();
};