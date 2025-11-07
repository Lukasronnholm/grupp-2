import { useState, useEffect } from 'react';
import SignButton from './signButton';

function ViewOffer({ offers, markAsRead }) {
    const [offer, setOffer] = useState(null);
    
    useEffect(() => {
        const storedOffer = localStorage.getItem('createdOffer');
        if (storedOffer) {
            setOffer(JSON.parse(storedOffer));
        }
    }, []);

    // Använd offers prop om den finns, annars fallback till localStorage
    const displayOffer = offers && offers.length > 0 ? offers[0] : offer;

    return (
        <div>
            {displayOffer ? (
                <div>
                    <h2>Offert</h2>
                    <p><strong>Företag:</strong> {displayOffer.foretag}</p>
                    <p><strong>Tjänst:</strong> {displayOffer.tjanst}</p>
                    <p><strong>Timmar:</strong> {displayOffer.timmar}</p>
                    <p><strong>Pris:</strong> {displayOffer.pris}</p>
                    <p><strong>Skapad den:</strong> {new Date(displayOffer.createdAt).toLocaleDateString()}</p>
                    {displayOffer.sentTo && <p><strong>Skickat till:</strong> {displayOffer.sentTo}</p>}
                </div>
            ) : (
                <p>Ingen offert tillgänglig.</p>
            )}
            <SignButton />
        </div>
    );
}

export default ViewOffer;
