export const saveAllTasks = (tasks: any[]): void =>
  localStorage.setItem('allTasks', JSON.stringify(tasks));

export const getAllTasks = (): any[] => {
  const tasksJSON = localStorage.getItem('allTasks');
  return tasksJSON ? JSON.parse(tasksJSON) : [];
};
