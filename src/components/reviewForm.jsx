import { useLocation } from "react-router-dom";
import SendButton from "./sendButton";
import { useState } from "react";

function ReviewForm({formData, onSubmit, onSend}) {
  const handleSubmit = onSend || onSubmit;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();
  const locationData = location.state || {};
  const finalFormData = formData || locationData.formData;

  return (
    <>
      {!finalFormData ? (
        <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-700">
          <p>Inget inskickat ännu...</p>
        </div>
      ) : (
        <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md w-full max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
            Offert
          </h2>

          <div className="space-y-3 text-gray-700">
            <div>
              <p className="font-semibold">Företag:</p>
              <p>{finalFormData.foretag}</p>
            </div>

            <div>
              <p className="font-semibold">Tjänst:</p>
              <p>{finalFormData.tjanst}</p>
            </div>

            <div>
              <p className="font-semibold">Timmar:</p>
              <p className="whitespace-pre-line">{finalFormData.timmar}</p>
            </div>
            <div>
              <p className="font-semibold">Pris:</p>
              <p className="whitespace-pre-line">{finalFormData.pris}</p>
            </div>
          </div>

          {handleSubmit && !isSubmitted ? (
            <SendButton onSubmit={(event) => {
              handleSubmit(event);
              setIsSubmitted(true);
            }}></SendButton>
          ) : (
            <h2>Mottagaren har aviserats!</h2>
          )}
        </div>
      )}
    </>
  );
}

export default ReviewForm;
