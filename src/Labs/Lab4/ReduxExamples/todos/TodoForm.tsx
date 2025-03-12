
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, FormControl, ListGroup } from "react-bootstrap";


// export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
//     todo: { id: string; title: string };
//     setTodo: (todo: { id: string; title: string }) => void;
//     addTodo: (todo: { id: string; title: string }) => void;
//     updateTodo: (todo: { id: string; title: string }) => void;
//   }) {
//     return (
//       <ListGroup.Item className="d-flex align-items-center gap-2">
//                <FormControl value={todo.title}
//                    onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
//                  <Button variant="warning" onClick={() => addTodo(todo)}
//                          id="wd-add-todo-click"> Add </Button>
//                 <Button variant="success" onClick={() => updateTodo(todo)}
//                          id="wd-update-todo-click"> Update </Button>
//                </ListGroup.Item>
//   );}


  export default function TodoForm(
    ) {
      const { todo } = useSelector((state: any) => state.todosReducer);
      const dispatch = useDispatch();
      return (
        <ListGroup.Item className="d-flex align-items-center gap-2">
          <FormControl
            defaultValue={todo.title}
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
          <Button variant="warning" onClick={() => dispatch(addTodo(todo))}
                  id="wd-add-todo-click"> Add </Button>
          <Button variant="success" onClick={() => dispatch(updateTodo(todo))}
                  id="wd-update-todo-click"> Update </Button>
        </ListGroup.Item>
    );}
    