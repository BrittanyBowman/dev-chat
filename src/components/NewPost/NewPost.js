import React, { Component, PropTypes } from "react";

import "./NewPost.css";

export class NewPost extends Component {
	static propTypes = {
		creatingPost: PropTypes.bool.isRequired
	};

	constructor( props ) {
		super( props );

		this.state = {
			  name: ""
			, newPost: ""
		};

		this.handleNameChange = this.handleChange.bind( this, "name" );
		this.handlePostChange = this.handleChange.bind( this, "newPost" );
		this.submitOnEnter = this.submitOnEnter.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleChange( field, event ) {
		this.setState( { [ field ] : event.target.value } );
	}

	submitOnEnter( event ) {
		if ( event.keyCode === 13 ) {
			event.stopPropagation();
			this.handleSubmit( event );
		}
	}

	handleSubmit( event ) {
		event.preventDefault();
		const { name, newPost } = this.state;

		if ( name && newPost ) {
			this.setState( { newPost: "" } );
		}
	}

	render() {
		const {
			  name
			, newPost
		} = this.state;
		const { creatingPost } = this.props;

		return (
			<form
				className="new-post"
				onSubmit={ this.handleSubmit }
			>
				<input
					className="new-post__name"
					onChange={ this.handleNameChange }
					placeholder="My name is..."
					required
					type="text"
					value={ name }
				/>
				<textarea
					className="new-post__post"
					cols="30"
					onChange={ this.handlePostChange }
					onKeyDown={ this.submitOnEnter }
					required
					placeholder="Let's talk about dev stuff"
					rows="3"
					value={ newPost }
				/>
				<button className="new-post__submit">
					Post
				</button>
			</form>
		);
	}
}

export default NewPost;