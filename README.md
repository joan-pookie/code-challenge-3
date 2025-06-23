# 🪑 Furniture Blog Web App

A simple (Create, Read, Update, Delete) blog application for a furniture store, built with HTML, CSS, JavaScript, and a mock JSON API using `json-server`.

---

## 🚀 Features

- ✅ View a list of blog posts with furniture items.
- ✅ Click on a post to view full details (title, content, image, and author).
- ✅ Submit a new furniture post using a form (adds to both the frontend and backend).
- ✅ Edit the title and content of existing posts.
- ✅ Delete a post permanently from the backend and DOM.
- ✅ Live updates to the page without refreshing.

---

## 🧱 Built With

- HTML5 & CSS3
- JavaScript (Vanilla)
- JSON Server (`json-server`)
- Git & GitHub for version control

---

## 📁 File Structure

```
code-challenge-3/
│
├── index.html           # Main HTML structure
├── db.json              # JSON database for posts
├── css/
│   └── styles.css       # Styling
└── src/
    └── index.js         # JavaScript logic
```

---

## ⚙️ Getting Started Locally

> 💡 You'll need [Node.js](https://nodejs.org/) and `json-server` installed globally.

1. **Clone the repository**
```bash
git clone git@github.com:joan-pookie/code-challenge-3.git
cd code-challenge-3
```

2. **Install json-server (if not already installed)**
```bash
npm install -g json-server
```

3. **Start the JSON server**
```bash
json-server db.json
```

This will run your mock API at `http://localhost:3000/posts`

4. **Open the `index.html` in your browser**
   - You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or simply double-click the file.

---

## 🌐 GitHub Pages (Live Demo)

> Deployed version:  
👉 [https://joan-pookie.github.io/code-challenge-3/](https://joan-pookie.github.io/code-challenge-3/) *(example — replace with real URL if available)*

---

## 📚 Learning Goals Covered

- Access and display data from an API using `GET`.
- Update the DOM based on user events.
- Send `POST`, `PATCH`, and `DELETE` requests to a server.
- Manage form inputs, event listeners, and client-side rendering.

---

## 🙋‍♀️ Author

**Joan Pookie**  
Moringa School — Software Engineering Student  
[GitHub: joan-pookie](https://github.com/joan-pookie)

---

## ✅ Status

✔️ Finished and submitted as part of **Phase 1 Code Challenge**.
