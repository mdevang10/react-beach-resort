import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

export const Rooms = () => {
	return (
		<>
			<Hero hero="roomsHero">
				<Banner title="Our Rooms">
					<Link to="/" className="btn-primary">
						Return Home
					</Link>
				</Banner>
			</Hero>
			<RoomsContainer></RoomsContainer>
		</>
	);
};

export default Rooms;
