import React, { Component } from 'react';
import JobListItem from '../JobListItem/JobListItem';
import './JobList.css';

class JobList extends Component {
    static propTypes = {
        allResults: React.PropTypes.array.isRequired
    }

    // helper function to loop through array of objects to join their name properties into a comma separated list for categories, locations, and levels. it's kind of long.
    joinToString(resultsArrayForLoop) {
        // establish temporaryValue to be reurned
        let temporaryValue = '';
        // check if array to be joined returns true and has a length
        if (resultsArrayForLoop && resultsArrayForLoop.length) {
            // loop though the array, if the array has multiple objects AND loop counter is NOT on the last item, grab the object.name and add a comma
            //otherwise it's the last item so just get the name but no comma
            for (let i = 0; i < resultsArrayForLoop.length; i++) {
                if (resultsArrayForLoop.length > 1 && i < resultsArrayForLoop.length - 1) {
                    temporaryValue += resultsArrayForLoop[i].name + ', ';
                } else {
                    temporaryValue += resultsArrayForLoop[i].name
                }
            }
        }
        return temporaryValue;
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
