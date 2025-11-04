import React from 'react';
import { useState } from 'react';
 
function OfferForm() {
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
 
function handleSubmit(event){
  event.preventDefault();
   const newOffer = { 
    id: Date.now(),
    ...formData,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem('createdOffer', JSON.stringify(newOffer));
  setFormData({
    foretag: "",
    tjanst: "",
    timmar: "",
    pris: ""
  });
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
      <button type="submit">Förhandsgranskning</button>
      <button type="submit" onClick={handleSubmit}>Skicka Offert</button>
    </form>
  );
}
export default OfferForm;
 