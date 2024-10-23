document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = ""; // Clear the input
}
