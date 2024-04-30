import Videos from "./Videos/Videos";
import { useState, useEffect, useRef } from "react";
import VideoForm from "./VideoForm/VideoForm";
import "./App.scss";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [fetchedVideos, setFetchedVideos] = useState(false);

	useEffect(() => {
		fetch("/api/videos")
			.then((res) => res.json())
			.then((data) => {
				setVideos(data);
			});
		setFetchedVideos(false);
	}, [fetchedVideos]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target));
		const response = await fetch("/api/videos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			setFetchedVideos(true);
			
		}

		if (!response.ok) {
			throw new Error("Failed to add video");
		}

		const responseData = await response.json();
		e.target.reset();
	};

	return (
		<>
			<h1>Video Recommendations</h1>
			<Videos video={videos} />
			<VideoForm handleSubmit={handleSubmit} />
		</>
	);
};

export default App;
