import React from 'react';
import Todo from "./components/Todo";

let Todos = [
  {
    id: Date.now(),
    title: "fist inital todo",
    isComplete: false
  },
]

class App extends React.Component {

  constructor () {
     super();
     this.state = {
       input: "",
       currentTodos: Todos,
     }
  }

  onInputChange = event => {
    this.setState({input: event.target.value})
  }

  addItem = (item) => {
    let newItem = {
      id: Date.now(),
      title: item,
      isComplete: false
    };
    this.setState({
      currentTodos: [...this.state.currentTodos, newItem]
    })
    this.setState({
      input: ""
    })
  }

  toggles = itemId => {
    this.setState({
      currentTodos: this.state.currentTodos.map( item => {
        console.log(item)
        if (item.id === itemId) {
          return {
            ...item,
            isComplete: !item.isComplete
          } 
        }
        else {
          return item;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      currentTodos: this.state.currentTodos.filter( item => item.isComplete === false)
    })
  }

  render() {
    return (
      <div>
        <Todo
          input={this.state.input}
          currentTodos={this.state.currentTodos}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
          toggles={this.toggles}
          clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
