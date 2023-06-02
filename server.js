const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// const Totalnotes = require('./Develop/db/db.json');

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));





function newNotes()
function deleteNotes()

app.deleteNotes()
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
}); 



