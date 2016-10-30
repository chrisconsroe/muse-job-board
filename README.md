Hello, Muse developers!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) — a tool I like to use a lot that does all the webpack/npm/react/babel configuration for you so you can start building more quickly.

My job board webapp is organized with this basic component structure:

-- App (controls state, is responsible for all API requests)
    -- JobList
        -- JobListItem
    -- FilterOptions
    -- LoadingWheel

## How it works
On page load, the componentWillMount() lifecycle hook executes and an initial fetch request is made to 'https://api-v2.themuse.com/jobs?page=1' to populate 20 jobs with no filters. the fetch request uses a promise chain to handle error cases, and show a loading wheel until the promise resolves and the response JSON is set to state.

Setting state triggers render() which does two things: first it renders the <FilterOptions> component to the page and second it loops through the allResults array and renders the <JobList> component, passing the allResults array as props.

<JobList> in turn loops through the allResults array and for each item, pulls out the company, job title, locations, levels, categories, and landing page URL, and renders a <JobListItem> component.

Users can use the <select> menus to select specific criteria, and on clicking the button, React refs are activated and the values of each, if a value was selected, are returned. those parameters are passed as arguments to the getDataWithFilter() function passed down as props from the parent, and called at the App level. A new endpoint is joined using the filter values and the fetch call is made again -- causing the entire app to re-start the fetch process.

## IMPROVEMENT_NEEDED        
Throughout the app I marked areas where the solutions I came up with to get the app working were less than ideal in the short term. Those are opportunities for further development should this project continue.
    -- page numbers: for right now I was only able to make a request with '?page=1' already appended to the API endpoint URL. I played around with some possible solutions but none of them really worked too well so I just stuck with "page1"
    -- FilterOption component: right now I'm using React's refs to get the value of the <select> dropdown which work well enough for forms, also considering how the <options> are all hardcoded in, this whole component could use some more work. Things I'd like to do:
        -- multi-selection (checkboxes whose values return multiple parameters)
        -- dynamically populate menu contents for company and location
    -- the logic to concatenate the new URL with any filters is really long and drawn out. there's definitely a more efficient way to do it, but I couldn't get it.

## Helpful things from the create-react-app README

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `npm run build`
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!
