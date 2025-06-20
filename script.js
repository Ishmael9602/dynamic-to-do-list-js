document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
    function addTask() {
        const taskText = taskInput.value.trim();

        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');

       
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        
        taskInput.value = "";
    }

 
    addButton.addEventListener('click', addTask);

   
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
