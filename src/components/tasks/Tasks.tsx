import React from "react";
import { TaskContainer,Button,Title,SwitchTo } from "./Tasks.styles";
import { getAllTasks } from "../../utils/localStorage";

interface Task {
  id: number;
  name: string;
}

const Tasks: React.FC = () => {
  const tasks: Task[] = getAllTasks();


  return (
    <TaskContainer>
      <Title>Task List</Title>
      <ol>
        {Array.isArray(tasks) && tasks?.length>0 &&
          tasks?.map((task) => (
            <li key={task.id}>
              {task.name}
            </li>
          ))}
      </ol>
      <Button>
        <SwitchTo to="/create-task">Add new Task</SwitchTo>
      </Button>
    </TaskContainer>
  );
};

export default Tasks;
