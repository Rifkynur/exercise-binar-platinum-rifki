import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home page
export const Home = () => {
  return <h1>Home Page</h1>;
};

// about page

export const About = () => {
  return <h1>About Page</h1>;
};

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
