// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

/**
 * Function to add a new task to the list
 */
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create a new list item for the task
        const li = document.createElement('li');
        
        // Add the task text to the list item
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);
        
        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Add click event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Add the remove button to the list item
        li.appendChild(removeButton);
        
        // Add the complete list item to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }
}

// Add event listener for the Add button
addButton.addEventListener('click', addTask);

// Add event listener for the Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
