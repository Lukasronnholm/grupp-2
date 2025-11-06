function ActiveOffer({hasNew, onClick}) {
  return (
    <button onClick={onClick} className="relative bg-gray-200 hover:bg-grey-300 text-black font-medium py-2 px-4 rounded">Aktiva offerter
    {hasNew && (<span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>)}
    </button>
  )
}

export default ActiveOffer

//onClick blir en prop som skickas in i komponenten och kan användas för att hantera klickhändelser på knappen. Sätts på föräldrakomponenten.
//Ändra propen i receiver.jsx från hasNew till isNew=
//I reciver.jsx, ta bort consten och navigera till viewOffer på onclick
//Ändra const hasNewOffers i receiver.jsx. --> kod i chat gpt
