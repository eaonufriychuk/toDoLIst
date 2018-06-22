import React, {Component, Fragment} from 'react';
import './TaskBar.css';

export default class TaskBar extends Component {
    state = {
        task: "",
        priority: "",
        category: "",
        data: ""
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
    handleChangeData = (event) => {
        this.setState({data: event.target.value})
    };
    handleSubmit = (event) => {
        const {addItem} = this.props;
        addItem(...Object.values(this.state));
        this.setState({
            task: "",
            category: "",
            data: ""
        });
        event.preventDefault();
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
                    <input onChange={this.handleChangeData} name="date" type="text" placeholder="date" required/>
                    <input className="btn btn-primary" type="submit" value="Add task"/>
                </form>
            </Fragment>
        )
    }
}