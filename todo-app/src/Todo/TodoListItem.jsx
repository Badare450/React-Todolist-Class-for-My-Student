import './TodoListItem.css';
import Button from '../components/Button.jsx'
const TodoListItem = ({Todo}) =>
{
    return(
        <div className='Todo-wrapper'>
              <h1>{Todo.id}</h1>  
              <img src = {Todo.img} />
              <div>
                  <Button text = "Add" color="red" /> 
              </div>          
                     
             
        </div>
    );
}

export default TodoListItem;