# Fast Isomorphic redux app


This project serves as a **simple** boilerplate to start building an isomorphic rendering application in React and Redux.

# Features

- Async server-side rendering
- Hot reloading middleware
- Redux DevTools and Logging
- Redux Routing
- Redux DevTool as Chrome extention

## Stack

- React.js
- React-router
- Webpack
- Express
- Redux
- Redux-DevTools
- Babel
## Development Installation

In the project's directory, run the following commands:

```
$ npm install
$ npm start
```
And install this Extention into chrome
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-app-launcher-info-dialog

Then Visit

```
http://localhost:3002
```

## Releasing to Production

Production has Devtools, logging and hot reloading middleware removed and the scripts/css compressed.

In the project's directory, run the following commands:

```
$ npm run build
$ npm run start-prod
```

Then Visit

```
http://localhost:3002
```

## Run Test
```
npm test
```

## Auth
Look at /src/common/api/user.js

You need to put token into cookie with name 'token' and check it into file via axios request.

## Credit

Based on https://github.com/caljrimmer/isomorphic-redux-app
