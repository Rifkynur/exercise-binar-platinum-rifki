import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, resolvePath } from "react-router-dom";

// Komponen halaman
function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Profile() {
  return <h1>Profile</h1>;
}

// Komponen yang menunjukkan penggunaan resolvePath
function Navigation() {
  const location = useLocation();

  // Menyelesaikan path relatif berdasarkan lokasi saat ini
  const resolvedPath = resolvePath("profile", location.pathname);

  return (
    <div>
      <h2>Current Location: {location.pathname}</h2>
      <p>Resolved Path: {resolvedPath.pathname}</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={resolvedPath.pathname}>Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
