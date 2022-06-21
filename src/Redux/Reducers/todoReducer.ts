import {ADD_TASK, DEL_TASK} from "../constants";
import {AddTaskType, DelTaskType, IitemState, IToDoState} from "../../Types/types";

const initialState = {
  taskList: []
}

export const todoReducer = (state: IToDoState = initialState, action: AddTaskType) => {
  switch(action.type){
    case ADD_TASK:
      console.log(action.payload.id)
      return{
        ...state,
        taskList: [...state.taskList, {id: action.payload.id, value: action.payload.value}]
      }
    case DEL_TASK:
      return{
        ...state,
        taskList: state.taskList.filter((e:IitemState) => e.id!= action.payload.id)
      }
    default:
      return state
  }
}