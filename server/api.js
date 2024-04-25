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

export default router;
