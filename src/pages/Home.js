import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export const Home = () => {
	return (
		<>
			<Hero>
				<Banner
					title="luxurious rooms"
					subtitle="delux rooms starting at $299"
				>
					<Link to="/rooms" className="btn-primary">
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Services></Services>
			<FeaturedRooms></FeaturedRooms>
		</>
	);
};

export default Home;