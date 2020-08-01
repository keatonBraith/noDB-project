const memories = require("./memories.json");
let nextId = 3;

module.exports = {
  getMemories: (req, res) => {
    return res.status(200).send(memories);
  },
  addMemories: (req, res) => {
    const { url, description, date } = req.body;
    const newMemory = {
      id: nextId,
      url,
      description,
      date,
    };
    nextId++;
    memories.push(newMemory);
    return res.status(200).send(memories);
  },
  editMemories: (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    const index = memories.findIndex((elem) => {
      return elem.id === +id;
    });
    console.log(req.body);
    console.log(index);
    memories[index].description = description;
    return res.status(200).send(memories);
  },
  deleteMemories: (req, res) => {
    let { id } = req.params;
    const index = memories.findIndex((memory) => memory.id === +id);
    if (index === -1) {
      res.status(404).send("Memory not found");
    } else {
      memories.splice(index, 1);
      res.status(200).send(memories);
    }
  },
  addRecording: (req, res) => {
    let { id } = req.params;
    const recording = "";
    const index = memories.findIndex((elem) => {
      return elem.id === +id;
    });
    memories[index].recording = recording;
    console.log(memories);
    res.status(200).send(memories);
  },
};
