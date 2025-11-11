import { useState } from "react";
import SendButton from "./sendButton";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./imageUpload";
import { FaArrowLeft } from "react-icons/fa";


function OfferForm({ addOffer, onPreview, initialData, setHasSignedButNotSent }) {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(
    initialData || {
      foretag: "",
      tjanst: "",
      timmar: "",
      pris: "",
      image: null,
    }
  );

  const isFormValid =
    formData.foretag && formData.tjanst && formData.timmar && formData.pris;

  function handleSubmit(event) {
    event.preventDefault();
    const newOffer = {
      id: new Date(),
      ...formData,
      createdAt: new Date().toISOString(),
      isNew: true,
    };
    addOffer(newOffer);
    if (OfferForm.onSubmit) OfferForm.onSubmit(newOffer);
    setFormData({
      foretag: "",
      tjanst: "",
      timmar: "",
      pris: "",
      image: null,
    });
  }

  

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleImageSelect(imageBase64) {
    setFormData((prevData) => ({
      ...prevData,
      image: imageBase64,
    }));
  }

  return (
    <>
      <form>
        
        
        <div style={{ display: "block", marginTop: "20px" }}>
          <p><strong>Företag:</strong></p>
          {!isSubmitted ? (
            <input
              type="text"
              name="foretag"
              value={formData.foretag}
              onChange={handleChange}
              placeholder="Ange företagsnamn"
              required
              style={{
                width: "100%",
                padding: "24px",
                marginTop: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          ) : (
            <p>
              {formData.foretag}
            </p>
          )}
        </div>

        <div style={{ display: "block", marginTop: "20px" }}>
          <p><strong>Tjänst:</strong></p>
          {!isSubmitted ? (
            <input
              type="text"
              name="tjanst"
              value={formData.tjanst}
              onChange={handleChange}
              placeholder="Beskriv tjänsten"
              required
              style={{
                width: "100%",
                padding: "24px",
                marginTop: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          ) : (
            <p>
              {formData.tjanst}
            </p>
          )}
        </div>

        <div style={{ display: "block", marginTop: "20px" }}>
          <p><strong>Timmar:</strong></p>
          {!isSubmitted ? (
            <input
              type="number"
              name="timmar"
              value={formData.timmar}
              onChange={handleChange}
              placeholder="Antal timmar"
              required
              min="1"
              style={{
                width: "100%",
                padding: "24px",
                marginTop: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          ) : (
            <p>
              {formData.timmar}
            </p>
          )}
        </div>

        <div style={{ display: "block", marginTop: "20px" }}>
          <p><strong>Pris:</strong></p>
          {!isSubmitted ? (
            <input
              type="number"
              name="pris"
              value={formData.pris}
              onChange={handleChange}
              placeholder="Pris i SEK"
              required
              min="0"
              style={{
                width: "100%",
                padding: "24px",
                marginTop: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          ) : (
              <p>
              {formData.pris} SEK
            </p>
          )}
        </div>
<div>
          {!isSubmitted ? (
            <ImageUpload 
              onImageSelect={handleImageSelect}
              initialImage={formData.image}
            />
          ) : formData.image ? (
            <div style={{ textAlign: "center" }}>
              <strong>Bild:</strong>
              <div>
                <img
                  src={formData.image}
                  alt="Offertbild"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    marginTop: "10px"
                  }}
                />
              </div>
            </div>
          ) : null}
        </div>
        {!isSubmitted && (
          <div style={{ textAlign: "center" }}>
          <button
            type="button"
            onClick={() => {
              if (onPreview && isFormValid) {
                onPreview(formData);
              }
            }}
            disabled={!isFormValid}
            style={{
              padding: "10px 20px",
              backgroundColor: isFormValid ? "#007bffff" : "#d6d6d6ff",
              color: isFormValid ? "white" : "#5e5d5dff",
              border: "none",
              borderRadius: "6px",
              cursor: isFormValid ? "pointer" : "not-allowed",
              marginTop: "40px",
              padding: "24px",
              width: "75%",
            }}
          >
            {isFormValid ? "Förhandsgranskning" : "Fyll i alla fält först"}
          </button>
          </div>
        )}
        

        {!isSubmitted ? (
          
          <SendButton
            isFormValid={isFormValid}
            onSubmit={(email) => {
              const newOffer = {
                id: new Date(),
                ...formData,
                createdAt: new Date().toISOString(),
                isNew: true,
                sentTo: email,
              };
              if (addOffer) addOffer(newOffer);
              if (setHasSignedButNotSent) setHasSignedButNotSent(false); // Återställ status när offert skickas
              setIsSubmitted(true);
              
          
            }}
          />
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
      </form>
      
    
    </>
  );
}

export default OfferForm;
