import SendButton from "./sendButton";
import { useState } from "react";

function ReviewForm({ formData, onSubmit, onSend, onBack }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("ReviewForm: handleSubmit anropad!");
    setIsSubmitted(true);
  };
  if (!formData) {
    return (
      <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-700">
        <p>Inget inskickat ännu...</p>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Offert
        </h2>

        <div className="space-y-3 text-gray-700">
          {data.image && (
            <img
              src={data.image}
              alt="Uploaded"
              style={{ width: "200px", marginTop: "10px" }}
            />
          )}
          <div>
            <p className="font-semibold">Företag:</p>
            <p>{formData.foretag}</p>
          </div>

          <div>
            <p className="font-semibold">Tjänst:</p>
            <p>{formData.tjanst}</p>
          </div>

          <div>
            <p className="font-semibold">Timmar:</p>
            <p className="whitespace-pre-line">{formData.timmar}</p>
          </div>
          <div>
            <p className="font-semibold">Pris:</p>
            <p className="whitespace-pre-line">{formData.pris}</p>
          </div>
        </div>

        {!isSubmitted ? (
          <div>
            <button
              onClick={onBack}
              style={{
                padding: "10px 20px",
                backgroundColor: "#6b7280",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginRight: "10px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              Ändra
            </button>
            <SendButton onSubmit={handleSubmit} />
          </div>
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
      </div>
    </>
  );
}

export default ReviewForm;
