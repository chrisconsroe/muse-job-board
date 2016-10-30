import React, { Component } from 'react';
import './JobListItem.css';

class JobListItem extends Component {
    static propTypes = {
        company: React.PropTypes.string,
        jobTitle: React.PropTypes.string,
        jobCategory: React.PropTypes.string,
        locations: React.PropTypes.string,
        level: React.PropTypes.string,
        landingPageUrl: React.PropTypes.string
    }

    render() {
        //the actual job post card to be rendered; wrapped in the URL for the landing page, div with p tags for company, job title, categories, locations, and levels
        return (
            <a href={this.props.landingPageUrl} target="_blank">
                <div className="job-list-item">
                    <p className="job-list-item-company-name">{this.props.company}</p>
                    <p className="job-list-item-job-title">{this.props.jobTitle}</p>
                    <p className="job-list-item-job-category">{this.props.jobCategory}</p>
                    <p className="job-list-item-job-location">{this.props.locations}</p>
                    <p className="job-list-item-job-level">{this.props.level}</p>
                </div>
            </a>
        );
    }
}

export default JobListItem;
