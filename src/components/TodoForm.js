import React, { Component } from 'react'

export class TodoForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.addItem(this.props.input)}}>
                    <label>Add a Todo:</label>
                    <input 
                        type="text" 
                        name="input" 
                        value={this.props.input}
                        onChange={this.props.onInputChange}></input>
                    <button>Submit</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Selected</button>
            </div>
        )
    }
}

export default TodoForm
