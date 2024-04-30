import { Router } from "express";
import db from "./db.js";
const router = Router();

router.get("/videos", async (_, res) => {
	const result = await db.query("SELECT * FROM videos");
	result
		? res.send(result.rows)
		: res
			.status(500)
			.send({ success: "false", error: "Could not connect to database" });
});

router.post("/videos", async (req, res) => {
	const newVideo = await db.query(
		`INSERT INTO videos (title, src) VALUES ('${req.body.title}', '${req.body.src}')`
	);
	res.send(
		newVideo
			? res.send({ success: "Video added successfully" })
			: res.send({ error: "Video could not be added" })
	);
});

router.delete("/videos/:id", async (req, res) => {
	const id = req.params.id;

	const deletedVideo = await db.query(
		`DELETE FROM videos WHERE id='${id}'`
	);

	deletedVideo
		? res.status(200).send({ success: "Deleted the video successfully" })
		: res.status(404).send({ error: "Id for the video does not exist" })
})

export default router;
