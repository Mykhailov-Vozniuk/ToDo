import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addTaskAction } from '../Redux/Actions/actions'
import {IToDoState} from "../Types/types";

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
              {taskList.map((elem: string, key: number) => (
                <li key={key}>{elem}</li>
              ))}
          </ul>
      </div>}
    </div>
  )
}
