import { useState, useReducer } from "react";
import Todo from "./components/todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id != action.payload.id);
    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
    e.preventDefault();
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
