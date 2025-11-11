import { useState, useEffect } from 'react';
import SignButton from './signButton';
import BackButton from './backButton';

function ViewOffer({ offers, markAsRead, markAsSigned }) {
    const [offer, setOffer] = useState(null);
    
    useEffect(() => {
        const storedOffer = localStorage.getItem('createdOffer');
        if (storedOffer) {
            setOffer(JSON.parse(storedOffer));
        }
    }, []);

    // Använd offers prop om den finns, annars fallback till localStorage
    const displayOffer = offers && offers.length > 0 ? offers[0] : offer;

    const currentDate = new Date().toLocaleDateString('sv-SE');

    return (
        <div >
        <BackButton onClick={markAsRead} />

            {displayOffer ? (
                <div >
                <div style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    marginTop: "60px"
                }}>
         <div style={{
           backgroundColor: "#007bff",
           color: "white",
           padding: "20px",
           textAlign: "center"
         }}>
           <h1 style={{ 
             margin: "0", 
             fontSize: "24px", 
             fontWeight: "600" 
           }}>
             OFFERT
           </h1>
           <p style={{ 
             margin: "5px 0 0 0", 
             opacity: "0.9",
             fontSize: "14px"
           }}>
             {currentDate}
           </p>
         </div>
   
         <div style={{ padding: "20px" }}>
            <div style={{
             border: "1px solid #e9ecef",
             borderRadius: "8px",
             marginBottom: "20px"
           }}>
             <div style={{
               backgroundColor: "#f8f9fa",
               padding: "12px 15px",
               borderBottom: "1px solid #e9ecef",
               fontSize: "16px",
               fontWeight: "600",
               color: "#007bff",
             }}>
               Avsändare
             </div>
               <div style={{ padding: "15px" }}>
               <div style={{ marginBottom: "10px" }}>
                 <p style={{ color: "#333333" }}><strong>{displayOffer.foretag} </strong></p>
               </div>
          </div>
             </div>
   
          
   
           <div style={{
             border: "1px solid #e9ecef",
             borderRadius: "8px",
             marginBottom: "20px"
           }}>
             <div style={{
               backgroundColor: "#f8f9fa",
               padding: "12px 15px",
               borderBottom: "1px solid #e9ecef",
               fontSize: "16px",
               fontWeight: "600",
               color: "#007bff",
             }}>
               Tjänst
             </div>
             <div style={{ padding: "15px" }}>
               <div style={{ marginBottom: "10px" }}>
                 <p style={{ color: "#333333" }}><strong>{displayOffer.tjanst || "Ingen tjänst angiven"}</strong></p>
               </div>
               <div style={{
                 display: "flex",
                 justifyContent: "space-between",
                 alignItems: "center",
                 marginBottom: "10px"
               }}>
                 <span style={{ color: "#333333" }}>Antal timmar:</span>
                 <strong style={{ color: "#333333" }}>{displayOffer.timmar} tim</strong>
               </div>
             </div>
           </div>
            {displayOffer.image && (
             <div style={{
               textAlign: "center",
               marginBottom: "20px",
               backgroundColor: "#f8f9fa",
               borderRadius: "8px",
              
             }}>
               <img
                 src={displayOffer.image}
                 alt="Projekt"
                 style={{
                   width: "100%",
                   
                   objectFit: "cover",
                   borderRadius: "8px"
                 }}
               />
             </div>
           )}
   
           {/* Price Summary */}
           <div style={{
             backgroundColor: "#f8f9fa",
             border: "1px solid #e9ecef",
             borderRadius: "8px",
             padding: "15px",
             marginBottom: "20px"
           }}>
             <div style={{
               marginBottom: "10px",
               fontSize: "16px"
             }}>
               <p style={{ color: "#007bff", }}><strong>Totalt</strong></p>
               <strong style={{
                color: "#333333",
                 fontSize: "18px"
               }}>
                 {displayOffer.pris} kr
               </strong>
             </div>
             <div style={{
               fontSize: "12px",
               color: "#333333",
             }}>
               Exkl. moms
             </div>
           </div>
         </div>
        </div>
        <SignButton offer={displayOffer} markAsSigned={markAsSigned} />
        </div>
            ) : (
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <p>Ingen offert att visa</p>
                </div>
            )}
           
        </div>
    );
}

export default ViewOffer;
