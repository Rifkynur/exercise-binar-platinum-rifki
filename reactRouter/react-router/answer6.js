import { Navigate } from "react-router-dom";

function MyComponent() {
  const redirect = true;

  return <div>{redirect && <Navigate to="/about" />}</div>;
}
