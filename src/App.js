import React, {Component} from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TodoItem from './components/TodoItem';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:uuid.v4(),
        title:'take out the trash',
        Completed: true
      },
      {
        id:uuid.v4(),
        title:'walk the dog',
        Completed: false
      },
      {
        id:uuid.v4(),
        title:'tea time with Tee',
        Completed: true
      },
      {
        id:uuid.v4(),
        title:'make dinner',
        Completed: false
      },
    ]
  }
  toggleComplete = (id)=> {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id ===id){
          todo.Completed = !todo.completed
        }
        return todo;
      })
    })
  }
  delButton = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo= (title) => {
    const newTask = {
      id: uuid.v4(),
      title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos, newTask]});
  }

  render() {
    
    return(
      <div>
        <div className="Container">
        <Header/>
        <AddTask addTodo={this.addTodo}/>
        <
          TodoItem todos={this.state.todos} 
          toggleComplete={this.toggleComplete}
          delButton={this.delButton}
        />
        </div>
      </div>
    );
  }
}

export default App;
