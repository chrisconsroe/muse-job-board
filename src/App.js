import React, { Component } from 'react';
import JobList from './components/JobList/JobList';
import FilterOptions from './components/FilterOptions/FilterOptions';
import LoadingWheel from './components/LoadingWheel/LoadingWheel';
import './App.css';

class App extends Component {
    //establish two concepts of state; one is all results to begin displaying by default, the second is the filtered results to be compared against; in case of removing filters, the concept of all_results is maintained in state to compare against.
    constructor(props) {
        super(props);
        this.state = {
            allResults: [],
            error: '',
            isLoading: true
            //will uncomment when introducing filter functionality
            // filtered_results: []
        }
    }

    // Lifecycle hook to fetch data on page load (show loader while waiting).
    componentWillMount() {
        //hit the jobs endpoint (just the first page for right now) with no filters
        fetch('https://api-v2.themuse.com/jobs?page=1')
        //chain promises; then check the response object's status is a number greater than 400 throw an error
          .then(response => {
              if (response.status >= 400) {
                  //throw forces case into catch
                  throw `Response Error: ${response.status}`
              }
              //then resolve the promise into JSON as next argument
              return response.json();
          })

          //next promise chain; take data response and call set state to store full response in local state then set  to false
          .then(data => {
            this.setState({
              allResults: data.results,
              isLoading: false
            });
          })

          //catch statement to handle errors
          .catch(error => {
              if (typeof error !== 'string') {
                  error = 'Fetch failed!';
              }
              this.setState({
                error: error
            });
          })
      }

      //check state to see if isLoading is true, if so load the spinning wheel
      //else if API call has resolved/allResults has a length render JobList
      //else if error comes back from server display it
    renderJobsIfNeeded() {
        if (this.state.isLoading) {
            return (
                <LoadingWheel />
            );
        } else if (this.state.allResults.length > 0) {
            return (
                <JobList
                    allResults={this.state.allResults}
                />
            );
        } else {
            //show error message
            return (
                <div className="error">
                    It looks like something went really wrong.
                    Just so you know: {this.state.error}
                </div>
            );
        }
    }

    //call renderJobsIfNeeded to start initial fetch to api for all, unfiltered jobs, also render filter option component
    render() {
        return (
            <div className="app">
                <FilterOptions />
                {this.renderJobsIfNeeded()}
            </div>
        )
    }
}

export default App;
