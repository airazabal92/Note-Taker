![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Note Taker

## Description

An application that can be used to write, save, and delete notes. The application uses an express backend to save and retrieve note data from a JSON file.

<img src="https://i.imgur.com/ZBnPBmy.png">

## Table of Contents

- [Application](#application)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)

## Application

To view the deployed application on Heroku, visit:
<a href="https://note-taker-ai.herokuapp.com/" target="_blank">https://note-taker-ai.herokuapp.com/</a>

## Technologies Used

- Node.js
- Express
- JSON
- AJAX
- Bootstrap
- Heroku

## Installation

Download all files and open server.js to initiate the server. Then visit <b>localhost:300</b> to start the application.

The application is invoked with the following command:

```sh
node server.js
```

<b>DB FOLDER</b>

- Contains <b> db.json </b> which will save the notes.

<b>PUBLIC FOLDER</b>

- Contains an <b>assets</b> folder with <b>css</b> and <b>js</b> subfolders.
- The <b>js</b> folder contains the <b>index.js</b> file, which makes AJAX calls to the API to add, delete, and view all notes.
- The <b>public</b> folder also has the <b>index.html</b> and <b>notes.html</b> files.

<b>ROUTING FOLDER</b>

- Contains <b>api-routes.js</b> and <b>html-routes.js</b> files. These files establish the following routes that are used in the application:

<b>HTML ROUTES</b>

```sh
localhost:300 // To view the homepage
localhost:300/notes // To view the notes page
```

<b>API ROUTES</b>

```sh
GET request to localhost:300/api/notes // To view all notes - JSON format
POST request to localhost:300/api/notes // To post a new note
DELETE request to localhost:300/api/notes/:id // To remove a note - requires id of note to remove (first note is given id 1, etc.)
```

<b>SERVER.JS</b>

- The <b>server.js</b> files initiates the server and should be run to start the application.

## Questions

If you have any questions, feel free to reach out!

 <img src="https://avatars0.githubusercontent.com/u/60761756?v=4" width="100">
  
 GitHub: airazabal92

## License

Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) license.
