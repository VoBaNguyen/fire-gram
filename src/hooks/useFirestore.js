import { useState, useEffect } from "react";
import { projectFiresStore } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";

const useFirestore = (collectionName) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const collectionRef = collection(projectFiresStore, collectionName);
		getDocs(collectionRef).then((snapshot) => {
			let images = [];
			snapshot.docs.forEach((doc) => {
				console.log("doc: ", doc);
				images.push({ ...doc.data(), id: doc.id });
			});
			setDocs(images);
		});

		return () => collectionRef();
	}, [collectionName]);

	return { docs };
};

export default useFirestore;
