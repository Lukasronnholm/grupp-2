import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Receiver from './pages/receiver.jsx'
import Sender from './pages/sender.jsx'
import ViewOffer from './components/viewOffer.jsx'
import ViewOldOffers from './components/viewOldOffers.jsx'
import ReviewForm from './components/reviewForm.jsx'
import SignComplete from './components/signComplete.jsx'
import { MantineProvider } from '@mantine/core'

function App() {
 const [offers, setOffers] = useState(() => {

  try {return JSON.parse(localStorage.getItem('offers')) || []}
    catch (event) {return []}
 })

 const [hasSignedButNotSent, setHasSignedButNotSent] = useState(() => {
   try {
     return JSON.parse(localStorage.getItem('hasSignedButNotSent')) || false;
   } catch (err) {
     return false;
   }
 });

 useEffect(() => {
  try {
    localStorage.setItem('offers', JSON.stringify(offers));
  } catch (err) {
  }
}, [offers]);

 useEffect(() => {
   try {
     localStorage.setItem('hasSignedButNotSent', JSON.stringify(hasSignedButNotSent));
   } catch (err) {
   }
 }, [hasSignedButNotSent]);

 const addOffer = (newOffer) => {
  setOffers((prevOffers) => [newOffer, ...prevOffers])
  setHasSignedButNotSent(false) // Återställ när ny offert skickas
 }

 const markAsRead = (id) => {
  setOffers(prevOffers =>
    prevOffers.map(offer => offer.id === id ? {...offer, isNew: false} : offer))
  }

 const markAsSigned = (id) => {
  setOffers(prevOffers =>
    prevOffers.map(offer => offer.id === id ? {...offer, isSigned: true, isNew: false} : offer))
  setHasSignedButNotSent(true) // Sätt till true när offert signeras
  }



  return (
    <MantineProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Sender addOffer={addOffer} setHasSignedButNotSent={setHasSignedButNotSent}/>} />
        <Route path="/reviewform" element={<ReviewForm/>} />
         <Route path="/reviewoffer" element={<reviewOffer/>} />
        <Route path="/viewoffer" element={<ViewOffer offers={offers} markAsRead={markAsRead} markAsSigned={markAsSigned}/>} />
        <Route path="/viewoldoffers" element={<ViewOldOffers offers={offers} />} />
        <Route path="/signcompleted" element={<SignComplete />} />
        <Route path="/receiver" element={<Receiver offers={offers} markAsRead={markAsRead} markAsSigned={markAsSigned} hasSignedButNotSent={hasSignedButNotSent} />} />
      </Routes>
    </Router>
    </MantineProvider>
  )
}



export default App
