const $ulElement = document.querySelector('ul');

$ulElement.addEventListener("click",(e)=>{
    const $target = e.target;
    if($target.classList.contains('close')){
        const $parentTarget = $target.parentElement;
        $parentTarget.style.display = "none";
        console.dir($parentTarget)
        const deleteItem = $parentTarget.childNodes[1].innerText;
        deleteTodoList('todoList', deleteItem);
    }
    $target.classList.toggle('checked');
})

function newElement() {
    const inputValue = document.getElementById("myInput") .value;
    const $liElement = `
        <li>
            <span>${inputValue}</span>
            <span class="close">&#215;</span>
            <span><button id="modalbtn">메모</button></span>
        </li>
    `

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
        addTodoList('todoList', inputValue)
    }
    document.getElementById("myInput").value = "";
}

const modal = document.getElementById("mymodal");
const openmodal = document.getElementById("modalbtn");
const closemodal = document.getElementsByClassName("close");

openmodal.onclick = function() {
    modal.style.display = "block";
}
  
closemodal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function init() {
    let todoList = getTodoList('todoList');
    for(let i=0; i<todoList.length; i++){
        $liElement = `
            <li>
                ${todoList[i]}
                <span class="close">&#215;</span>
                <span><button id="modalbtn">메모</button></span>
            </li>
        `
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
    }
}

function getTodoList(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key).split(',') : [];
}

function addTodoList(key, value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,[...todoList, value])
}

function deleteTodoList(key,value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,todoList.filter(todo => todo !== value))
}

init()
