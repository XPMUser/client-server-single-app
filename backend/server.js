const express = require("express");
const app = express();
const data = require("./utils/data");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// ROUTES

app.get("/data", async (req, res) => {
	console.log("=================");
	console.log("/data");

	try {
		console.log("data sent");
		res.send(data);
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: "error, see server logs" });
	}
});

// SHOULD BE AT THE END

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));
