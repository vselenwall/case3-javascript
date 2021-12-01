// All selectors

const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('todolist');
const addThingButton = document.getElementById('addThing');

// All eventlisteners

addThingButton.addEventListener('click', addTodo);
toDoList.addEventListener('click', doneTrashMove);

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

    // Create move button
    const moveButton = document.createElement('button');
    moveButton.innerHTML = '<i class="fas fa-arrows-alt-v"></i>';
    trashButton.classList.add("move-button");
    todoDiv.appendChild(moveButton);

    // Append ul to todo-div
    toDoList.appendChild(todoDiv);

    // Clear input
    inputField.value="";
};


// Function for done and trash buttons

function doneTrashMove(e){
    const item = e.target;
    
    // Delete todo-item
    if(item.classList[i] === 'trash-button') {
        const todo = item.parentElement;
        todo.remove();
    }

    // Mark todo-item with done button
    if(item.classList[i] === 'done-button') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    // Move up and down button
    if(item.classList[i] === 'move-button') {
        const todo = item.parentElement;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = todo.textContent;
        li.insertBefore(input, todo);
    }
};



for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
};
    

   
