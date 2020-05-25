const noteData = require("../db/db.json");
// const fs = require("fs");
// const path = require("path");
// const databasePath = path.join(__dirname, "../db/db.js");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);
    res.json(noteData);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    let removeIndex;

    for (let i = 0; i < noteData.length; i++) {
      if (noteData[i].id === noteId) {
        removeIndex = i;
      }
    }

    noteData.splice(removeIndex, 1);

    res.json(noteData);
  });

  // app.delete("/api/notes/:id", (req, res) => {
  //   let noteId = req.params.id;
  //   let removeIndex;
  //   let rawData = "";
  //   console.log("hello");

  //   console.log("hello again");
  //   console.log(databasePath);

  //   rawData = fs.readFileSync(databasePath);
  //   console.log(rawData);

  //   //   fileLocation, (err, data) => {
  //   //   if (err) {
  //   //     console.log("THIS ONE" + err);
  //   //   }
  //   //   console.log(data);
  //   //   rawData = data;
  //   //   console.log(rawData);
  //   // });

  //   let currentNotes = JSON.parse(rawData);
  //   console.log(currentNotes);

  //   for (let i = 0; i < currentNotes.length; i++) {
  //     if (currentNotes[i].id === noteId) {
  //       removeIndex = i;
  //     }
  //   }

  //   console.log("INDEX TO REMOVE" + removeIndex);

  //   currentNotes.splice(removeIndex, 1);

  //   console.log("NEW ARRAY" + currentNotes);

  //   var writeNotes = JSON.stringify(currentNotes);

  //   fs.writeFileSync(databasePath, writeNotes);

  //   console.log("DELETED");
  // });
};
