import "./videos.scss";

const Videos = (props) => {
	const mapVideos = props.video.map((video, index) => {
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

	return (
		<>
			<div className="container-box">{mapVideos}</div>
		</>
	);
};

export default Videos;
