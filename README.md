
# 📝 NoteApp

**NoteApp** is a simple web application that allows users to create, edit, and delete notes. It interacts with an API to display the notes and offers full CRUD functionality (Create, Read, Update, Delete).

---

## 🚀 Features

- 📑 **Display Notes**: Fetch and display notes from an API.
- ➕ **Add New Notes**: Create new notes with ease.
- ✏️ **Edit Notes**: Modify existing notes.
- 🗑️ **Delete Notes**: Remove notes you no longer need.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API Testing**: Postman

---

## 🔧 Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (optional)

---

## 📦 Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/ayaelhenawy/NoteApp.git
   cd NoteApp
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Database setup**:
   - Create a MySQL database.
   - Update the MySQL connection details in `config/database.js` with your database name, username, and password.

4. **Run migrations** (if applicable):
   \`\`\`bash
   npm run migrate
   \`\`\`

5. **Start the server**:
   \`\`\`bash
   nodemom
   \`\`\`

   The app will be running on `http://localhost:3000`.

---

## 🔗 API Endpoints

| HTTP Method | Endpoint        | Description             |
|-------------|-----------------|-------------------------|
| `GET`       | `/notes`        | Fetch all notes         |
| `POST`      | `/notes`        | Add a new note          |
| `PUT`       | `/notes/:id`    | Update an existing note |
| `DELETE`    | `/notes/:id`    | Delete a note           |

---

## 💻 Usage

1. Open your browser and go to `http://localhost:3000` to interact with the UI.
2. Use the app to view, add, edit, or delete notes.
3. Alternatively, you can use Postman or any API client to interact with the endpoints.

---


