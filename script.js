
const taskInput = document.querySelector('#task_input');
const addTaskBtn = document.querySelector('#add_task');
const plannedList = document.querySelector('#planned-list');


function addTask() {
    const taskText = taskInput.value.trim(); 
    if (taskText === "") {
        alert("Введите название задачи!");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;

    plannedList.appendChild(li);

   
    taskInput.value = "";
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});


