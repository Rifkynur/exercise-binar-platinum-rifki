import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rute-rute lainnya */}
      </Routes>
    </Router>
  );
}

export default App;

// atau dengan mengguanakan useRoutes
import { useRoutes } from "react-router-dom";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  // Tambahkan rute-rute lainnya di sini
  { path: "*", element: <NotFoundPage /> }, // Rute fallback untuk halaman yang tidak ditemukan
];
export function App2() {
  const routing = useRoutes(routes);

  return <Router>{routing}</Router>;
}
