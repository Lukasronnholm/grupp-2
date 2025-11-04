import SendButton from './sendButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OfferForm() {
  const navigate = useNavigate()

  const[formData, setFormData] = useState({
  foretag: "",
  tjanst: "",
  timmar: "",
  pris: ""
});

function handleChange(event) {
  const { name, value } = event.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

}

  return (
    <form>
      <label>
        Företag:
        <input type="text" name="foretag" value={formData.foretag} onChange={handleChange}/>
      </label>
      <label>
        Tjänst:
        <input type="text" name="tjanst" value={formData.tjanst} onChange={handleChange}/>
      </label>
      <label>
        Timmar:
        <input type="text" name="timmar" value={formData.timmar} onChange={handleChange}/>
      </label>
         <label>
        Pris:
        <input type="text" name="pris" value={formData.pris} onChange={handleChange}/>
      </label>
      <button type="submit" onClick={()=>{
          navigate("/ReviewSent")
      }}>Förhandsgranskning</button>
      <SendButton></SendButton>
    </form>
  );
}
export default OfferForm;
