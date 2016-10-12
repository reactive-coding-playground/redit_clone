---
layout: project
title: Project 1 / Part 1 - REDit
due: Tuesday, October 11th (beginning of class)
class: gh-check
---

Create a Product Hunt / Reddit clone that transforms existing data into a view using posts and categories.

Your project must include imported data (from a JSON file), use React and the Material UI library to build out the application's UI, use Redux and `react-redux` to manage application state, and React Router for routing. 

## Requirements

To receive a “Pass” grade for this project, your submission will need to satisfy the following criteria:

### Common

Your project must:

- [X] Be pushed to Github 
- [X] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [X] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [X] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [X] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [X] Contain this self-evaluated spec checklist renamed `specs.md`
- [X] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)
- [X] Run without errors with `npm start`
- [X] Have appropriate files compiled into a `build` directory

### Functional

Your project must:

- [X] Load mock data as "posts" and "weeks"
- [X] Display posts in a list
- [ ] Allow post sorting (by "newest" or "popularity")
- [ ] Allow post filtering (by post list)
- [X] Allow users to up-vote posts
- [ ] Use routing to change the URL when the user sorts or filters

### Development

Your project must:

- [X] Contain components built using valid JSX
- [X] Use ES2015 `import` and `export`
- [X] Contain components created using `React.Component`, `const`, or `function` only
- [X] Chain transformations with array methods (`.map`, `.filter`, etc.)
- [X] Use CSS modules for inline styles
- [ ] Use React Lifecycle method where appropriate
- [X] Implement React Router to:
  - Use nested routes with a `Layout` component
  - Implement a top-level `IndexRoute`
  - Use three or more other routes
  - Pass route params for filtering and sorting
  - Wrap the `browserHistory` object
- [X] Implement Redux to manage application state
- [X] Hook up [`react-router-redux`](https://github.com/reactjs/react-router-redux) sync routing with Redux DevTools
- [X] Implement "presentational" and "container" components appropriately throughout the application
- [X] Use [`react-redux`](https://github.com/reactjs/react-redux) `connect` to map state to props
- [X] Use `connect` to map dispatch to props
- [X] Add [`redux-logger`](https://github.com/evgenyrodionov/redux-logger) middleware during "development" mode
- [X] Add and use [`redux-thunk`](https://github.com/gaearon/redux-thunk) middleware for async dispatches
- [X] Reflect the designer's vision for the application's UI

### Quality

Your project must:

- [X] Contain an organized file tree ([see an example](http://marmelab.com/blog/2015/12/17/react-directory-structure.html))
- [X] Use sub-directories to organize component files (on a per component basis)
- [X] Be free of lint errors from ESLint
- [X] Use a unique `key` for all items in lists
- [X] Use `propType` validations for all components
- [X] Be free of `propType` validation errors in console

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Use pure functions only (without side effects)
- [ ] Contain components with arguments passed using "props" only (i.e. no use of `setState`)
- [ ] Write actions using the [Flux Standard Action](https://github.com/acdlite/flux-standard-action) pattern
- [ ] Implement localStorage to preserve state
- [ ] Implement VOTE_DOWN
- [ ] Responsive design with a sliding drawer for weeks
- [ ] Allow users to only VOTE_UP a single time