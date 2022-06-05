import {ADD_TASK, DEL_TASK} from "../Redux/constants";

export type TYPE_ADD = 'ADD_TASK'
export type TYPE_DEL = 'DEL_TASK'

export interface AddTaskType {
	type: TYPE_ADD,
	payload: String
}

export interface DelTaskType {
	type: TYPE_DEL,
	payload: String
}

export interface IStore {
	toDo: IToDoState;
}

export interface IToDoState {
	taskList: []
}
