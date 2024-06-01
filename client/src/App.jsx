import Videos from "./Videos/Videos";
import { useState, useEffect } from "react";
import VideoForm from "./VideoForm/VideoForm";
import { FaSortDown } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa";
import "./App.scss";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [fetchedVideos, setFetchedVideos] = useState(true);

	useEffect(() => {
		if (fetchedVideos) {
			fetch("/api/videos")
				.then((res) => res.json())
				.then((data) => {
					setVideos(data);
				});
			setFetchedVideos(false);
		}
	}, [fetchedVideos]);

	const handleSort = async (sort) => {
		await fetch(`/api/videos/${sort}`)
			.then((res) => res.json())
			.then((data) => {
				setVideos(data);
			});
		setFetchedVideos(false);
	};

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

	const handleDelete = async (id) => {
		const response = await fetch(`/api/videos/${id}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			console.log("Could not delete the video.");
		}
		setFetchedVideos(true);
	};

	const handleUpdate = async (id, vote) => {
		let response = await fetch(`/api/videos/${id}/${vote}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			setFetchedVideos(true);
		}
	};

	return (
		<>
			<h1>Video Recommendations</h1>
			<div className="sort">
				<button className="sort_btn">
					<FaSortUp onClick={() => handleSort("asc")} />
				</button>
				<button className="sort_btn">
					<FaSortDown onClick={() => handleSort("desc")} />
				</button>
			</div>
			<Videos video={videos} update={handleUpdate} click={handleDelete} />
			<div className="form-box">
				<VideoForm handleSubmit={handleSubmit} />
				<div className="form-box_heading">Add Recommendations here!!</div>
			</div>
		</>
	);
};

export default App;
