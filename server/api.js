import { Router } from "express";
import db from "./db.js";
const router = Router();
import getVideoId from 'get-video-id';

router.get("/videos", async (_, res) => {
	const result = await db.query("SELECT * FROM videos");

	result
		? res.send(result.rows)
		: res
			.status(500)
			.send({ success: "false", error: "Could not connect to database" });
});

const apiKey = 'AIzaSyDmJOjy9aSsy_kcaaPJS-EH4pX9BaaafBg';

const youtubeTitle = async (url) => {
	const id = getVideoId(url);
	return await fetch(
		`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id.id}&key=${apiKey}`
	)
		.then((res) => res.json())
		.then((data) =>
			data.items.length == 0 ? "Error" : data.items[0].snippet.title);

}

router.post("/videos", async (req, res) => {
	const title = req.body.title || (await youtubeTitle(req.body.src));
	try {
		await db.query(`INSERT INTO videos (title, src) VALUES ($1, $2)`, [title, req.body.src])
		res.send({
			success: true,
			message: title
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			error: "Video could not be added"
		});
	}
});
export default router;
