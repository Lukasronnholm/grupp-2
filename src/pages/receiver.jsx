import ViewOffer from "../components/viewOffer"
import ActiveOffer from "../components/activeOffer"
import { useState } from "react"

function Receiver({ offers, markAsRead }) {
  const [hasNewOffers, setHasNewOffers] = useState(true);

  return (
    <div>
      <h1>Receiver</h1>
      <ViewOffer offers={offers} markAsRead={markAsRead} />
      <ActiveOffer hasNew={hasNewOffers} onClick={() => setHasNewOffers(false)}/>
    </div>
  )
}
export default Receiver

//Nu är det hårdkodat typ, kan man göra så att man får in isNew från objektet, och använda det ist?
