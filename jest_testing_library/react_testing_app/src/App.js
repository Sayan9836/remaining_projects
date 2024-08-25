import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const initialState = {
    email: "",
    password: "",
  }
  const [formValues, setFormValues] = useState(initialState);
  const [todos, setTodos] = useState([]);

  const FormHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogIn = async(e) => {

    e.preventDefault();

    const controller = new AbortController();
    const signal = controller.signal;
    try {

      let data = await fetch('https://jsonplaceholder.typicode.com/todos', { signal });
      data = await data.json();
      console.log(data);
      setTodos(data.slice(0, 5));

    } catch (err) {
      if (err.name === 'AbortError') {
        console.log("Fetch request Aborted");
      } else {
        console.error(err);
      }
    }

    setTimeout(() => {
      controller.abort();
    }, 5000)

  }

  return (
    <div className="App">
      <form role='form' onSubmit={handleLogIn}  className='container flex column'>
        <input  type="text" placeholder='Email Address' name='email' value={formValues.email} onChange={FormHandler} />
        <input  type='password' placeholder='Password' value={formValues.password} name='password' onChange={FormHandler} />
        <button data-testid = "login_btn" type='submit'>Log In</button>
      </form>

        <button data-testid = "removeTodo" onClick={() => setTodos([])}>Click Me</button>

      <div data-testid = "todos_wrapper">
        {
          todos?.map((todo) => (
             <p>{todo.completed.toString()}</p>
          ))
        }
      </div>
    </div>
  );
}

export default App;
