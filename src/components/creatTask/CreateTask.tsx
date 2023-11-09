import React, { useState } from 'react';
import { saveAllTasks, getAllTasks } from '../../utils/localStorage';
import { TaskFormContainer, Input, Form,Button,Title } from './CreateTask.styles';


const CreateTaskForm: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');

  // Handle Change in Input to create New Task
  const handelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setNewTask(target.value);
  };

  // Handle Add Task
  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    const oldTasks=getAllTasks()
    const olTaskArray=Array.isArray(oldTasks) && oldTasks?.length>0 ?oldTasks:[]
    const updatedTasks = [...olTaskArray, { id: Math.random(), name: newTask }];
    setNewTask('');
    saveAllTasks(updatedTasks);
    alert('New Task Added Successfully!');
  };

  

  return (
    <TaskFormContainer>
      <Title>Create your new Task</Title>
      <Form onSubmit={handleAddTask}>
        <Input
          placeholder="I will do...."
          type="text"
          value={newTask}
          onChange={handelInputChange}
          required
        />
        <Button type="submit">Create Task</Button>
      </Form>
    </TaskFormContainer>
  );
};

export default CreateTaskForm;
