import { use, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import OfferForm from './components/offerForm.jsx'
import Receiver from './pages/receiver.jsx'
import Sender from './pages/sender.jsx'

function App() {
 const [offers, setOffers] = useState(() => {
  try {return JSON.parse(localStorage.getItem('offers')) || []} catch (e) {return []}
 })
 useEffect(() => {localStorage.setItem('offers', JSON.stingify(offers))}, [offers])

 const addOffer = (newOffer) => {
  setOffers((prevOffers) => [newOffer, ...prevOffers])
 }

 const markAsRead = (id) => {
  setOffers(prevOffers =>
    prevOffers.map(offer => offer.id === id ? {...offer, isNew: false} : offer))
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sender addOffer={addOffer}/>} />
        <Route path="/receiver" element={<Receiver offers={offers} markAsRead={markAsRead} />} />
      </Routes>
    </Router>
  )
}



export default App
