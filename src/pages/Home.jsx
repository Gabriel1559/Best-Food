import React from "react";
import Popular from "../components/Popular/Popular";
import Vegiies from "../components/Vegiies/Vegiies";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			<Popular />
			<Vegiies />
		</motion.div>
	);
};

export default Home;
