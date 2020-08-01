const express = require("express");
const app = express();
const ctrl = require("./controller");
const port = 4006;

app.use(express.json());

app.get("/api/memories", ctrl.getMemories);
app.post("/api/memories", ctrl.addMemories);
app.put("/api/memories/edit/:id", ctrl.editMemories);
app.put("/api/memories/recording/:id", ctrl.addRecording);
app.delete("/api/memories/:id", ctrl.deleteMemories);

app.listen(port, () => console.log(`We've landed on the moon at port ${port}`));
