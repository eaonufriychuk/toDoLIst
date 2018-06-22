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
    
    formatDate = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [day, month, year].join('.');
    };

    addItem = (text, priority, category, date) => {
        if(text && priority && category && date) {
            const newItem = {
                text: text,
                priority: priority,
                category: category,
                date: this.formatDate(date)
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
