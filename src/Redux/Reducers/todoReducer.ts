import {ADD_TASK, DEL_TASK} from "../constants";
import {AddTaskType, DelTaskType} from "../../Types/types";

const initialState = {
  taskList: []
}

export const todoReducer = (state: any = initialState, action: AddTaskType) => {
  switch(action.type){
    case ADD_TASK:
      return{
        ...state,
        taskList: [...state.taskList, action.payload]
      }
    case DEL_TASK:
      state.taskList.splice(state.taskList.indexOf(action.payload),1)
      return{
        ...state,
        taskList: state.taskList
      }
    default:
      return state
  }
}
