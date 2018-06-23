import React from 'react';
import './Search.css';

export default (props) => {
    const { upDateSearch } = props;

    return (<div className="search" >
        <div>
            <label htmlFor="search" >
                <input type="text" name="search" onChange={upDateSearch} placeholder="Search" />
            </label>
        </div>
    </div>)
}