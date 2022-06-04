import {ADD_TASK} from "../Redux/constants";

export type TYPE_ADD = 'ADD_TASK'

export interface AddTaskType {
	type: TYPE_ADD,
	payload: String
}

export interface IStore {
	toDo: IToDoState;
}

export interface IToDoState {
	taskList: []
}
