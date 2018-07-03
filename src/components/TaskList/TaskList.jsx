import './TaskList.css';

import React from 'react';

import { Table } from 'reactstrap';

export default (props) => {
    const { toDoList, onRemove, search } = props;

    return (
        <div className="table-responsive">
            {toDoList.length ? <Table borderless className="table">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {toDoList
                        .map(task => {
                            return (
                                <tr className="text-center" key={task._id}>
                                    <td>{task.text}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.category}</td>
                                    <td>{task.date}</td>
                                    <td><button
                                        className="btn btn-light"
                                        onClick={onRemove(task._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table> : <h6>Your search returned no results</h6>}
        </div>
    )
}