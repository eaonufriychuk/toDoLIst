import React, {Component, Fragment} from 'react';

import DatePicker from 'react-date-picker';

import './TaskBar.css';

export default class TaskBar extends Component {
    state = {
        task: "",
        priority: "",
        category: "",
        date: new Date(),
    };

    handleChangeTask = (event) => {
        this.setState({task: event.target.value})
    };

    handleChangePriority = (event) => {
        this.setState({priority: event.target.value})
    };

    handleChangeCategory = (event) => {
        this.setState({category: event.target.value})
    };

    handleSubmit = (event) => {
        const {addItem} = this.props;
        addItem(...Object.values(this.state));
        event.preventDefault();
    };

    handleChangeDate = (date) => {
        this.setState({date});
    };

    render() {
        return (
            <Fragment>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChangeTask} name="task" type="text" placeholder="add your task"
                           required/>
                    <select onChange={this.handleChangePriority} name="priority" id="priority">
                        <option selected disabled>Choose priority</option>
                        <option>+2</option>
                        <option>+1</option>
                        <option>0</option>
                        <option>-1</option>
                        <option>-2</option>
                    </select>
                    <input onChange={this.handleChangeCategory} name="category" type="category"
                           placeholder="add category" required/>
                    <DatePicker
                        onChange={this.handleChangeDate}
                        value={this.state.date}
                    />
                    <input className="btn btn-primary" type="submit" value="Add task"/>
                </form>
            </Fragment>
        )
    }
}