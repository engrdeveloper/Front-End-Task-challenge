import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Tasks from "./components/tasks";
import DelTasksInBulk from "./components/deleteTask";
import CreateTaskForm from "./components/creatTask";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/list-tasks" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTaskForm />} />
        <Route path="/bulk-delete" element={<DelTasksInBulk />} />
      </Routes>
    </Router>
  );
}

export default App;
