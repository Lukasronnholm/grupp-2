import { useState } from "react";
import SendButton from "./sendButton";
import { useNavigate } from "react-router-dom"

function OfferForm({ addOffer }) {
  const navigate = useNavigate()
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
  const [formData, setFormData] = useState({
    foretag: "",
    tjanst: "",
    timmar: "",
    pris: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <form>
        <label>
          Företag:
          <input
            type="text"
            name="foretag"
            value={formData.foretag}
            onChange={handleChange}
          />
        </label>
        <label>
          Tjänst:
          <input
            type="text"
            name="tjanst"
            value={formData.tjanst}
            onChange={handleChange}
          />
        </label>
        <label>
          Timmar:
          <input
            type="text"
            name="timmar"
            value={formData.timmar}
            onChange={handleChange}
          />
        </label>
        <label>
          Pris:
          <input
            type="text"
            name="pris"
            value={formData.pris}
            onChange={handleChange}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            // navigate to review page for preview (not sent yet)
            navigate("/reviewSent", { state: { formData, btnClicked: true } });
          }}
        >
          Förhandsgranskning
        </button>
        <SendButton
          handleSubmit={handleSubmit}
          formData={formData}
        ></SendButton>
      </form>
    </>
  );
}

export default OfferForm;
