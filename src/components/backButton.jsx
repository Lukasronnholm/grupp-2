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
        position: "fixed",
        top: "10px",
        left: "10px",
        gap: "8px",
        fontSize: "1rem",
        border: "1px solid " + '#007bff',
        width: "fit-content",
        margin: "10px",

      }}
    >
      <FaArrowLeft size={20} />
    </button>
  );
}

export default BackButton;
