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


export default router;
