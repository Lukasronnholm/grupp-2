import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackButton({ color = "#333" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: color,
        fontSize: "1rem",
      }}
    >
      <FaArrowLeft size={20} />
    </button>
  );
}

export default BackButton;
