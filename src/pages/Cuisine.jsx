import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let param = useParams();

	useEffect(() => {
		getCuisine(param.type);
	}, [param.type]);

	const getCuisine = useCallback(
		async (nameCuisine) => {
			const check = localStorage.getItem(nameCuisine);
			if (check) {
				setCuisine(JSON.parse(check));
			} else {
				const api = await axios(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${nameCuisine}`
				);
				localStorage.setItem(nameCuisine, JSON.stringify(api.data.recipes));
				setCuisine(api.data.recipes);
			}
		},
		[param.type]
	);
	return (
		<Grid
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			{cuisine.map((item) => {
				return (
					<Card key={item.id}>
						<img src={item.image} />
						<h4>{item.title}</h4>
					</Card>
				);
			})}
		</Grid>
	);
}
const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;
const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

export default Cuisine;
