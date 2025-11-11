import ActiveOffer from "../components/activeOffer"
import OldOffers from "../components/oldOffers"
import { useNavigate } from "react-router";
import fixitpro from "../assets/fixitpro.png"

function Receiver({ offers, markAsRead, hasSignedButNotSent }) {
  const hasNewOffers = offers.some(offer => offer.isNew);
  const hasForm = offers.some(offer => offer.formData);
  const hasSignedOffers = offers.some(offer => offer.isSigned);
  const navigate = useNavigate();

  function handleActiveClick() {
    if (hasNewOffers) {
      const newOffer = offers.find(offer => offer.isNew);
      if (newOffer) {
        markAsRead(newOffer.id);
      }
    }
    window.scrollTo(0, 0);
    navigate("/viewoffer");
  }

  function handleOldOffersClick() {
    window.scrollTo(0, 0);
    navigate("/viewoldoffers");
  }

  function handleLogoClick() {
    window.scrollTo(0, 0);
    navigate('/receiver');
  }

  return (
    <div style={{ 
      flexDirection: 'column', 
      alignItems: 'center', 
      display: 'flex',
      minHeight: '100vh',
      justifyContent: 'center'
    }}>
      <img 
        src={fixitpro} 
        alt="FixItPro Logo" 
        style={{ 
          width: '150px', 
          margin: '20px',
          cursor: 'pointer'
        }} 
        onClick={handleLogoClick}
      />
      <ActiveOffer hasNew={hasNewOffers} markAsRead={markAsRead} onClick={handleActiveClick} hasSignedButNotSent={hasSignedButNotSent} />
      <OldOffers hasForm={hasForm} hasSigned={hasSignedOffers} onClick={handleOldOffersClick} />
    </div>
  )
}
export default Receiver

