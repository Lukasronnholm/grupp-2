import ViewOffer from "../components/viewOffer"
import ActiveOffer from "../components/activeOffer"
import { useState } from "react"
import { useNavigate } from "react-router";
import fixitpro from "../assets/fixitpro.png"

function Receiver({ offers, markAsRead }) {
  const hasNewOffers = offers.some(offer => offer.isNew);
  const navigate = useNavigate();

  return (
    <div style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
      <img src={fixitpro} alt="FixItPro Logo" style={{ width: '150px', margin: '20px' }} />
      <ActiveOffer hasNew={hasNewOffers} onClick={() => navigate("/viewoffer")}/>
    </div>
  )
}
export default Receiver

//Nu är det hårdkodat typ, kan man göra så att man får in isNew från objektet, och använda det ist?
