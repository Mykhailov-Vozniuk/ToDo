import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { addTaskAction, delTaskAction } from '../Redux/Actions/actions'
import {IToDoState} from "../Types/types";
import {TodoItem} from './TodoItem';

export const TodoComponent = () => {
  const dispatch = useDispatch()

  const [task, setTask] = useState<string>('')

  const [maxId, setMaxId] = useState<number>(0)

  const taskList = useSelector((state: IToDoState) => state.taskList)

  const addTask = () => {
    dispatch(addTaskAction(maxId, task))
    setMaxId(maxId + 1)
    setTask('')
  }

  return(
    <div className="todo">
      <input name="task" value={task} onChange={({target}) => setTask(target.value)} />
      <button onClick={addTask}>Add</button>
      {<div className="task-container">
            <ul>
              {taskList.map((elem: {id: number, value: string}) => (
                TodoItem({id: elem.id, value: elem.value})
              ))}
          </ul>
      </div>}
    </div>
  )
}
