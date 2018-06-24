import React from 'react';
import { connect } from 'react-redux';
import { removeToDO } from '../../actions'

import './TaskList.css';

function TaskList(props) {
    const { toDoList, onRemove } = props;

    return (
        <div className="card-body">
            <div className="content">
                <table className="table table-bordered">
                    <thead>
                        <tr class="text-center">
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
                                    <tr class="text-center" key={task.id}>
                                        <td>{task.text}</td>
                                        <td>{task.priority}</td>
                                        <td>{task.category}</td>
                                        <td>{task.date}</td>
                                        <td><button
                                            className="btn btn-primary"
                                            onClick={onRemove(task.id)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default connect(
    (state, { search, priority, category, sorted }) =>
        ({
            toDoList: state.filter(({ text }) => text.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                .filter(task => priority.length !== 0 ? priority.includes(task.priority) : true)
                .filter(task => category.length !== 0 ? category.includes(task.category) : true)
                .sort((a, b) => sorted ? (new Date(a.date) - new Date(b.date)) : null)
        }),
    dispatch => ({
        onRemove: id => () => dispatch(removeToDO(id))
    })
)(TaskList);