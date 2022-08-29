import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recepie from "../components/Recepi/Recepie";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function Pages() {
	const location = useLocation;
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cuisine/:type" element={<Cuisine />} />
			<Route path="/searched/:search" element={<Searched />} />
			<Route path="/recepie/:name" element={<Recepie />} />
		</Routes>
	);
}

export default Pages;
