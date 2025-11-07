import { useState } from "react";
import SendButton from "./sendButton";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./imageUpload";

function OfferForm({ addOffer, onPreview, initialData }) {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(
    initialData || {
      foretag: "",
      tjanst: "",
      timmar: "",
      pris: "",
    }
  );

  // Kontrollera om alla fält är ifyllda
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
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <form>
        <label style={{ display: "block", marginBottom: "15px" }}>
          <ImageUpload />
          Företag:
          <input
            type="text"
            name="foretag"
            value={formData.foretag}
            onChange={handleChange}
            placeholder="Ange företagsnamn"
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "15px" }}>
          Tjänst:
          <input
            type="text"
            name="tjanst"
            value={formData.tjanst}
            onChange={handleChange}
            placeholder="Beskriv tjänsten"
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "15px" }}>
          Timmar:
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
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "15px" }}>
          Pris:
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
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          />
        </label>

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
            backgroundColor: isFormValid ? "#007bff" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: isFormValid ? "pointer" : "not-allowed",
            marginRight: "10px",
            marginBottom: "10px",
          }}
        >
          {isFormValid ? "Förhandsgranskning" : "Fyll i alla fält först"}
        </button>

        {!isSubmitted ? (
          <SendButton
            isFormValid={isFormValid}
            onSubmit={(email) => {
              console.log("OfferForm: Skickar direkt med email:", email);
              // Skapa offerten direkt och lägg till den
              const newOffer = {
                id: new Date(),
                ...formData,
                createdAt: new Date().toISOString(),
                isNew: true,
                sentTo: email,
              };
              if (addOffer) addOffer(newOffer);
              setIsSubmitted(true);
            }}
          />
        ) : (
          <h2
            style={{
              color: "#4CAF50",
              textAlign: "center",
              marginTop: "20px",
              padding: "15px",
            }}
          >
            Mottagaren har aviserats!
          </h2>
        )}
      </form>
    </>
  );
}

export default OfferForm;
