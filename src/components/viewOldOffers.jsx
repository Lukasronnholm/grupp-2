import BackButton from "./backButton";

function ViewOldOffers({ offers }) {
  const signedOffers = offers.filter(offer => offer.isSigned);

  return (
    <div>
      <BackButton />
      <div style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    borderRadius: "12px",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    marginTop: "60px"
                }}>
        
        
        {signedOffers.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Inga signerade offerter ännu
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {signedOffers.map((offer) => {
              const currentDate = new Date().toLocaleDateString('sv-SE');
              return (
                <div key={offer.id} style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  marginBottom: "20px"
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
                          <p style={{ color: "#333333" }}><strong>{offer.foretag}</strong></p>
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
                          <p style={{ color: "#333333" }}><strong>{offer.tjanst || "Ingen tjänst angiven"}</strong></p>
                        </div>
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "10px"
                        }}>
                          <span style={{ color: "#333333" }}>Antal timmar:</span>
                          <strong style={{ color: "#333333" }}>{offer.timmar} tim</strong>
                        </div>
                      </div>
                    </div>

                    {offer.image && (
                      <div style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                      }}>
                        <img
                          src={offer.image}
                          alt="Projekt"
                          style={{
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px"
                          }}
                        />
                      </div>
                    )}

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
                        <p style={{ color: "#007bff" }}><strong>Totalt</strong></p>
                        <strong style={{
                          color: "#333333",
                          fontSize: "18px"
                        }}>
                          {offer.pris} kr
                        </strong>
                      </div>
                      <div style={{
                        fontSize: "12px",
                        color: "#333333",
                      }}>
                        Exkl. moms
                      </div>
                    </div>

                    <div style={{ 
                      marginTop: '15px',
                      padding: '10px',
                      backgroundColor: '#d4edda',
                      borderRadius: '4px',
                      border: '1px solid #c3e6cb'
                    }}>
                      <span style={{ 
                        color: '#155724',
                        fontWeight: '600',
                        fontSize: '14px'
                      }}>
                        ✓ Signerad
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewOldOffers;