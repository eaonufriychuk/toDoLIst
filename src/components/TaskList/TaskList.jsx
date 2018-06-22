import React from 'react';
import './TaskList.css';

export default (props) => {
    const {toDoList} = props;
    return (
        <div className="card-body">
            <div className="content">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {toDoList.map(task => {
                        return (
                            <tr>
                                <td>{task.text}</td>
                                <td>{task.priority}</td>
                                <td>{task.category}</td>
                                <td>{task.date}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}