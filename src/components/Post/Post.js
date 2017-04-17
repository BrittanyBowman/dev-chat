import React, { PropTypes } from "react";

import "./Post.css";

export default function Post( { author, content, displayTime } ) {
	return (
		<div className="post">
			<h3 className="post__name">{ author }</h3>
			<span className="post__time">{ displayTime }</span>
			<p className="post__content">{ content }</p>
		</div>
	);
};

Post.propTypes = {
	  author: PropTypes.string.isRequired
	, content: PropTypes.string.isRequired
	, displayTime: PropTypes.string.isRequired
};
