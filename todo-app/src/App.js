import React,{useState} from 'react';
import TodoList from './Todo/TodoList';

const App = ()=> {
  const[product,settProduct] = useState([]);
  return (
    <div>
        <TodoList />
    </div>

  );
}

export default App;
