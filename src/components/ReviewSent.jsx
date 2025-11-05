
export function ReviewSent({formData, btnClicked}) {
    return (
        <>
             {btnClicked=== true &&
             <div className="p-6 border border-gray-300 rounded-2xl bg-white shadow-md w-full max-w-md mx-auto">
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
                  <h2>Mottagaren har aviserats!</h2>
                </div>
                }
        </>
    )
}
