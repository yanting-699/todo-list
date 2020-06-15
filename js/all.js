// 設定DOM
var sendData = document.querySelector('.addlistbtn');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('listData')) || [];

sendData.addEventListener('click',addData);
list.addEventListener('click',toggleDone);
updateList(data);

function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.listToDo').value;
    var listData = {
        content: txt
    }
    data.push(listData);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}

function updateList(items) {
    str='';
    var len = items.length;
    for(i=0; len>i;i++) {
        str+= '<li><span>' +items[i].content+ '</span><a href="#" data-index[' +i+ ']>X</a></li>';
    }
    list.innerHTML= str;
}


function toggleDone(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return}
    var index= e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updateList(data);

}


