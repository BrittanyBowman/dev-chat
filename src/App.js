import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import logo from "./assets/logo.svg";
import loading from "./assets/radio.svg";

import { getPosts } from "./services/postService";

import NewPost from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";

class App extends Component {
	render() {
		const {
			  loadingPosts
			, posts
		} = this.props;
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
					<button className="app__load-more-posts" onClick={ getPosts }>
						{ loadingPosts
							? (
								<img
									alt="loading indicator"
									className="app__loading-icon"
									src={ loading }
								/>
							)
							: "Load more posts..."
						}
					</button>
					<Post />
					<Post />
				</div>
			</div>
		);
	}
}

export default connect( state => state )( App );
