import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
    static propTypes = {
        getDataWithFilter: React.PropTypes.func
    }

    //function to get all values from option dropdowns & props to call API endpoint at the app level so results can be stored in state
    getValues() {
        //first get values for dropdown filters
        let company = this.companyInput.value;
        let category = this.jobTypeInput.value;
        let level = this.levelInput.value;
        let location = this.locationInput.value;

        //then call app level function with values as arguements
        this.props.getDataWithFilter(company, category, level, location);
    }

    render() {
        return (
            <form className="filter-options">
                <div className="filter-option-container">
                    <select
                        className="filter-option-dropdown"
                        name="location"
                        ref={(locationInput) => {
                            if (locationInput != null) {
                                this.locationInput = locationInput;
                            }
                        }}
                    >
                    //only using the primary ten locations, to epxand I could store all locations in some kind of array and use a function to dynamically populate option dropdowns; IMPROVEMENT_NEEDED
                        <option value="" defaultValue>All Locations</option>
                        <option value="New+York+City+Metro+Area">New York City Metro Area</option>
                        <option value="San+Francisco+Bay+Area">San Francisco Bay Area</option>
                        <option value="Los+Angeles%2CCA">Los Angeles, CA</option>
                        <option value="Chicago%2CIL">Chicago, IL</option>
                        <option value="Flexible+%2F+Remote">Flexible / Remote</option>
                        <option value="Washington+DC+Metro+Area">Washington DC Metro Area</option>
                        <option value="Austin%2CTX">Austin, TX</option>
                        <option value="Boston+Metro+Area">Boston Metro Area</option>
                        <option value="Atlanta%2CGA">Atlanta, GA</option>
                    </select>
                    <select
                        className="filter-option-dropdown"
                        name="job-type"
                        ref={(jobTypeInput) => {
                            if (jobTypeInput != null) {
                                this.jobTypeInput = jobTypeInput;
                            }
                        }}
                    >
                        <option value="" defaultValue>All Types</option>
                        <option value="Account+Management">Account Management</option>
                        <option value="Business+&+Strategy">Business & Strategy</option>
                        <option value="Creative+&+Design">Creative & Design</option>
                        <option value="Customer+Service">Customer Service</option>
                        <option value="Data+Science">Data Science</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Education">Education</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Finance">Finance</option>
                        <option value="Fundraising+&+Development">Fundraising & Development</option>
                        <option value="Healthcare+&+Medicine">Healthcare & Medicine</option>
                        <option value="HR+&+Recruiting">HR & Recruiting</option>
                        <option value="Legal">Legal</option>
                        <option value="Marketing+&+PR">Marketing & PR</option>
                        <option value="Operations">Operations</option>
                        <option value="Project+&+Product+Management">Project & Product Management</option>
                        <option value="Retail">Retail</option>
                        <option value="Sales">Sales</option>
                        <option value="Social+Media+&+Community">Social Media & Community</option>
                    </select>
                    <select
                        className="filter-option-dropdown"
                        name="job-level"
                        ref={(levelInput) => {
                            if (levelInput != null) {
                                this.levelInput = levelInput;
                            }
                        }}
                    >
                        <option value="" defaultValue>All Levels</option>
                        <option value="Internship">Internship</option>
                        <option value="Entry+Level">Entry Level</option>
                        <option value="Mid+Level">Mid Level</option>
                        <option value="Senior+Level">Senior Level</option>
                    </select>
                    <select
                        className="filter-option-dropdown"
                        name="company"
                        ref={(companyInput) => {
                            if (companyInput != null) {
                                this.companyInput = companyInput;
                            }
                        }}
                    >
                    //only using a handful of companies, to epxand I could store all locations in some kind of array and use a function to dynamically populate option dropdowns; IMPROVEMENT_NEEDED
                        <option value="" defaultValue>All Companies</option>
                        <option value="Fueled">Fueled</option>
                        <option value="Chartbeat">Chartbeat</option>
                        <option value="The+Muse">The Muse</option>
                        <option value="Axiom">Axiom</option>
                        <option value="Success+Academy+Charter+Schools">Success Academy Charter Schools</option>
                        <option value="GrubHub">GrubHub</option>
                        <option value="Bounce+Exchange">Bounce Exchange</option>
                        <option value="AOL">AOL</option>
                        <option value="Shutterstock">Shutterstock</option>
                        <option value="Curalate">Curalate</option>
                        <option value="Squarespace">Squarespace</option>
                        <option value="WeWork">WeWork</option>
                        <option value="Warby+Parker">Warby Parker</option>
                    </select>
                </div>
                <div className="filter-option-button-container">
                    <button
                        type="button"
                        className="button filter-submit-button"
                        onClick={() => {this.getValues()}}>
                        Find your dream job
                    </button>
                </div>
            </form>
        );
    }
}

export default FilterOptions;
