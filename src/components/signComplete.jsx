import BackButton from "./backButton";

function SignComplete() {
  return (
    <>
    <BackButton />
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
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
        
        {/* Enkel checkmark */}
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
