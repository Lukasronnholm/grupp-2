import { useState, useEffect } from 'react';
function ViewOffer() {
    const [offer, setOffer] = useState(null);
    useEffect(() => {
        const storedOffer = localStorage.getItem('createdOffer');
        if (storedOffer) {
            setOhffer(JSON.parse(storedOffer));
        }
    }, []);
    return (
        <div>
            {offer ? (
                <div>
                    <p><strong>Företag:</strong> {offer.foretag}</p>
                    <p><strong>Tjänst:</strong> {offer.tjanst}</p>
                    <p><strong>Timmar:</strong> {offer.timmar}</p>
                    <p><strong>Pris:</strong> {offer.pris}</p>
                    <p><strong>Skapad den:</strong> {new Date(offer.createdAt).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>Ingen offert tillgänglig.</p>
            )}
        </div>
    );
}

export default ViewOffer;
