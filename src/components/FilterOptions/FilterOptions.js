import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    // static propTypes = {
    // }
    render() {
        return (
            <div className="filter-options">
                <div className="filter-option-container">
                    <select
                        className="filter-option-dropdown"
                        name="location">
                        <option value="All Locations" defaultValue>All Locations</option>
                        <option value="Location1">Location1</option>
                        <option value="Location2">Location2</option>
                        <option value="Location3">Location3</option>
                    </select>
                    <select
                        className="filter-option-dropdown"
                        name="job-type">
                        <option value="All Types" defaultValue>All Types</option>
                        <option value="Type1">Location1</option>
                        <option value="Type2">Location2</option>
                        <option value="Type3">Location3</option>
                    </select>
                    <select
                        className="filter-option-dropdown"
                        name="job-level">
                        <option value="All Levels" defaultValue>All Levels</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Senior Level">Senior Level</option>
                    </select>
                    <select
                        className="filter-option-dropdown"
                        name="company">
                        <option value="All Companies" defaultValue>All Companies</option>
                        <option value="Company1">Entry Level</option>
                        <option value="Company2">Company2</option>
                        <option value="Company3">Company3</option>
                    </select>
                </div>
                <div className="filter-option-button-container">
                    <button className="filter-submit-button">Find your dream job.</button>
                </div>
            </div>
        );
    }
}

export default FilterOptions;
