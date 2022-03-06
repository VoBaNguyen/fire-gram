import React, { useEffect, useState } from "react";
import Imagegrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import Uploadform from "./comps/UploadForm";

function App() {
	const [selectedImg, setSelectedImg] = useState(null);
	return (
		<div className="App">
			<Title />
			<Uploadform />
			<Imagegrid setSelectedImg={setSelectedImg} />
			{selectedImg && (
				<Modal
					selectedImg={selectedImg}
					setSelectedImg={setSelectedImg}
				/>
			)}
		</div>
	);
}

export default App;
