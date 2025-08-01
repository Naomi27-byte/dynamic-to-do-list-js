// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Assign onclick event to remove the list item
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append button to li, and li to task list
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            // Clear the input
            taskInput.value = '';
        } else {
            alert('Please enter a task.');
        }
    }

    // Add click event to Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event to task input to allow Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
