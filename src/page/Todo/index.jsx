import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo, addTodo } from "../../store/action";

const Todo = () => {
  const todos = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  console.log(todos);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(input));
  }

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
        required
          onChange={(e) => setInput(e.target.value)}
          placeholder="NewTask"
          type="text"
        />
        <button type="submit">add</button>
      </form>
      <ol>
       {todos.map((todo)=>(
        <li> <span style={{textDecoration:`${todo.completed ? "line-through" : "none"}`}} onClick={()=>dispatch(toggleTodo(todo.id))} >{todo.value}</span> <button onClick={()=>dispatch(deleteTodo(todo.id))}>delete</button></li>
       ))}
      </ol>
    </div>
  );
};

export default Todo;
