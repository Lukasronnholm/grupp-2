function ActiveOffer({hasNew, onClick, hasSignedButNotSent = false}) {
  const isDisabled = hasSignedButNotSent;

  return (
    <div style= {{position: 'relative', display: 'inline-block'}}>
    <button 
      onClick={isDisabled ? undefined : onClick} 
      disabled={isDisabled}
      style={{
          backgroundColor: isDisabled ? "#d6d6d6" : "#007bff",
          color: isDisabled ? "#5e5d5d" : "white",
          border: "none",
          borderRadius: "4px",
          cursor: isDisabled ? "not-allowed" : "pointer",
          fontSize: "18px",
          fontWeight: "600",
          padding: "12px 24px",
          opacity: isDisabled ? 0.6 : 1
        }}
    >
      Nya offerter
    </button>
    {hasNew && !isDisabled && (<span style={{
          position: 'absolute',
          top: '-8px',
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

