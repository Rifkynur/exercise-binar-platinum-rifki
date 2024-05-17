import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

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

// Definisikan rute menggunakan elemen JSX dan createRoutesFromElements
const routes = createRoutesFromElements(
  <Route path="/" element={<Home />}>
    <Route path="about" element={<About />} />
    <Route path="profile" element={<Profile />} />
  </Route>
);

// Buat router menggunakan rute yang telah didefinisikan
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
