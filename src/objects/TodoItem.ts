import { TodoItemType } from "../../types";

class TodoItem implements TodoItemType {
	_title: string;
	_description: string;
	_dueDate: Date;
	_priority: string;
	_notes: string;
	_completed: boolean;

	constructor(
		title: string,
		description: string,
		dueDate: Date,
		priority: string,
		notes: string
	) {
		this._title = title;
		this._description = description;
		this._dueDate = dueDate;
		this._priority = priority;
		this._notes = notes;
		this._completed = false;
	}

	// Methods
	title() {
		return this._title;
	}
	description() {
		return this._description;
	}
	dueDate() {
		return this._dueDate.toLocaleDateString();
	}
	priority() {
		return this._priority;
	}
	notes() {
		return this._notes;
	}
	completed() {
		return this._completed;
	}
}

export default TodoItem;
