// Variables

let input = document.getElementById('task-input');
let addTask = document.querySelector('button');
let taskContainer = document.querySelector('.task-holder');


// Adding Event Listener to the Add button

addTask.addEventListener('click', function () {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    li.classList.add('list-item')
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkBtn.classList.add('check-box');
    task.appendChild(checkBtn);

    let trash = document.createElement('button');
    trash.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    trash.classList.add('trash-can');
    task.appendChild(trash);

    // Adding a validation condition
    if (input.value === '') {
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    // Removing text from the input field when we add the task
    input.value = '';


    // Adding Event Listener to the check button to put a line through when we click on it
    checkBtn.addEventListener('click', function() {
        checkBtn.parentElement.style.textDecoration = 'line-through';
    })

    // Adding Event Listener to the trash button so we can delete the task when we click on it
    trash.addEventListener('click', function() {
        trash.parentElement.remove();
    })

});
