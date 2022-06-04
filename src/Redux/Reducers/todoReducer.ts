import {ADD_TASK} from "../constants";
import {AddTaskType } from "../../Types/types";

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
    default:
      return state
  }
}
