import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function Searching() {
	const [searched, setSearched] = useState([]);
	let param = useParams();

	useEffect(() => {
		getSeraching(param.search);
	}, [param.search]);

	const getSeraching = useCallback(
		async (ingredient) => {
			const api = await axios(
				`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredient}&number=9`
			);
			setSearched(api.data);
		},
		[param.search]
	);
	return (
		<Grid
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			{searched?.map((item) => {
				return (
					<Card key={item.id}>
						<Link to={"/recepie/" + item.id}>
							<img src={item.image} />
							<h4>{item.title}</h4>
						</Link>
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

export default Searching;
