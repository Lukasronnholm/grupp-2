import { useState } from 'react'
import OfferForm from "../components/offerForm";
import ReviewForm from "../components/reviewForm"
import fixitpro from "../assets/fixitpro.png"
import { useNavigate } from 'react-router-dom';


function Sender({ addOffer, setHasSignedButNotSent }) {
  const [view, setView] = useState('form') 
  const [formData, setFormData] = useState(null)
  const navigate = useNavigate()

  function handlePreview(data) {
    setFormData(data)
    setView('review')
    window.scrollTo(0, 0);
  }

  function handleBack() {
    if (view === 'review') {
      setView('form') 
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
      navigate('/receiver') 
    }
  }

  function handleLogoClick() {
    window.scrollTo(0, 0);
    navigate('/receiver');
  }

  function handleSend(email) {
    if (!formData) return
    const newOffer = {
      id: new Date(),
      ...formData,
      createdAt: new Date().toISOString(),
      isNew: true,
      sentTo: email,
    }
    if (addOffer) addOffer(newOffer)
    if (setHasSignedButNotSent) setHasSignedButNotSent(false) // Återställ status när ny offert skickas
    setFormData(newOffer)
    setView('review')
  }
  return (
    <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
      <img 
        src={fixitpro} 
        alt="FixItPro Logo" 
        style={{ 
          width: '150px', 
          margin: '20px',
        }} 
        onClick={handleLogoClick} 
      />
      {view === 'form' && (
        <OfferForm addOffer={addOffer} onPreview={handlePreview} onSend={handleSend} initialData={formData} setHasSignedButNotSent={setHasSignedButNotSent}/>
      )}
      {view === 'review' && (
        <ReviewForm formData={formData} onBack={handleBack} onSend={handleSend} setHasSignedButNotSent={setHasSignedButNotSent} />
      )}
    </div>
  )
}

export default Sender;
