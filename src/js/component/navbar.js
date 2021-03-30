import React from "react";
import PropTypes from "prop-types";

export function MyNavbar(props) {
	const renderNav = props.menu.map((item, index) => {
		return (
			<li className="nav-item" key={index}>
				<a className="nav-link" href={item.url}>
					{item.label}
				</a>
			</li>
		);
	});
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				{props.brand}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">{renderNav}</ul>
			</div>
		</nav>
	);
}

MyNavbar.defaultProps = {
	menu: [],
	brand: "bootstrap"
};

MyNavbar.propTypes = {
	menu: PropTypes.array,
	brand: PropTypes.string
};
