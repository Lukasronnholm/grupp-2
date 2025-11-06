import BackButton from "./backButton";

function ReviewForm({ formData, onSumbit }) {
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
        {/*Här har jag lagt till backButton komponenten*/}
        <BackButton />
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
          Offert
        </h2>

        <div className="space-y-3 text-gray-700">
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
        <div>
          <p className="font-semibold">Pris:</p>
          <p className="whitespace-pre-line">{formData.pris}</p>
        </div>
        { onSumbit?
        <SendButton></SendButton>: <h2>Mottagaren har aviserats!</h2>
        }
      </div>
    </>
  );
}

export default ReviewForm;
