import React from "react";
import PropTypes from "prop-types";

export function MyJumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.para1}</p>
			<hr className="my-4" />
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.button}
			</a>
		</div>
	);
}

MyJumbotron.defaultProps = {
	title: "A Warm Welcome!",
	para1:
		"The key of this project is to help you understand how to pick the components that you want to build, you have to think the best way to organize and avoid future errors. What can be re-used? ",
	button: "Call to action!"
};

MyJumbotron.propTypes = {
	title: PropTypes.string,
	para1: PropTypes.string,
	button: PropTypes.string
};
