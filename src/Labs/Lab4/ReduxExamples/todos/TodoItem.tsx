
import { Button, ListGroup } from "react-bootstrap";

// export default function TodoItem({ todo, deleteTodo, setTodo }: {
//     todo: { id: string; title: string };
//     deleteTodo: (id: string) => void;
//     setTodo: (todo: { id: string; title: string }) => void;
//   }) {
//     return (
//       // <ListGroup.Item key={todo.id}>
//       //   <Button onClick={() => deleteTodo(todo.id)}
//       //           id="wd-delete-todo-click"> Delete </Button>
//       //   <Button onClick={() => setTodo(todo)}
//       //           id="wd-set-todo-click"> Edit </Button>
//       //   {todo.title}    </ListGroup.Item>
//       <ListGroup.Item className="d-flex justify-content-between align-items-center" key={todo.id }>
//             {todo.title}
//             <div className="d-flex gap-2">
//             <Button onClick={() => setTodo(todo)}
//                     id="wd-set-todo-click"> Edit </Button>
//             <Button variant="danger" onClick={() => deleteTodo(todo.id)}
//                     id="wd-delete-todo-click"> Delete </Button>
//                     </div>
//           </ListGroup.Item>
//         );}


import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem({ todo }: {
    todo: { id: string; title: string };
  }) {
    const dispatch = useDispatch();
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center" key={todo.id}>
            {todo.title}
      <div className="d-flex gap-2">
      <Button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </Button>
      <Button variant="danger" onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </Button>
              </div>
    </ListGroup.Item>
);}

