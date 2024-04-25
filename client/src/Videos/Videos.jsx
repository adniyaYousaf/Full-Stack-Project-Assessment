import { useState, useEffect, useRef } from "react";
import "./videos.scss";

const Videos = () => {
	const [videos, setVideos] = useState([]);
	const fetchedVideos = useRef(true);

	useEffect(() => {
		if (fetchedVideos.current) {
			fetchedVideos.current = false;
			fetch("/api/videos")
				.then((res) => res.json())
				.then((data) => {
					setVideos(data);
					fetchedVideos.current = true;
				});
		}
	}, []);

	const mapVideos = videos.map((video, index) => {
		return (
			<div key={index} className="container">
				<p>{video.title}</p>
				<iframe
					src={video.src}
					title="Video recommendations"
					className="container_video"
				></iframe>
			</div>
		);
	});

	return <p>{mapVideos}</p>;
};

export default Videos;
