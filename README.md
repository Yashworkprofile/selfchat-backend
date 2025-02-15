# 🛠 SelfChat Backend – Strapi 5 + Socket.io  

This is the backend for **SelfChat**, a real-time chat application built with **Strapi 5** and **Socket.io**. It manages chat messages and user interactions, storing messages in an SQLite database.  

---

## 🚀 Features  
- **Strapi 5 backend** with a structured API  
- **Socket.io integration** for real-time communication  
- **CORS-enabled** for secure frontend-backend interaction  
- **SQLite database** for storing chat messages  

---

## 📌 Tech Stack  
- **Backend Framework:** Strapi 5  
- **WebSocket Communication:** Socket.io  
- **Database:** SQLite (default)  
- **Deployment:** Render  

---

## 📂 Collection: `message`  

The backend stores chat messages in a **Strapi collection** named `message`, which includes the following fields:  

| Field        | Type      | Description                              |
|-------------|----------|------------------------------------------|
| `id`        | Integer  | Auto-generated unique message ID        |
| `user`      | String   | Username of the sender                  |
| `message`   | Text     | The actual chat message                 |
| `createdAt` | DateTime | Timestamp of when the message was sent  |

---

## 🔗 API Endpoints  

### 1️⃣ **Fetch Messages**  
**GET** `/api/messages`  
- Retrieves all stored messages.  

### 2️⃣ **Send a Message**  
**POST** `/api/messages`  
- Saves a new message to the database.  
- Requires `user` and `message` in the request body.  

```json
{
  "data": {
    "user": "John",
    "message": "Hello, world!"
  }
}
