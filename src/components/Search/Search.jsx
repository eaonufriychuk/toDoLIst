import React from 'react';

export default (props) => {
    const { upDateSearch } = props;

    return (<div className="card search" >
        <div className="card-header">
            Task search
        </div>
        <div className="card-body">
            <label htmlFor="search" >
                <input
                    className="form-control"
                    type="text"
                    name="search"
                    onChange={upDateSearch}
                    placeholder="Search"
                />
            </label>
        </div>
    </div>)
}