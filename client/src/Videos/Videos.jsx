import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "./videos.scss";

const formatDate = (d) => {
	let date = new Date(d);
	return date.toDateString();
};

const Videos = (props) => {
	const mapVideos = props.video.map((video, index) => {
		return (
			<div key={index} className="container">
				<iframe
					src={video.src}
					title="Video recommendations"
					className="container_video"
				></iframe>
				<div className="container_btns">
					<div className="container_btns_time">
						<p>
							<strong>Time:</strong><span> {formatDate(video.addeddate)}</span>
						</p>
					</div>
					<div className="container_btns_thumb-box">
						<FaThumbsUp
							className="container_btns_thumb-box_thumb"
							onClick={() => props.update(video.id, "up")}
						/>
					</div>
					<div className="container_btns_thumb-box">
						<FaThumbsDown
							className="container_btns_thumb-box_thumb"
							onClick={() => props.update(video.id, "down")}
						/>
					</div>
					<button
						className="container_btns_delbtn"
						onClick={() => props.click(video.id)}
					>
						Delete
					</button>
				</div>
				<div className="container_title">
					<p>{video.title}</p>
					<p className="container_title_rating">
						Rating {video.rating}
						<span>
							<FaHeart />
						</span>
					</p>
				</div>
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
