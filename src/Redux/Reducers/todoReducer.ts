import {ADD_TASK, DEL_TASK} from "../constants";
import {AddTaskType, DelTaskType, IitemState} from "../../Types/types";

const initialState = {
  taskList: []
}

let maxId = 0

export const todoReducer = (state: any = initialState, action: AddTaskType) => {
  switch(action.type){
    case ADD_TASK:
      return{
        ...state,
        taskList: [...state.taskList, {id: maxId++, value: action.payload}]
      }
    case DEL_TASK:
      return{
        ...state,
        taskList: state.taskList.filter((e:IitemState) => e.id!= action.payload)
      }
    default:
      return state
  }
}