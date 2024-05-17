import React from "react";
import { createMemoryRouter, RouterProvider, Route } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
];

// Buat router dengan menggunakan createMemoryRouter
const router = createMemoryRouter(routes, {
  initialEntries: ["/"], // Jalur awal
  initialIndex: 0, // Indeks awal
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
