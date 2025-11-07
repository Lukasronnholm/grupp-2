import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Receiver from './pages/receiver.jsx'
import Sender from './pages/sender.jsx'
import ViewOffer from './components/viewOffer.jsx'
import ReviewForm from './components/reviewForm.jsx'

function App() {
 const [offers, setOffers] = useState(() => {

  try {return JSON.parse(localStorage.getItem('offers')) || []}
    catch (event) {return []}
 })

 useEffect(() => {
  try {
    localStorage.setItem('offers', JSON.stringify(offers));
  } catch (err) {
    console.error('Could not stringify offers', err);
    console.log('offers preview:', offers);
    offers.forEach((o, i) => {
      try { JSON.stringify(o) }
      catch(e) { console.error('Non-serializable offer at index', i, o); }
    })
  }
}, [offers]);

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
        <Route path="/reviewform" element={<ReviewForm/>} />
         <Route path="/reviewoffer" element={<reviewOffer/>} />
        <Route path="/viewoffer" element={<ViewOffer offers={offers} markAsRead={markAsRead}/>} />
        <Route path="/signcomplete" element={<signComplete />} />
        <Route path="/receiver" element={<Receiver offers={offers} markAsRead={markAsRead} />} />
      </Routes>
    </Router>
  )
}



export default App
