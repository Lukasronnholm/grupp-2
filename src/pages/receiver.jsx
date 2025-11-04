import ViewOffer from "../components/viewOffer"

function Receiver({ offers, markAsRead }) {
  return (
    <div>
      <h1>Receiver</h1>
      <ViewOffer offers={offers} markAsRead={markAsRead} />
    </div>
  )
}
export default Receiver