import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos-data")
    if(todoString) {
      let prevTodos = JSON.parse(todoString)
      setTodos(prevTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos-data", JSON.stringify(todos))
  }, [todos])
  
  const handleEdit = (id) => {
    const currentTodo = todos.filter(item => item.id == id)[0];
    setTodo(currentTodo.todo)
    handleDelete(id);

  }
  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id != id);
    setTodos(newTodos);
  }
  const handleAdd = () => {
    if(todo == "") return;
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false}]);
    setTodo("");
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => { 
      const id = e.target.name;
      const index = todos.findIndex(item => item.id === id);
      let newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
  }

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  }

  const handleKeyPress = (e) => {

    if(e.key =='Enter' && todo.length>=3) {
      handleAdd();
    }
  }
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-full lg:w-1/2 my-5 p-5 bg-custom-body-color rounded-xl min-h-[80vh] shadow-2xl">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold my-2">Add a Todo</h2>
          <div className="flex">
          <input onChange={handleChange}  onKeyDown={handleKeyPress}  value={todo} type="text" className="w-full rounded-md px-2 py-1" placeholder="Enter your task..."/>
          <button onClick={handleAdd} disabled={todo.length<3} className="bg-custom-btn-light hover:bg-custom-nav-color p-2 py-1 text-white mx-3 rounded-md text-sm font-bold disabled:cursor-not-allowed">Save</button>
          </div>
        </div>
        <div className="todo">
          <div className="flex gap-2 my-3">
            <input type="checkbox" onChange={toggleShowCompleted} name="" id="" checked={showCompleted}/>
            <label htmlFor="">Show Completed</label>
          </div>
          <div className="h-[1px] opacity-40 bg-black w-2/3 m-auto"></div>
          <h2 className="text-lg font-bold underline">Your todo's</h2>
          <div  className="mx-6 my-2">
            {todos.length === 0 && <p><i>No todos to display!</i></p>}
            {todos.map(item => (
              ((showCompleted || !item.isCompleted) && <div key={item.id} className="todos flex w-full my-3 justify-between">
                <div className="single-task flex gap-5">
                  <input type="checkbox" onChange={handleCheckbox}  name={item.id} id="" checked={item.isCompleted? 'checked' : ''}/>
                  <div className={`${item.isCompleted ? "line-through" : ""}`} >
                    {item.todo}           
                  </div>
                </div>
                <div className="buttons flex h-full items-center">
                  <button onClick={() => handleEdit(item.id)} className="bg-custom-btn-light hover:bg-custom-nav-color p-2 py-1 text-white mx-1 rounded-md text-sm font-bold"><FaEdit  size={15} /></button>
                  <button onClick={() => handleDelete(item.id)} className="bg-custom-btn-light hover:bg-custom-nav-color p-2 py-1 text-white mx-1 rounded-md text-sm font-bold"><MdDelete size={15} /></button>
                </div>
              </div>)
            ))}
          </div>
        </div>
      </div>  
    </>
  );
}

export default App;
