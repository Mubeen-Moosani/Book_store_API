# 📚 Book Store RESTful API

A Node.js + Express backend API for managing a bookstore inventory with full CRUD functionality, deployed on Vercel.

## 🚀 Live API

[https://book-store-api-pi-topaz.vercel.app/]

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Vercel (Deployment)

## 📦 Features

- Add, update, delete, and fetch books
- Error handling and async middleware
- Modular route and controller structure

## 📘 API Endpoints

| Method | Endpoint                 | Description                  |
| ------ | ------------------------ | ---------------------------- |
| GET    | `/api/books`             | Get all books (with filters) |
| GET    | `/api/books/:id`         | Get a single book by ID      |
| POST   | `/api/books/create-book` | Add a new book               |
| PUT    | `/api/books/edit/:id`    | Update an existing book      |
| DELETE | `/api/books/:id`         | Delete a book                |

## Create a `.env` file and add your MongoDB connection string:

```
MONGO_URL=your_mongo_db_connection_string
```

## Run the server locally:

-npm run dev

## 📂 Folder Structure

```
├── api/index.json
├── controllers/
├── models/
├── routes/
├── .env
└── package.json
```

## ✍️ Author

**Mubeen Moosani**

- [LinkedIn](https://www.linkedin.com/in/mubeen-moosani-22668b289/)
