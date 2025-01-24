### 1️⃣ **Install Dependencies**
You'll need these core dependencies:
```sh
npm install express mongoose dotenv
```
And these for TypeScript and development:
```sh
npm install --save-dev typescript ts-node @types/node @types/express nodemon
```

---

### 2️ **Run Your Server**
Add this to your `package.json`:
```json
"scripts": {
  "dev": "nodemon --exec ts-node src/server.ts"
}
```
Then run:
```sh
npm run dev
```

---

### 🎉 **API Endpoints**
- `POST /users` → Create a user
- `GET /users` → Get all users

This setup keeps things minimal with just **models and controllers** while ensuring routes are still accessible.

Let me know if you need modifications or additional features like authentication! 🚀
