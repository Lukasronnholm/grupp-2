import OfferForm from "../components/offerForm";

function Sender({ addOffer }) {
  return (
    <div>
        <h1>Sender</h1>
        <OfferForm addOffer={addOffer} />
    </div>
  )
}

export default Sender;