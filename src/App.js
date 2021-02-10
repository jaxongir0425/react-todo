import { useState } from "react";
import Header from './component/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";

const App = () => {

  const [ showAddTask, setShowAddTask ] = useState(false)

  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "Doctor Appointment",
        "day": "Feb 5th at 2:30pm",
        reminder: true
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        reminder: true
    },
    {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 2:30pm",
        reminder: true
    }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };

    setTasks([ ...tasks, newTask ])
    console.log("AddTask: ",task);
  }

  // Delete metodi
  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id)
    )
    console.log("Delete", id);
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => 
        task.id === id ? 
        { ...task, reminder: !task.reminder }
        :
        task
    ))
    console.log("Toggle", id);
  }

  return (
  <Router>
    <div className="container">
      
      <Header 
        onAdd = {() => setShowAddTask(!showAddTask)} 
        showAdd = {showAddTask}
      />

      <Route path="/" 
      exact render = {(props) => (
        <>
          {
            showAddTask && <AddTask onAdd = {addTask} /> 
          }
          {
            tasks.length>0 ? ( 
            <Tasks 
            tasks = { tasks } 
            onDelete = { deleteTask }
            onToggle = { toggleReminder }
            />
            ) : ( 
            <h2 
            style={{color: "red", text: "center"}}
            >
              No tasks to Shows!!!
            </h2>
            )
          }
        </>
      )}
      />

      <Route path="/about" component={About}/>

      <Footer />
    </div>
  </Router>
  );
}

export default App;
