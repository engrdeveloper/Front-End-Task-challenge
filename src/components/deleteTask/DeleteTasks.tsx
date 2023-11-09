import React, { Fragment, useState } from "react";
import {
  Label,
  Input,
  LabelText,
  TaskContainer,
  Button, Title
} from "./DeleteTasks.styles";
import {
  getAllTasks,
  saveAllTasks,
} from "./../../utils/localStorage";
import { SwitchTo } from "../tasks/Tasks.styles";

interface Task {
  id: number;
  name: string;
}

function DelTasksInBulk() {
  const tasks: Task[] | null = getAllTasks();
  
  const [itemsToRemove, setItemsToRemove] = useState<number[]>([]);

  const addItemInDelList = (id: number) => {
    const newItemsList = [...itemsToRemove, id];
    setItemsToRemove(newItemsList);
  };

  function removeTasks() {
    let oldTasks: Task[] = [...(tasks || [])];
    if (itemsToRemove.length) {
      oldTasks = oldTasks.filter((item) => !itemsToRemove.includes(item.id));
      setItemsToRemove([]);
      saveAllTasks(oldTasks);
    } else {
      alert("Select at least one element to remove from the list");
    }
  }

  return (
    <TaskContainer>
      <Title> Select multiple tasks and delete them.</Title>
      <Title>{tasks.length===0 && "No Task found in your list!"}</Title>
      <Fragment>
        {Array.isArray(tasks) && tasks?.length>0 &&
          tasks.map((task) => (
            <Fragment key={task.id}>
              <Label onClick={() => addItemInDelList(task.id)}>
                <Input value={task.name} />
                <LabelText>{task.name}</LabelText>
              </Label>
            </Fragment>
          ))}
        {Array.isArray(tasks) && tasks?.length>0  ?(
          <Button onClick={removeTasks}>Delete Selected Tasks</Button>
        ): (
          <Button>
          <SwitchTo to="/create-task">Add new Task</SwitchTo>
        </Button>
        ) }
      </Fragment>
    </TaskContainer>
  );
}

export default DelTasksInBulk;
