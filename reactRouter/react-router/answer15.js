import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, matchPath } from "react-router-dom";

// Halaman Home
function Home() {
  return <h1>Home</h1>;
}

// Halaman About
function About() {
  return <h1>About</h1>;
}

// Halaman Profile
function Profile() {
  return <h1>Profile</h1>;
}

// Komponen Breadcrumbs
function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location);

  return (
    <nav>
      <ul>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <Link to={breadcrumb.path}>{breadcrumb.breadcrumb}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Fungsi untuk menghasilkan breadcrumbs berdasarkan lokasi
function generateBreadcrumbs(location) {
  const paths = location.pathname.split("/").filter((x) => x);
  const breadcrumbs = [];

  paths.reduce((prevPath, currPath, index) => {
    const currentPath = `${prevPath}/${currPath}`;
    breadcrumbs.push({
      path: currentPath,
      breadcrumb: currPath.charAt(0).toUpperCase() + currPath.slice(1), // Mengubah path menjadi Title Case
    });
    return currentPath;
  }, "");

  return [{ path: "/", breadcrumb: "Home" }, ...breadcrumbs];
}

function App() {
  return (
    <Router>
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
