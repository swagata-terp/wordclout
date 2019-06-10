import React, {Component} from 'react';
import Todos from './components/Todos';



class App extends Component { 
  state = { 
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ] 
  }
  render() {
    return (
      <div className="App">
      <h1>App</h1>
       <Todos />
      </div>
    );
  }
}

export default App;
