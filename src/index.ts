import "./styles/main.scss";
import Todos from "./objects/Todos";
import TodoItem from "./objects/TodoItem";

const todos = new Todos();
const item1 = new TodoItem("Title", "Description", new Date(), "Low", "Notes");
const item2 = new TodoItem(
	"Title",
	"Description",
	new Date(),
	"Medium",
	"Notes"
);
const item3 = new TodoItem("Title", "Description", new Date(), "High", "Notes");

todos.add(item1);
todos.add(item2);
todos.add(item3);

const todoContainer = document.querySelector("#todo-list") as HTMLUListElement;
const todoList = document.createElement("ul");
todoContainer.appendChild(todoList);

function renderList() {
	todoList.innerHTML = "";
	todos.list().forEach((todo) => {
		const li = document.createElement("li");
		li.classList.add("todo-item");
		const h2 = document.createElement("h2");
		h2.textContent = todo.title();
		li.appendChild(h2);
		const pLabel = document.createElement("p");
		pLabel.classList.add("label");
		pLabel.textContent = "Description:";
		li.appendChild(pLabel);
		const p = document.createElement("p");
		p.textContent = todo.description();
		li.appendChild(p);
		const p1Label = document.createElement("p");
		p1Label.classList.add("label");
		p1Label.textContent = "Due Date:";
		li.appendChild(p1Label);
		const p2 = document.createElement("p");
		p2.textContent = todo.dueDate();
		li.appendChild(p2);
		const p2Label = document.createElement("p");
		p2Label.classList.add("label");
		p2Label.textContent = "Priority:";
		li.appendChild(p2Label);
		const p3 = document.createElement("p");
		p3.textContent = todo.priority().toString();
		li.appendChild(p3);
		const p3Label = document.createElement("p");
		p3Label.classList.add("label");
		p3Label.textContent = "Notes:";
		li.appendChild(p3Label);
		const p4 = document.createElement("p");
		p4.textContent = todo.notes();
		li.appendChild(p4);
		// delete button
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("delete-btn");
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", () => {
			todos.remove(todo);
			renderList();
		});
		li.appendChild(deleteBtn);

		todoList.appendChild(li);
	});
}
renderList();

const title = document.querySelector("#title") as HTMLInputElement;
const description = document.querySelector("#description") as HTMLInputElement;
const dueDate = document.querySelector("#due-date") as HTMLInputElement;
const priority = document.querySelector("#priority") as HTMLSelectElement;
const notes = document.querySelector("#notes") as HTMLTextAreaElement;
const addTodoBtn = document.querySelector("#add-todo") as HTMLButtonElement;

const elArr = [title, description, dueDate, priority, notes];

function initEventListeners(
	element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
) {
	if (element.tagName === "INPUT") {
		element.addEventListener("input", (e): void => {
			const target = e.target as HTMLInputElement;
			checkIfEmpty();
		});
	} else if (element.tagName === "SELECT") {
		element.addEventListener("change", (e): void => {
			const target = e.target as HTMLSelectElement;
			checkIfEmpty();
		});
	}
}

function checkIfEmpty(): void {
	if (!title.value || !description.value || !dueDate.value || !notes.value) {
		addTodoBtn.disabled = true;
	} else {
		addTodoBtn.disabled = false;
	}
}

elArr.forEach((el) => {
	initEventListeners(el);
});

function resetForm(): void {
	title.value = "";
	description.value = "";
	dueDate.value = "";
	priority.value = "Low";
	notes.value = "";
}

addTodoBtn.addEventListener("click", () => {
	const todo = new TodoItem(
		title.value,
		description.value,
		dueDate.valueAsDate,
		priority.value,
		notes.value
	);
	todos.add(todo);
	renderList();
	resetForm();
});
