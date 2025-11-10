import { useState } from 'react'
import OfferForm from "../components/offerForm";
import ReviewForm from "../components/reviewForm"
import fixitpro from "../assets/fixitpro.png"


function Sender({ addOffer }) {
  const [view, setView] = useState('form') // 'form' or 'review'
  const [formData, setFormData] = useState(null)

  function handlePreview(data) {
    setFormData(data)
    setView('review')
  }

  function handleBack() {
    setView('form')
  }

  // when the user sends (from SendButton), create and store the offer and show review
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
    // keep showing the review (you might want to clear the form or change view)
    setFormData(newOffer)
    setView('review')
  }
  return (
    <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
      <img src={fixitpro} alt="FixItPro Logo" style={{ width: '150px', margin: '20px' }} />
      {view === 'form' && (
        <OfferForm addOffer={addOffer} onPreview={handlePreview} onSend={handleSend} initialData={formData}/>
      )}
      {view === 'review' && (
        <ReviewForm formData={formData} onBack={handleBack} onSend={handleSend} />
      )}
    </div>
  )
}

export default Sender;
