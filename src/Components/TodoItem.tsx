import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { addTaskAction, delTaskAction } from '../Redux/Actions/actions'
import {IitemState} from "../Types/types";

export const TodoItem = (props: IitemState) => {

  const state = props

  const dispatch = useDispatch()

  const delTask = (id: number) => {
    dispatch(delTaskAction(id))
  }

  return(
   <li key={state.id}>{state.value}<button id={state.id.toString()} onClick={() => delTask(state.id)}>Delete</button></li>//сделать массив объектов с айди и кнопку отдельным жлементом сделать
  )
}
