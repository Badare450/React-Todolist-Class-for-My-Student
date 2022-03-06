import react from 'react';
import TodoListItem from './TodoListItem.jsx';
const todo = [{
 id :1,
 img:"hhh"
},{
    id :2,
    img:"hhh"
   }];
const TodoList = ({Todo}) =>
{
    return(
        <div>
              {todo.map(todo => <TodoListItem Todo={todo}/>)}
        </div>
    );
}

export default TodoList;