import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import logo from "./assets/logo.svg";
import loading from "./assets/loading_blue.svg";

import { getPosts } from "./services/postService";

import NewPost from "./components/NewPost/NewPost";
import Post from "./components/Post/Post";

class App extends Component {
	componentDidMount() {
		getPosts();
	}

	renderLoadButtonInternals( errorLoadingPosts, loadingPosts ) {
		if ( errorLoadingPosts ) {
			return <span className="app__error-text">There was a problem loading the posts. Try again?</span>;
		}

		if ( loadingPosts ) {
			return (
				<img
					alt="loading indicator"
					className="app__loading-icon"
					src={ loading }
				/>
			);
		}

		return <span>Load more posts...</span>
	}

	render() {
		const {
			  errorLoadingPosts
			, loadingPosts
			, posts
		} = this.props;
		const postElements = posts.map( post => (
			<Post
				author={ post.author }
				content={ post.content }
				displayTime={ post.displayTime }
				key={ post._id }
			/>
		) );

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
						onClick={ getPosts }
					>
						{ this.renderLoadButtonInternals( errorLoadingPosts, loadingPosts ) }
					</button>

					{ postElements }
				</div>
			</div>
		);
	}
}

export default connect( state => state )( App );
