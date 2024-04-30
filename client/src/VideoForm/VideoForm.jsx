import "./VideoForm.scss";
const VideoForm = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className="form">
			<label htmlFor="title" className="form__label">
				Title
				<input type="text" name="title" className="form__input" />
			</label>
			<label htmlFor="source" className="form__label">
				URL
				<input type="text" name="src" className="form__input" />
			</label>
			<button type="submit" className="form__btn">
				Submit
			</button>
		</form>
	);
};

export default VideoForm;
