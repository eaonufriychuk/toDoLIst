import './TaskList.css';

import React from 'react';

import { Table } from 'reactstrap';

export default (props) => {
    const { toDoList, onRemove } = props;

    return (
        <div className="table-responsive">
            <Table borderless className="table">
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
                                <tr className="text-center" key={task.id}>
                                    <td>{task.text}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.category}</td>
                                    <td>{task.date}</td>
                                    <td><button
                                        className="btn btn-light"
                                        onClick={onRemove(task.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </div>
    )
}