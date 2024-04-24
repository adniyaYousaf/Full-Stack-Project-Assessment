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

export default router;
