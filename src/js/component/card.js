import React from "react";
import PropTypes from "prop-types";

export function MyCard(props) {
	return (
		<div className="card">
			<img src={props.cardsImage} className="card-img-top" alt="..." />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">
					<b>{props.cardTitle}</b>
				</h5>
				<p className="card-text">{props.content}</p>
				<div className="card-footer d-flex align-items-center justify-content-center">
					<a href="#" className="card-button btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}

MyCard.defaultProps = {
	content: " ",
	cardsImage: " ",
	cardTitle: " "
};

MyCard.propTypes = {
	content: PropTypes.string,
	cardsImage: PropTypes.string,
	cardTitle: PropTypes.string
};
