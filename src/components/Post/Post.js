import React, { PropTypes } from "react";

import "./Post.css";

export default function Post( { name, text } ) {
	return (
		<div className="post">
			<h3 className="post__name">{ name }</h3>
			<span className="post__time">1:43 PM</span>
			<p className="post__content">{ text }</p>
		</div>
	);
};

Post.propTypes = {
	  name: PropTypes.string.isRequired
	, text: PropTypes.string.isRequired
};
