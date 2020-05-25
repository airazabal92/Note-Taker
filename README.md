![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

# Note Taker

## Description

An application that can be used to write, save, and delete notes. The application uses an express backend to save and retrieve note data from a JSON file.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)

## Technologies Used

- Node.js
- Express
- JSON
- AJAX
- Bootstrap

## Installation

Download all files and open server.js to initiate the server. Then visit <b>localhost:300</b> to start the application.

The application is invoked with the following command:

```sh
node server.js
```

The <b>db</b> folder contains <b> db.json </b> which will save the notes.

The <b>public</b> folder contains an <b>assets</b> folder with <b>css</b> and <b>js</b> subfolders. The <b>js</b> folder contains the <b>index.js</b> file, which makes AJAX calls to the API to add, delete, and view all notes.The <b>public</b> folder also has the index.html and notes.html files.

The <b>routing</b> folder has <b>api-routes.js</b> and <b>html-routes.js</b> files. These files establish the following routes that are used in the application:

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

The <b>server.js</b> files initiates the server and should be run to start the application.

## Questions

If you have any questions, feel free to reach out!

 <img src="https://avatars0.githubusercontent.com/u/60761756?v=4" width="100">
  
 GitHub: airazabal92

## License

Licensed under the [MIT](https://github.com/microsoft/vscode/blob/master/LICENSE.txt) license.
