function OldOffers({ hasSigned, onClick }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
      <button 
        onClick={onClick} 
        style={{
         backgroundColor:"#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "600",
          padding: "12px 24px",
        }}
      >
        Gamla offerter
      </button>
    </div>
  )
}
 
export default OldOffers;