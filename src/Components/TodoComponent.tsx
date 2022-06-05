import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { addTaskAction, delTaskAction } from '../Redux/Actions/actions'
import {IToDoState} from "../Types/types";

export const TodoComponent = () => {
  const dispatch = useDispatch()

  const [task, setTask] = useState<string>('')

  const taskList = useSelector((state: IToDoState) => state.taskList)

  const addTask = () => {
    dispatch(addTaskAction(task))
    setTask('')
  }

  const delTask = (elem: string) => {
    dispatch(delTaskAction(elem))
  }

  return(
    <div className="todo">
      <input name="task" value={task} onChange={({target}) => setTask(target.value)} />
      <button onClick={addTask}>Add</button>
      {<div className="task-container">
            <ul>
              {taskList.map((elem: string, key: number) => (
                <li key={key}>{elem}<button onClick={() => delTask(elem)}>Delete</button></li>
              ))}
          </ul>
      </div>}
    </div>
  )
}
