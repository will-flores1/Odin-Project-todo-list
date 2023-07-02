export interface TodoType {
	_list: TodoItemType[];
	list: () => TodoItemType[];
	add: (todo: TodoItemType) => void;
	remove: (todo: TodoItemType) => void;
}

export interface TodoItemType {
	_title: string;
	_description: string;
	_dueDate: Date;
	_priority: string;
	_notes: string;
	_completed: boolean;
	title: () => string;
	description: () => string;
	dueDate: () => string;
	priority: () => string;
	notes: () => string;
	completed: () => boolean;
}
