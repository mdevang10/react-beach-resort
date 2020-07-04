import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};
export default function RoomsFilter({ rooms }) {
	const context = useContext(RoomContext);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;
	//get unique types
	let types = getUnique(rooms, "type");
	//add all
	types = ["all", ...types];
	//map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, "capacity");

	//map to jsx
	people = people.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<Title title="search rooms"></Title>
			<form className="filter-form">
				{/* select type */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/* end of select type */}

				{/* select guests */}
				<div className="form-group">
					<label htmlFor="capacity">guests</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/* end of select guests */}

				{/* select price */}
				<div className="form-group">
					<label htmlFor="price">room price ${price}</label>
					<input
						type="range"
						name="price"
						id="price"
						min={minPrice}
						max={maxPrice}
						value={price}
						className="form-control"
						onChange={handleChange}
					></input>
				</div>
				{/* end of select price */}

				{/* select size */}
				<div className="form-group">
					<label htmlFor="size">room size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							className="size-input"
							onChange={handleChange}
						></input>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							className="size-input"
							onChange={handleChange}
						></input>
					</div>
				</div>
				{/* end of select size */}

				{/* select extras */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						></input>
						<label htmlFor="breakfast">breakfast</label>
					</div>
					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						></input>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/* end of select extras */}
			</form>
		</section>
	);
}
