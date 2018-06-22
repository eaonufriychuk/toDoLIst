import React, {Component} from 'react';
import Header from './components/Header/Header';
import TaskBar from './components/TaskBar/TaskBar';
import TaskList from './components/TaskList/TaskList';

class App extends Component {
    state = {
        toDoList: [],
        filters: {
            priority: [],
            category: []
        },
    };

    addItem = (text, priority, category, data) => {
        if(text && priority && category && data) {
            const newItem = {
                text: text,
                priority: priority,
                category: category,
                data: data
            };

            this.setState({toDoList: [...this.state.toDoList, newItem]})
        }
    };

    render() {
        return (
            <div className="container">
                <div className="card">
                    <Header/>
                    <div className="card-body">
                        <TaskBar addItem={this.addItem}/>
                        <TaskList toDoList={this.state.toDoList}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
