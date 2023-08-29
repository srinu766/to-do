import { useState } from "react";
import TodoList from "./components/TodoList";


function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e)=>{
    setTask(e.target.value);
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
    // if(!task){
    //   alert("please enter To-Do items...");
    // }
  }
  const deleteHandler = (indexValue)=>{
    const newTodos = todos.filter((todo, index)=> index !== indexValue)
    setTodos(newTodos);
  }


  return (
    <div className="">
    <div className="">
    <center>
  <h2 className="mt-16  font-bold text-3xl">TO-DO application</h2>
  <form onSubmit={submitHandler}>
    <input className="border border-slate-950 py-1 pl-2" placeholder="Enter To-Do List..." type="text" name="task" value={task} onChange={changeHandler}/>&nbsp;&nbsp;
    <input className="mt-10 bg-green-700 text-white rounded-md p-1 font-semibold" type="submit" value="ADD"/>
  </form>
  <TodoList 
  todoList={todos}
  deleteHandler={deleteHandler}
   />
  </center>
    </div>
    </div>
  );
}

export default App;
