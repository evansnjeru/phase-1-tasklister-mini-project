document.addEventListener("DOMContentLoaded", () => {
	const submit = document.querySelector('input[type="submit"]');
	submit.addEventListener("click", (e) => {
		// 1. Create list element
		// a. Create task
		const newTask = document.getElementById("new-task-description");
		const tasks = document.getElementById("tasks");
		const li = document.createElement("li");
		const task = document.createTextNode(newTask.value);
		li.appendChild(task);

		// b. Create button for removing tasks
		const button = document.createElement("button");
		button.innerHTML = "X";
		button.addEventListener("click", () => {
			tasks.removeChild(li);
		});
		li.appendChild(button);

		// 2. Add task to list
		tasks.appendChild(li);

		// 3. Disable default behaviour for submit
		e.preventDefault();
	});
});
