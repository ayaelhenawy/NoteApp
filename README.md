NoteApp
NoteApp is a simple web application that allows users to create, edit, and delete notes. It interacts with an API to display the notes, and it has full CRUD functionality (Create, Read, Update, Delete).

Features
Display notes fetched from an API.
Add new notes.
Edit existing notes.
Delete notes.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MySQL
API Tool: Postman for testing and interacting with the API
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version 14+ recommended)
MySQL
Git
Postman (optional, for API testing)
Installation
Clone the repository:
git clone https://github.com/ayaelhenawy/NoteApp.git
cd NoteApp
Install dependencies: Run the following command to install the required Node.js dependencies:
npm install
Start the server:
npm start
The application will be running on http://localhost:3000.

API Endpoints
The NoteApp has the following API endpoints for managing notes:

GET /notes: Fetch all notes.
POST /notes: Add a new note.
PUT /notes/:id: Update an existing note.
DELETE /notes/:id: Delete a note.
