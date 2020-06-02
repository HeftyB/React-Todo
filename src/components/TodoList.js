// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// import React, { Component } from 'react'

// export default class TodoList extends Component {

//     todo = this.props.currentTodos.map( (item) => {
//         console.log(item)
//         return (
//             <div key={item.id}>
//                 <h4>{item.title}</h4>
//                 <p>Id: {item.id}</p>
//             </div>
//         )
//     })
//     render() {
//         return (
//             <div>
//                 {this.todo}
//             </div>
//         )
//     }
// }
import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

export default function TodoList(props) {
    const {currentTodos, toggles} = props;

    let todos = currentTodos.map( (item) => {
                console.log(item)
                return (
                    <div key={item.id} onClick={() => toggles(item.id)} 
                    className={`item${item.isComplete ? " complete" : ""}`}>
                        {/* <Col sm="6"> */}
                            <Card body>
                                <CardTitle><h4>{item.title}</h4></CardTitle>
                                <CardText>Id: {item.id}</CardText>
                            </Card>
                        {/* </Col> */}
                    </div>
                )
            })
    return (
        <div>
            <h1>Current Todos:</h1>
            <hr/>
            {todos}            
        </div>
    )
}

