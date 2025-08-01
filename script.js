// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to add a new task to the list
    function addTask() {
        // Get the task text from the input field and trim whitespace
        const taskText = taskInput.value.trim();
        
        // Check if the task text is not empty
        if (taskText !== "") {
            // Create a new list item for the task
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            
            // Create a remove button for the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            
            // Add click event to remove the task when the button is clicked
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };
            
            // Append the remove button to the list item
            listItem.appendChild(removeButton);
            
            // Append the list item to the task list
            taskList.appendChild(listItem);
            
            // Clear the input field
            taskInput.value = "";
        } else {
            // Alert the user if they try to add an empty task
            alert("Please enter a task!");
        }
    }
    
    // Add click event to the Add Task button
    addButton.addEventListener('click', addTask);
    
    // Add keypress event to the input field to allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
