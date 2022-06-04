import {ADD_TASK} from "../constants";

export const addTaskAction = (value: string) => ({
	type: ADD_TASK,
	payload: value,
})