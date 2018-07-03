import './TaskList.css';

import React from 'react';

import { Table } from 'reactstrap';
import Button from '../Button/Button';

import { tableTitles } from '../../constants';
import { v4 } from 'uuid';

export default (props) => {
    const { toDoList, onRemove, search } = props;

    let result;
    if (!toDoList.length && search) {
        result = <div>Your search returned no results</div>
    } else if (!toDoList.length) {
        result = <div>Your have no tasks</div>
    } else {
        result = <Table borderless className="table">
            <thead>
                <tr className="text-center">
                    {tableTitles.map(title => <th key={v4()} scope="col">{title}</th>)}
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
                                <td>
                                    <Button
                                        handleClick={onRemove(task._id)}
                                        className='btn btn-light'
                                        textContent2='Delete'
                                    />
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </Table >
    }

    return (
        <div className="table-responsive">
            {result}
        </div>
    )
}