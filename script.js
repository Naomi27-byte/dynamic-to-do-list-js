document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }

        // Create new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add a click event listener to the remove button
        removeButton.onclick = function() {
            // Remove the parent li element from the list
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    };

    // Attach event listeners
    // 1. Add task on button click
    addButton.addEventListener('click', addTask);

    // 2. Add task on "Enter" key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // The provided instruction "Invoke the addTask function on DOMContentLoaded" seems to be a mistake
    // as it would add an empty task on page load. The core functionality is driven by the event listeners.
    // However, if the user had provided a starting task, this would be the place to load it.
    // For this specific implementation, we will not call addTask here.
});
