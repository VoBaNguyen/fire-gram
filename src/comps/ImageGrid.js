import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion/dist/framer-motion";

const Imagegrid = ({ setSelectedImg }) => {
	const { docs } = useFirestore("images");
	console.log(docs);
	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						layout
						whileHover={{ opacity: 1 }}
						className="img-wrap"
						key={doc.id}
						onClick={() => setSelectedImg(doc.downloadURL)}>
						<img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
							src={doc.downloadURL}
							alt="uploaded img"
						/>
					</motion.div>
				))}
		</div>
	);
};

export default Imagegrid;
