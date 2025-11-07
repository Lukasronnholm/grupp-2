import { useState } from "react";

export default function SendButton({ onSubmit, isFormValid = true }) {
  const [email, setEmail] = useState("");
  
  console.log("SendButton: onSubmit prop:", onSubmit);

  function handleChange(event) {
    setEmail(event.target.value)
  }
  
  function handleEmailSubmit(event) {
    event.preventDefault();
    console.log("Knappen trycktes! Email:", email);
    
    if (!isFormValid) {
      console.log("ERROR: Formuläret är inte komplett!");
      return;
    }
    
    if (email !== "") {
      console.log("Email är ifylld, anropar onSubmit");
      if (onSubmit) {
        console.log("onSubmit finns, anropar den nu!");
        onSubmit(email); // Skicka email till callback
      } else {
        console.log("ERROR: onSubmit finns inte!");
      }
    } else {
      console.log("ERROR: Email är tom!");
    }
  }

  const canSubmit = isFormValid && email !== "";

  return (
    <>
      <label style={{ display: "block", marginBottom: "15px" }}>
        Mejladress:
        <input 
          type="email" 
          name="mejladress" 
          value={email} 
          onChange={handleChange}
          placeholder="ange@email.se"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            border: email ? "2px solid #4CAF50" : "2px solid #ddd",
            borderRadius: "4px"
          }}
        />
      </label>
      <button 
        onClick={handleEmailSubmit}
        disabled={!canSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: canSubmit ? "#28a745" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: canSubmit ? "pointer" : "not-allowed",
          marginBottom: "10px"
        }}
      >
        {!isFormValid 
          ? "Fyll i formuläret först" 
          : email === "" 
            ? "Ange email först" 
            : "Skicka formulär"
        }
      </button>
    </>
  )
}
