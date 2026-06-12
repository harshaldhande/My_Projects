const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notes = [];

// GET all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// CREATE note
app.post("/notes", (req, res) => {
    const note = {
        id: Date.now(),
        text: req.body.text
    };

    notes.push(note);
    res.json(note);
});

// DELETE note
app.delete("/notes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    notes = notes.filter(note => note.id !== id);
    res.json({ message: "Note deleted" });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});