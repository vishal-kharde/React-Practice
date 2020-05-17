
import React, { Component } from 'react'


class ListTodoComponent extends Component {
    constructor(props) {

        super(props)
        this.state = {
            todos: [{ id: 1, description: "Learn React", done: false, targetdate: new Date() }, { id: 2, description: "Learn Spring Boot", done: false, targetdate: new Date() }],
        }
    }
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>IsDone</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetdate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ListTodoComponent