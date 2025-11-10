import SendButton from "./sendButton";
import { useState } from "react";
import BackButton from "./backButton";
import { FaArrowLeft } from "react-icons/fa";

function ReviewForm({ formData, onSubmit, onSend, onBack }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  if (!formData) {
    return (
      <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-700">
        <p>Inget inskickat ännu...</p>
      </div>
    );
  }

  // Debug: visa vad som finns i formData
  console.log("FormData i ReviewForm:", formData);

  const currentDate = new Date().toLocaleDateString('sv-SE');

  return (
    <div>
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
      overflow: "hidden"
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}>
        <h1 style={{ 
          margin: "0", 
          fontSize: "24px", 
          fontWeight: "600" 
        }}>
          OFFERT
        </h1>
        <p style={{ 
          margin: "5px 0 0 0", 
          opacity: "0.9",
          fontSize: "14px"
        }}>
          {currentDate}
        </p>
      </div>

      <div style={{ padding: "20px" }}>
         <div style={{
          border: "1px solid #e9ecef",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "12px 15px",
            borderBottom: "1px solid #e9ecef",
            fontSize: "16px",
            fontWeight: "600",
            color: "#007bff",
          }}>
            Avsändare
          </div>
            <div style={{ padding: "15px" }}>
            <div style={{ marginBottom: "10px" }}>
              <p style={{ color: "#333333" }}><strong>{formData.foretag} </strong></p>
            </div>
       </div>
          </div>

       

        <div style={{
          border: "1px solid #e9ecef",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <div style={{
            backgroundColor: "#f8f9fa",
            padding: "12px 15px",
            borderBottom: "1px solid #e9ecef",
            fontSize: "16px",
            fontWeight: "600",
            color: "#007bff",
          }}>
            Tjänst
          </div>
          <div style={{ padding: "15px" }}>
            <div style={{ marginBottom: "10px" }}>
              <p style={{ color: "#333333" }}><strong>{formData.tjanst || "Ingen tjänst angiven"}</strong></p>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px"
            }}>
              <span style={{ color: "#333333" }}>Antal timmar:</span>
              <strong style={{ color: "#333333" }}>{formData.timmar} tim</strong>
            </div>
          </div>
        </div>
         {formData.image && (
          <div style={{
            textAlign: "center",
            marginBottom: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
           
          }}>
            <img
              src={formData.image}
              alt="Projekt"
              style={{
                width: "100%",
                
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />
          </div>
        )}

        {/* Price Summary */}
        <div style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #e9ecef",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "20px"
        }}>
          <div style={{
            marginBottom: "10px",
            fontSize: "16px"
          }}>
            <p style={{ color: "#007bff", }}><strong>Totalt</strong></p>
            <strong style={{
             color: "#333333",
              fontSize: "18px"
            }}>
              {formData.pris} kr
            </strong>
          </div>
          <div style={{
            fontSize: "12px",
            color: "#333333",
          }}>
            Exkl. moms
          </div>
        </div>

        
      </div>
    </div>
    {!isSubmitted ? (
          <div style={{textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={onBack}
              style={{
                color: "white",
                backgroundColor: "#007bff",
                borderRadius: "6px",
                padding:'24px',
                cursor: "pointer",
                width: "75%",
           
              }}
            >
              Ändra
            </button>
            <div style={{ flex: "1" }}>
              <SendButton onSubmit={handleSubmit} />
            </div>
          </div>
        ) : (
          <div style={{
            textAlign: "center",
            backgroundColor: "#d4edda",
            padding: "20px",
            borderRadius: "8px",
            marginTop: "20px"
          }}>
            <h3 style={{
              color: "#155724",
              margin: "0 0 15px 0",
              fontSize: "18px"
            }}>
              Offert skickad! Mottagaren har aviserats
            </h3>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "24px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              Ny offert
            </button>
          </div>
        )}
        </div>
  )
}

export default ReviewForm;
