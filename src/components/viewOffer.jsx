import { useState, useEffect } from 'react';
function ViewOffer({ offer }) {


    return (
        <div>
            {offer ? (
                <div>
                    <p><strong>Företag:</strong> {offer.foretag}</p>
                    <p><strong>Tjänst:</strong> {offer.tjanst}</p>
                    <p><strong>Timmar:</strong> {offer.timmar}</p>
                    <p><strong>Pris:</strong> {offer.pris}</p>
                    <p>Skapad den: {new Date(offer.createdAt).toLocaleString()}</p>
                </div>
            ) : (
                <p>Ingen offert tillgänglig.</p>
            )}
        </div>
    );
}

export default ViewOffer;
