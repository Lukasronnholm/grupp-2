import { useState } from "react";

export default function SendButton({ onSubmit, isFormValid = true }) {
  const [email, setEmail] = useState("");

  function handleChange(event) {
    setEmail(event.target.value)
  }
  
  function handleEmailSubmit(event) {
    event.preventDefault();
    
    if (!isFormValid) {
      return;
    }
    
    if (email !== "" && onSubmit) {
      onSubmit(email); // Skicka email till callback
    }
  }

  const canSubmit = isFormValid && email !== "";

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <input 
        type="email" 
        value={email} 
        onChange={handleChange}
        placeholder="Mottagarens email"
        style={{
          width: "100%",
          padding: "24px",
          marginTop: "5px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          marginTop: "60px",
          fontSize: "18px",
          outline: "none",
          boxSizing: "border-box"
        }}
      />
      <button 
        onClick={handleEmailSubmit}
        disabled={!canSubmit}
        style={{
          width: '75%',
          padding: "24px",
          backgroundColor: canSubmit ? "#007bff" : "#e9ecef",
          color: canSubmit ? "white" : "#6c757d",
          border: "none",
          borderRadius: "4px",
          cursor: canSubmit ? "pointer" : "not-allowed",
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "10px",


        }}
      >
        {email === "" ? "Ange email" : "Skicka offert"}
      </button>
    </div>
  )
}
