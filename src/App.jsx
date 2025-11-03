import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import OfferForm from './components/offerForm.jsx'
import Receiver from './pages/receiver.jsx'
import Sender from './pages/sender.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sender />} />
        <Route path="/receiver" element={<Receiver />} />
      </Routes>
    </Router>
  )
}



export default App
