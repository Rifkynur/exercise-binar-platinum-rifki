import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/{id?}" element={<ProductDetail />} />
    </Routes>
  );
};

export const ProductDetail = () => {
  const { id } = useParams();
  return <div>{id ? `Detail for product with ID ${id}` : "No product ID specified"}</div>;
};
