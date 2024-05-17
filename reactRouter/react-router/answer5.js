import { useNavigate } from "react-router-dom";
function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Contoh navigasi ketika tombol diklik
    navigate("/about");
  };

  return (
    <div>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
}
