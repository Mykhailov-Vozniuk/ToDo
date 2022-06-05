import {ADD_TASK, DEL_TASK} from "../constants";

export const addTaskAction = (value: string) => ({
	type: ADD_TASK,
	payload: value,
})

export const delTaskAction = (value: string) => ({
	type: DEL_TASK,
	payload: value,
})