function ActiveOffer({hasNew, onClick}) {
  return (
    <div style= {{position: 'relative', display: 'inline-block'}}>
    <button onClick={onClick} style={{
        
          backgroundColor:"#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "10px",


        }}>Aktiva offerter
    </button>
    {hasNew && (<span style={{
          position: 'absolute',
          top: '1px',
          right: '-8px',
          height: '18px',
          width: '18px',
          backgroundColor: '#ef4444', 
          borderRadius: '50%',
          border: '1px solid black',
          zIndex: 10
        }}>
        </span>)}
    </div>
  )
}
 
export default ActiveOffer;
//onClick blir en prop som skickas in i komponenten och kan användas för att hantera klickhändelser på knappen. Sätts på föräldrakomponenten.
//Ändra propen i receiver.jsx från hasNew till isNew=
//I reciver.jsx, ta bort consten och navigera till viewOffer på onclick
//Ändra const hasNewOffers i receiver.jsx. --> kod i chat gpt
