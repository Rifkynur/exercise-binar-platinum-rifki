import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  // Gunakan fungsi navigate sesuai kebutuhan
  const handleNavigation = () => {
    navigate("/about"); // Navigasi ke rute '/about'
  };

  return (
    <div>
      <button onClick={handleNavigation}>Go to About Page</button>
    </div>
  );
};

export default MyComponent;
