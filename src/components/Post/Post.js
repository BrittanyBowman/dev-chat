import React, { PropTypes } from "react";

import "./Post.css";

export default function Post() {
	return (
		<div className="post">
			<h3 className="post__name">Ryan Walsh</h3>
			<span className="post__time">1:43 PM</span>
			<p className="post__content">Here I am talking about dev stuff ladeedadeeda doot doot jsdghalsjhvbakljdsv nalk jdsvlas dujvalsj dbvals djvbalsdjvbalsjd vbaslj dvba lsj kdvbasl djk vbasljk dvbasl dvbasljdvbasd</p>
		</div>
	);
};

Post.propTypes = {};
