import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category/:id" element={<ProductDetail />} />
    </Routes>
  );
}

const ProductDetail = () => {
  const { category, id } = useParams();

  return (
    <div>
      <h1>
        {category} - Product {id}
      </h1>
    </div>
  );
};
