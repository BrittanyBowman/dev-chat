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

While those download, go ahead and open up `src/ducks/post.js` to set up our reducer. Create an `initialState` variable with one property: `posts` set equal to an empty array. Create and export by default a function `post` which takes the regular two reducer parameters: `state = initialState` and `action`. The reducer should `switch` over `action.type`, returning `state` as the `default` case.

Next up, open `src/store.js` and import the following:

* `applyMiddleware` and `createStore` from Redux
* `promiseMiddleware` from Redux Promise Middleware
* `post` from `src/ducks/post.js`

Now we need to create and export by default a store configured to use the Promise middleware. Invoke `createStore` passing in three arguments:

* `post` - As usual we need our reducer.
* `undefined` - Here we could give Redux an initial state, but since we are handling that in our reducer we need to let Redux know that we don't have an initial state here.
* `applyMiddleware( promiseMiddleware() )` - `applyMiddleware` configures our store to run each action through the middleware before passing it along to our reducer.

That's all it takes to configure the store to use the new middleware! Go ahead and open `src/index.js` and take the standard steps to connect the application to Redux. Import `Provider` from React Redux and `store` from `src/store.js`. Wrap the `App` component in `Provider`, passing `store` as a prop.

Now open up `src/App.js` and import `connect` from React Redux. Underneath the component definition replace the current default export with `export default connect( state => state )( App );`. You'll notice we performed our `mapStateToProps` function inline, instead of breaking it out. This is because our `App` component needs the whole of state, and it is simpler to perform a quick, inline, anonymous function. Either way works though!

That's it for this step! You should now be able to `console.log` `this.props` in the `render` method and see the application state.

<details>

<summary><b>Code Solution</b></summary>

<details>

<summary><code>src/ducks/post.js</code></summary>

```javascript
const initialState = {
	posts: []
};

export default function post( state = initialState, action ) {
	switch ( action.type ) {
		default: return state;
	}
}
```

</details>

<details>

<summary><code>src/store.js</code></summary>

```javascript
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import post from "./ducks/post";

export default createStore( post, undefined, applyMiddleware( promiseMiddleware() ) );
```

</details>

<details>

<summary><code>src/index.js</code></summary>

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import store from "./store";

import App from "./App";

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
	, document.getElementById( 'root' )
);
```

</details>

<details>

<summary><code>src/App.js</code></summary>

```jsx
import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import logo from "./assets/logo.svg";

import NewPost from "./components/NewPost/NewPost";

class App extends Component { /* App definition */ }

export default connect( state => state )( App );
```

</details>

</details>



## Contributions

### Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">