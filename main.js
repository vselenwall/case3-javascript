// All selectors

const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('todolist');
const addThingButton = document.getElementById('addThing');

// All eventlisteners

addThingButton.addEventListener("click", addTodo);
toDoList.addEventListener('click', doneTrash);

// Function todo-event

function addTodo(event){
    
    // Prevent submitting
    event.preventDefault();

    // Create todo-div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create li and li-item
    const newTodo = document.createElement('li');
    newTodo.innerText = inputField.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Create checkmark button
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="far fa-check-circle"></i>';
    doneButton.classList.add("done-button");
    todoDiv.appendChild(doneButton);

    // Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    // Append ul to todo-div
    toDoList.appendChild(todoDiv);

    // Clear input
    inputField.value="";
};


// Function for done and trash buttons

function doneTrash(e){
    const item = e.target;
    
    // Delete todo-item
    if(item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.remove();
    }

    // Mark todo-item with done button
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
