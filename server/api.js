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
	try {
		await db.query(`INSERT INTO videos (title, src) VALUES ($1, $2)`, [req.body.title, req.body.src])
		res.send({
			success: true,
			message: `Video added successfully: ${req.body.title}, ${req.body.src}`
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			error: "Video could not be added"
		});
	}
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
