import React from "react";
import { MyNavbar } from "./navbar";
import { MyJumbotron } from "./jumbotron";
import { MyCard } from "./card";
import { element } from "prop-types";

export function Home() {
	const menu = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#about" },
		{ label: "Services", url: "#services" },
		{ label: "Contact", url: "#contact" }
	];
	const cardParas = [
		{
			content:
				"Lorem Ipsum is simply dummy text of the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			cardsImage: "https://via.placeholder.com/500x325",
			cardTitle: "sometitle1"
		},
		{
			content:
				"It is a long established fact that a The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
			cardsImage: "https://via.placeholder.com/500x325",
			cardTitle: "sometitle2"
		},
		{
			content:
				"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
			cardsImage: "https://via.placeholder.com/500x325",
			cardTitle: "sometitle3"
		},
		{
			content:
				"There are many variations of passages  by injected humour, or randomised words which don't look even slightly believable. ",
			cardsImage: "https://via.placeholder.com/500x325",
			cardTitle: "sometitle4"
		}
	];
	return (
		<div>
			<MyNavbar menu={menu} brand="Start Bootstrap" />
			<MyJumbotron />

			<div className="d-flex flex-row justify-content-around">
				{cardParas.map((element, index) => {
					return (
						<MyCard
							content={element.content}
							cardsImage={element.cardsImage}
							cardTitle={element.cardTitle}
							key={index}
						/>
					);
				})}
			</div>
			<div className="footer">
				<p className="copyright">CopyRight @ Your Website 2021</p>
			</div>
		</div>
	);
}
