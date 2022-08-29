import React from "react";
import Pages from "./pages/Pages";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
import { GiKnifeFork } from "react-icons/gi";

function App() {
	return (
		<div>
			<Router>
				<Nav>
					<GiKnifeFork />
					<Logo to={"/"}>Delicios</Logo>
				</Nav>
				<Search />
				<Category />
				<Pages />
			</Router>
		</div>
	);
}

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	font-weight: 400;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
`;
const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`;
export default App;
