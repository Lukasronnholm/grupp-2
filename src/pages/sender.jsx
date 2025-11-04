import OfferForm from "../components/offerForm";



function Receiver() {
  return (
    <div>
      <h1>Sender</h1>
      <OfferForm addOffer={addOffer} />
    </div>
  );
}

export default Receiver;
