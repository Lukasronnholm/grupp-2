function ActiveOffer({hasNew, onClick}) {
  return (
    <div style= {{position: 'relative', display: 'inline-block'}}>
    <button onClick={onClick} >Aktiva offerter
    </button>
    {hasNew && (<span style={{
          position: 'absolute',
          top: '-4px',
          right: '4px',
          height: '12px',
          width: '12px',
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
