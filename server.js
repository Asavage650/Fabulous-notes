const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const Totalnotes = require("./db/db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
  res.json(Totalnotes.slice(1));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

function createNewNotes(body, notesArray) {
  const newNotes = body;
  if (!Array.isArray(notesArray)) notesArray = [];
  if (notesArray.length === 0) notesArray.push(0);

  body.id = notesArray[0];
  notesArray[0]++;

  notesArray.push(newNotes);
  fs.writeFileSync(
    path.json(__dirname, "./db/db.json"),
    JSON.stringify(notesArray, NULL, 2)
  );
  return newNotes;
}
app.post("/api/notes", (req, res) => {
  const newNotes = createNewNotes(req.body, Totalnotes);
  res.json(newNotes);
});
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
