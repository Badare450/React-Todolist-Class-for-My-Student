import react from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({Todo}) =>
{
    return(
        <div>
              {Todo.map(todo => <TodoListItem Todo={todo}/>)}
        </div>
    );
}

export default TodoList;