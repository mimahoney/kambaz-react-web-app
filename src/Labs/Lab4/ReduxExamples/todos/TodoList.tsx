//import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
);}




// import React, { useState } from "react";
// import { ListGroup } from "react-bootstrap";
// import TodoForm from "./TodoForm";
// import TodoItem from "./TodoItem";

// export default function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node"  }]);
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
//   const addTodo = (todo: any) => {
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   const deleteTodo = (id: string) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
//   const updateTodo = (todo: any) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ListGroup className="mb-3">
//       <TodoForm
//           todo={todo}
//           setTodo={setTodo}
//           addTodo={addTodo}
//           updateTodo={updateTodo}/>
//         {todos.map((todo) => (
//           <TodoItem
//             todo={todo}
//             deleteTodo={deleteTodo}
//             setTodo={setTodo} />
//         ))}

//       </ListGroup><hr/>
// </div>);}










// import React, { useState } from "react";
// import { Button, FormControl, ListGroup } from "react-bootstrap";

// export default function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node"  }]);
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
//   const addTodo = (todo: any) => {
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   const deleteTodo = (id: string) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
//   const updateTodo = (todo: any) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ListGroup className="mb-3">
//         <ListGroup.Item className="d-flex align-items-center gap-2">
//         <FormControl value={todo.title}
//             onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
//           <Button variant="warning" onClick={() => addTodo(todo)}
//                   id="wd-add-todo-click"> Add </Button>
//           <Button variant="success" onClick={() => updateTodo(todo)}
//                   id="wd-update-todo-click"> Update </Button>
//         </ListGroup.Item>
//         {todos.map((todo) => (
//           <ListGroup.Item className="d-flex justify-content-between align-items-center" key={todo.id }>
//             {todo.title}
//             <div className="d-flex gap-2">
//             <Button onClick={() => setTodo(todo)}
//                     id="wd-set-todo-click"> Edit </Button>
//             <Button variant="danger" onClick={() => deleteTodo(todo.id)}
//                     id="wd-delete-todo-click"> Delete </Button>
//                     </div>
//           </ListGroup.Item>
//         ))}
//       </ListGroup><hr/>
// </div>);}