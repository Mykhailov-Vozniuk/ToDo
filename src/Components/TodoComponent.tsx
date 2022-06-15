import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { addTaskAction, delTaskAction } from '../Redux/Actions/actions'
import {IToDoState} from "../Types/types";
import {TodoItem} from './TodoItem';

export const TodoComponent = () => {
  const dispatch = useDispatch()

  const [task, setTask] = useState<string>('')

  const taskList = useSelector((state: IToDoState) => state.taskList)

  const addTask = () => {
    dispatch(addTaskAction(task))
    setTask('')
  }

  return(
    <div className="todo">
      <input name="task" value={task} onChange={({target}) => setTask(target.value)} />
      <button onClick={addTask}>Add</button>
      {<div className="task-container">
            <ul>
              {taskList.map((elem: {id: string, value: string}) => (
                <li key={elem.id}>{elem.value}{TodoItem({id: elem.id})}</li>//сделать массив объектов с айди и кнопку отдельным жлементом сделать
              ))}
          </ul>
      </div>}
    </div>
  )
}
