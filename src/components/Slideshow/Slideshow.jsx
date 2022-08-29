import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Slideshow({ name }) {
	const [thing, setThing] = useState([]);

	useEffect(() => {
		getItems();
	}, []);

	const getItems = useCallback(async () => {
		const check = localStorage.getItem(name);
		if (check) {
			setThing(JSON.parse(check));
		}
		// else {
		// 	const api = await axios(
		// 		/`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`
		// 	);
		// 	localStorage.setItem(name, JSON.stringify(api.data.recipes));
		// 	setThing(api.data.recipes);
		// }
	}, []);
	return (
		<div>
			<Wrapper>
				<h3>{name} Picks</h3>
				<Splide
					options={{
						perPage: 4,
						arrows: false,
						pagination: false,
						drag: "free",
						gap: "5rem",
					}}
				>
					{thing.map((recepie) => {
						return (
							<SplideSlide key={recepie.id}>
								<Card>
									<Link to={"/recepie/" + recepie.id}>
										<p>{recepie.title}</p>
										<img src={recepie.image} alt={recepie.title} />
										<Gradient />
									</Link>
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
	h3 {
		text-transform: capitalize;
	}
`;
const Card = styled.div`
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Slideshow;
