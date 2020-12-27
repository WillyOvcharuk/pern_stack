import  React, { Fragment } from 'react'
import ListTodos from './components/ListTodos'


//components
import InputTodo from './components/InputTodos'
function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
