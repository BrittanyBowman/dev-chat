import React, { Component } from "react";

import "./App.css";
import logo from "./assets/logo.svg";

import NewPost from "./components/NewPost/NewPost";

class App extends Component {
	render() {
		return (
			<div>
				<header className="app__top-bar">
					<div className="app__top-bar-content">
						Dev
						<div className="app__logo-wrapper">
							<img
								alt="devmountain logo"
								className="app__logo"
								src={ logo }
							/>
						</div>
						Chat
					</div>
				</header>

				<NewPost />

				<div className="app__post-wrapper">
					<button
						className="app__load-more-posts"
						onClick={ () => null }
					>
						Load more posts...
					</button>

				</div>
			</div>
		);
	}
}

export default App;
