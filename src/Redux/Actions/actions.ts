import {ADD_TASK, DEL_TASK} from "../constants";//сделать тип для экшенов и потом его экстендить

export const addTaskAction = (id:number, value: string) => ({
	type: ADD_TASK,
	payload: {id, value}
})

export const delTaskAction = (id: number) => ({
	type: DEL_TASK,
	payload: {id}
})