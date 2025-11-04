import React from "react";

function ReviewForm({ formData }) {
  if (!formData) {
    return (
      <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 text-gray-700">
        <p>Inget inskickat ännu...</p>
      </div>
    );
  }

  return (
    <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        Granskning av formulär
      </h2>

      <div className="space-y-3 text-gray-700">
        <div>
          <p className="font-semibold">Namn:</p>
          <p>{formData.name}</p>
        </div>

        <div>
          <p className="font-semibold">E-post:</p>
          <p>{formData.email}</p>
        </div>

        <div>
          <p className="font-semibold">Meddelande:</p>
          <p className="whitespace-pre-line">{formData.message}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
