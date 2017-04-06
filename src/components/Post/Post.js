import React, { PropTypes } from "react";

import "./Post.css";

export default function Post( { author, content, displayTime } ) {
	return (
		<div className="post">
			<h3 className="post__name">{ "" }</h3>
			<span className="post__time">{ "" }</span>
			<p className="post__content">{ "" }</p>
		</div>
	);
};

Post.propTypes = {
	  author: PropTypes.string.isRequired
	, content: PropTypes.string.isRequired
	, displayTime: PropTypes.string.isRequired
};
