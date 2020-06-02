import React, { Component } from 'react'
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export class Todo extends Component {
    debugger
    render() {
        return (
            <div>
                <TodoList 
                    currentTodos={this.props.currentTodos}
                    toggles={this.props.toggles}/>
                <TodoForm 
                    onInputChange={this.props.onInputChange}
                    addItem={this.props.addItem}
                    input={this.props.input}
                    clearCompleted={this.props.clearCompleted}/>
            </div>
        )
    }
}

export default Todo
