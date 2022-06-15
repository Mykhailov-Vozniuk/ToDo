import {ADD_TASK, DEL_TASK} from "../Redux/constants";

export type TYPE_ADD = 'ADD_TASK'
export type TYPE_DEL = 'DEL_TASK'

export interface AddTaskType {
	type: TYPE_ADD,
	payload: string
}

export interface DelTaskType {
	type: TYPE_DEL,
	payload: string
}

export interface IStore {
	toDo: IToDoState
}

export interface IToDoState {
	taskList: {id: string, value: string} []
}

export interface IitemState {
	id: string
}