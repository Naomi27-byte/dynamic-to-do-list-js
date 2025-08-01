// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item and set its textContent
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add event to remove task
        removeBtn.addEventListener('click', () => {
            listItem.remove();
        });

        // Append remove button to list item, then list item to list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear input
        taskInput.value = '';
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
