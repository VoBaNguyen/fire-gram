import { useState, useEffect } from "react";
import {
	projectStorage,
	projectFiresStore,
	timestamp,
} from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// references
		const storageRef = ref(projectStorage, `${file.name}`);
		const collectionRef = collection(projectFiresStore, "images");
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			"state_changed",
			(snap) => {
				let percentage =
					(snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			(err) => {
				setError(err);
			},
			(res) => {
				const createdAt = timestamp();
				const url = getDownloadURL(uploadTask.snapshot.ref).then(
					(downloadURL) => {
						addDoc(collectionRef, { downloadURL, createdAt }).then(
							() => {
								console.log("Finish");
							}
						);
					}
				);
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
