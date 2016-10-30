import React, { Component } from 'react';
import JobListItem from '../JobListItem/JobListItem';
import './JobList.css';

class JobList extends Component {
    static propTypes = {
        allResults: React.PropTypes.array.isRequired
    }

    joinToString(resultsArrayForLoop) {
        let temporaryValue = '';
        if (resultsArrayForLoop && resultsArrayForLoop.length) {
            for (let i = 0; i < resultsArrayForLoop.length; i++) {
                temporaryValue = resultsArrayForLoop[i].join(', ');
            }
        }
    }

    renderJobListItems() {
        // loop through allResults array and return a JobListItem for each with company, jobTitle, jobCategory, locations, and levels
        return this.props.allResults.map(results => {
            return (
                <JobListItem
                    key={results.id}
                    company={results.company.name}
                    jobTitle={results.name}
                    jobCategory={this.joinToString(results.categories)}
                    locations={this.joinToString(results.locations)}
                    level={this.joinToString(results.levels)}
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


//     let jobCategories = '';
//     if (results.categories && results.categories.length) {
//         jobCategories += results.categories[0].name;
//     }
//     let jobLocations = '';
//     if (results.locations && results.locations.length) {
//         jobLocations += results.locations[0].name;
//     }
//     let jobLevels = '';
//     if (results.levels && results.levels.length) {
//         jobLevels += results.levels[0].name;
//     }
