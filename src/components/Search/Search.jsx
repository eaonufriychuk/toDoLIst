import React from 'react';

import './Search.css';

export default (props) => {
    const { upDateSearch } = props;

    return (<div className="card" >
        <div className="card-header">
            Поиск по задачам
        </div>
        <div className="card-body">
            <label className="search" htmlFor="search" >
                <input type="text" name="search" onChange={upDateSearch} placeholder="Search" />
            </label>
        </div>
    </div>)
}