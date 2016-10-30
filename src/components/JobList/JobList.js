import React, { Component } from 'react';
import JobListItem from '../JobListItem/JobListItem';
import './JobList.css';

class JobList extends Component {
    static propTypes = {
        allResults: React.PropTypes.array.isRequired
    }

    // function to run through array and return each as a JobListItem
    renderJobListItems() {
        // loop through allResults array and return a JobListItem for each with company, jobTitle, jobCategory, locations, and levels
        return this.props.allResults.map(results => {
            let jobCategories = '';
            if (results.categories && results.categories.length) {
                jobCategories += results.categories[0].name;
            }
            let jobLocations = '';
            if (results.locations && results.locations.length) {
                jobLocations += results.locations[0].name;
            }
            let jobLevels = '';
            if (results.levels && results.levels.length) {
                jobLevels += results.levels[0].name;
            }

            return (
                <JobListItem
                    key={results.id}
                    company={results.company.name}
                    jobTitle={results.name}
                    jobCategory={jobCategories}
                    locations={jobLocations}
                    level={jobLevels}
                    landingPageUrl={results.refs.landing_page}
                />
            );
        });
    }

    render() {
        //return a div with the results of renderJobListItems (a series of separate JobListItems)
        return (
            <div className="job-list">
                {this.renderJobListItems()}
            </div>
        );
    }
}

export default JobList;
