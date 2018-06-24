import React from 'react';

import './Search.css';

export default (props) => {
    const { upDateSearch, onSortDate, sorted } = props;

    return (<div className="card" >
        <div className="card-header">
            Task search
        </div>
        <div className="card-body">
            <label className="search" htmlFor="search" >
                <input className="form-control" type="text" name="search" onChange={upDateSearch} placeholder="Search" />
            </label>
        </div>
    </div>)
}