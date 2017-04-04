import React, { Component } from "react";

import "./NewPost.css";

export class NewPost extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			  name: ""
			, newPost: ""
		};

		this.handleNameChange = this.handleChange.bind( this, "name" );
		this.handlePostChange = this.handleChange.bind( this, "newPost" );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	handleChange( field, event ) {
		this.setState( { [ field ] : event.target.value } );
	}

	handleSubmit( event ) {
		event.preventDefault();

		this.setState( { newPost: "" } );
	}

	render() {
		const {
			  name
			, newPost
		} = this.state;

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
					required
					placeholder="Let's talk about dev stuff"
					rows="3"
					value={ newPost }
				/>
				<button className="new-post__submit">Post</button>
			</form>
		);
	}
}

export default NewPost;