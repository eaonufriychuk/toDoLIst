import React from 'react';
import './TaskList.css';
import { connect } from 'react-redux';
import { removeToDO } from '../../actions'

function TaskList(props) {
    const { toDoList, onRemove } = props;
    console.log(props);

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
                        {toDoList
                            .map(task => {
                                return (
                                    <tr key={task.id}>
                                        <td>{task.text}</td>
                                        <td>{task.priority}</td>
                                        <td>{task.category}</td>
                                        <td>{task.date}</td>
                                        <button className="btn btn-primary" onClick={onRemove(task.id)}>Delete</button>
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
    (state, { search }) =>
        ({ toDoList: state.filter(({ text }) => text.toLowerCase().indexOf(search.toLowerCase()) !== -1) }),
    dispatch => ({
        onRemove: id => () => dispatch(removeToDO(id))
    })
)(TaskList);