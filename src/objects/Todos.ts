import { TodoItemType, TodoType } from "../../types";

class Todos implements TodoType {
	_list: TodoItemType[];

	constructor() {
		this._list = [];
	}

	// Methods
	list() {
		return this._list;
	}

	add(todo: TodoItemType) {
		this._list.push(todo);
	}

	remove(todo: TodoItemType) {
		this._list = this._list.filter((t) => t !== todo);
	}
}

export default Todos;
