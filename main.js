// Selectors

const inputField = document.getElementById('inputField');
const toDoList = document.getElementById('todolist');
const addThingButton = document.getElementById('addThing');

// Eventlisteners

addThingButton.addEventListener('click', addTodo, validateInput);
toDoList.addEventListener('click', doneTrash);

// Function todo-event

function addTodo(event) {

    // Prevent submitting
    event.preventDefault();

    // Create todo-div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");


    if (inputField.value != "") {
        // Create li and li-item
        const newTodo = document.createElement('li');
        newTodo.innerText = inputField.value;
        newTodo.classList.add('todo-item');
        //newTodo.contentEditable = true;
        todoDiv.appendChild(newTodo);

        // Create moveup button
        const moveUpButton = document.createElement('button');
        moveUpButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
        moveUpButton.classList.add("moveup-button");
        todoDiv.appendChild(moveUpButton);

        // Create movedown button
        const moveDownButton = document.createElement('button');
        moveDownButton.innerHTML = '<i class="fas fa-chevron-down"></i>';
        moveDownButton.classList.add("movedown-button");
        todoDiv.appendChild(moveDownButton);

        // Create checkmark button
        const doneButton = document.createElement('button');
        doneButton.innerHTML = '<i class="far fa-check-circle"></i>';
        doneButton.classList.add("done-button");
        todoDiv.appendChild(doneButton);

        // Create edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        editButton.classList.add("edit-button");
        todoDiv.appendChild(editButton);

        // Create trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        trashButton.classList.add("trash-button");
        todoDiv.appendChild(trashButton);

        // Append ul to todo-div
        toDoList.appendChild(todoDiv);

    } else {}
    // Clear input
    inputField.value = "";



};


// Function for done and trash buttons

function doneTrash(e) {
    const item = e.target;

    // Delete todo-item
    if (item.classList[0] === 'trash-button') {
        const todo = item.parentElement;
        todo.remove();
    }

    // Mark todo-item with done button
    if (item.classList[0] === 'done-button') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    // Edit content
    if (item.classList[0] === 'edit-button') {
        const todo = item.parentElement;
        todo.contentEditable = true;
    }    

};



// Function for "change direction"

document.getElementById("todolist").addEventListener("click", function (event) {
    if (event.target.className === 'moveup-button') {
        move('up', event.target.parentElement)
    } else if (event.target.className === 'movedown-button') {
        move('down', event.target.parentElement)
    } else {
        // nothing
    }
})

function move(direction, elementToMove) {
    let listItems = document.getElementsByClassName("todo")
    let place

    for (let i = 0; i < listItems.length; i++) {

        if (elementToMove === listItems[i]) {
            if (direction === 'up') {
                place = i - 1
            } else {
                place = i + 2
            }
        } else {
            // nothing
        }
    }

    document.getElementById("todolist").insertBefore(elementToMove, listItems[place])
}


// VALIDERING

function validateInput() {

    let text = document.getElementById("text");

    if (inputField.value === "") {
        let validateMessage = document.createElement('text');
        validateMessage.innerHTML = 'No plans for today? Sounds great.';
        validateMessage.classList.add("validate-message");
        text.appendChild(validateMessage);

        console.log('wrong');

    } else {

        console.log('ok');
        if (text) {
            //text.remove();
        }
    }
};


// BUTTON - EDIT FUNCTION

/*document.getElementById("editButton").addEventListener("click", function editContent() {
    newTodo.contentEditable = true;
});*/