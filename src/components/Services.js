import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail></FaCocktail>,
				title: "Free Cocktails",
				info:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.",
			},
			{
				icon: <FaHiking></FaHiking>,
				title: "Endless Hiking",
				info:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.",
			},
			{
				icon: <FaShuttleVan></FaShuttleVan>,
				title: "Free Shuttle",
				info:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.",
			},
			{
				icon: <FaBeer></FaBeer>,
				title: "Strongest Beer",
				info:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.",
			},
		],
	};

	render() {
		return (
			<section className="services">
				<Title title="Services"></Title>
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
