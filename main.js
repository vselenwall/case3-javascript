

// selectors 

const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('todolist');
const addThingButton = document.getElementById('addThing');

addThingButton.addEventListener("click", addTodo);
toDoList.addEventListener('click', doneTrash);
//toDoList.addEventListener('dbclick', editItem);

function addTodo(event){
    
    // prevent submit
    event.preventDefault();

    // todo-div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // create li 
    const newTodo = document.createElement('li');
    newTodo.innerText = inputField.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // checkmark button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="far fa-check-circle"></i>';
    doneButton.classList.add("done-button");
    todoDiv.appendChild(doneButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    // append to list
    toDoList.appendChild(todoDiv);

    //clear input value
    inputField.value="";
};

function doneTrash(e){
    const item = e.target;
    
    //delete todo
    if(item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.remove();
    }

    // check mark
    if(item.classList[0] === 'done-button') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


var items = document.querySelectorAll("todolist .todo .todo-item"),
tab = [], liIndex;

    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }

    // get selected li into text field
    
    for(var i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            inputField.value = this.innerHTML;
            
        };
    }
