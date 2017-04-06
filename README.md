<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# DevChat
<img src="https://raw.githubusercontent.com/DevMountain/dev-chat/master/readme-assets/solution.png" />

### Setup

To begin, fork and clone this repository. Once it has finished downloading `cd` into the project root and run `npm i` to fetch the project dependencies. After they are fetched run `npm start` and a browser window will open at `http://localhost:3000` displaying a (non-functioning) chat app. In another terminal window run `npm test` to run the test suite.

### The plan

Today we'll be building a Twitter-esque chat application where you will be able to chat with other DevMountain students. This app will have real, persistent data via communication with a remote server. We'll be building the front end client using React, Redux, and Redux Promise Middleware.


### Step 1

**Summary**

In this step we'll be installing some new dependencies, creating the bones of our Redux setup, and connecting the application to Redux.

**Detailed Instructions**

Start out by installing the following dependencies:

* `redux`
* `react-redux`
* `axios` - The library we'll be using to make HTTP requests for data
* `redux-promise-middleware` - A tool that allows us to handle async actions much easier!

While those download, go ahead and open up `src/ducks/post.js` to set up our reducer. Create an `initialState` variable with one property: `posts` set equal to an empty array. Create and export by default a function `post` which takes the regular two reducer parameters: `state = initialState` and `action`.

Next up, open `src/store.js` and import the following:

* `applyMiddleware` and `createStore` from Redux
* `promiseMiddleware` from Redux PromiseMiddleware
* `post` from `src/ducks/post.js`





## Contributions

### Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">