# 🏆 Leaderboard Task Explanation 

This is a **full-stack application** that allows users to:

✅ Select a user from the list  
✅ Claim random points (1-10) for that user  
✅ Dynamically display user rankings based on total points  
✅ Add new users from the frontend (stored in database)  
✅ View a real-time leaderboard with ranks

---

## 🚀 **Tech Stack**

- **Frontend:** ReactJS, Bootstrap 5
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas

---

## 🔧 **Features**

1. **User Selection**
   - Dropdown to select any user.
   - Add new user via form.

2. **Claim Points**
   - Claim button awards **random points (1-10)** to selected user.
   - Updates leaderboard in real time.

3. **Leaderboard**
   - Displays users ranked by total points.
   - Shows top 3 users as cards above leaderboard.

4. **History**
   - All claim actions are saved in the database history collection.

---

## 🌐 **Live Demo**

 Frontend (Netlify/Vercel URL):** [View here](https://leaderboard-task-explanation.netlify.app)




## 📂 **Project Structure**

frontend/
┣ src/
┃ ┣ components/
┃ ┃ ┣ Navbar.js
┃ ┃ ┣ UserSelector.js
┃ ┃ ┣ AddUserForm.js
┃ ┃ ┣ Leaderboard.js
┃ ┃ ┗ Home.js
┃ ┣ api.js
┃ ┣ App.js
┃ ┗ index.js
┣ package.json
┗ README.md

backend/
┣ models/
┃ ┣ User.js
┃ ┗ History.js
┣ routes/
┃ ┗ userRoutes.js
┣ server.js
┣ package.json
┗ README.md

## 🛠️ **Setup & Run Locally**

1. **Clone the repository**

git clone https://github.com/mukeshpatel07/repo-name.git
cd repo-name

Frontend
cd frontend
npm install
npm start

Backend
cd backend
npm install
node server.js
✔️ Make sure MongoDB connection URI is updated in backend/server.js.

💡 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License
This project is open-source and free to use under the MIT License.

✨ Author
Name: Mukesh Patel

GitHub: @mukeshpatel07

Project: Leaderboard Task Explaination
