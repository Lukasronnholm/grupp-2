import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function SignComplete() {
  const navigate = useNavigate();

  return (
    <>
    <button style={{
        background: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        overflow:'auto',
        top: "10px",
        fontSize: "1rem",
        border: "1px solid #007bff",
        width: "fit-content",
        margin: "10px",

      }} onClick={() => { window.scrollTo(0, 0); navigate('/receiver'); }}><FaArrowLeft size={20} /></button>
    <div style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    borderRadius: "12px",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    marginTop: "60px"
                }}>

      
      <div style={{
        textAlign: "center",
        background: "white",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "0 20px"
      }}>
        
        <div style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#28a745",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.5rem"
        }}>
          <span style={{
            color: "white",
            fontSize: "40px",
            fontWeight: "bold"
          }}>✓</span>
        </div>

        <h2 style={{
          color: "#333",
          fontSize: "1.5rem",
          marginBottom: "0.5rem"
        }}>
          Offerten är signerad!
        </h2>
        
        <p style={{
          color: "#333333",
          marginBottom: "1.5rem"
        }}>
          Din offert har signerats med BankID och sändare har blivit aviserad.
        </p>

      </div>       

    </div>
    </>
  );
}

export default SignComplete;
