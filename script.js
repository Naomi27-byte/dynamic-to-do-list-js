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

        // --- Task Creation and Removal (The part you need to complete) ---
        // 1. Create a new li element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // 2. Create a new button for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // 3. Assign an onclick event to the remove button
        removeButton.onclick = function() {
            // Remove the parent li element from the list
            taskList.removeChild(listItem);
        };

        // 4. Append the remove button to the li element
        listItem.appendChild(removeButton);

        // 5. Append the li to the taskList
        taskList.appendChild(listItem);

        // 6. Clear the task input field
        taskInput.value = '';
    };

    // --- Attach Event Listeners (The part you need to complete) ---
    // 1. Add an event listener to addButton that calls addTask
    addButton.addEventListener('click', addTask);

    // 2. Add an event listener for the 'keypress' event on taskInput
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Note: The instruction to "Invoke the addTask function on DOMContentLoaded"
    // is typically for loading existing tasks on page load, not for adding a new one.
    // The event listeners handle adding new tasks as the user interacts with the page.
});
