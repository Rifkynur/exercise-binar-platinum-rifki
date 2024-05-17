import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { generatePath } from "react-router-dom";

function Home() {
  const userId = "12345";
  const userProfilePath = generatePath("/user/:userId", { userId });

  return (
    <div>
      <h1>Home</h1>
      <Link to={userProfilePath}>Go to User Profile</Link>
    </div>
  );
}

function UserProfile({ userId }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
