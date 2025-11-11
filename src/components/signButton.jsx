import {FiEdit3} from 'react-icons/fi';
import { useState } from 'react';
import BankID from './bankID';
function SignButton({ offer, markAsSigned }) {
    const [showBankID, setShowBankID] = useState(false);
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
    <button onClick={() => setShowBankID(true)}      
    style={{
          width: '75%',
          padding: "24px",
          backgroundColor:"#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "600",
          marginTop: "10px",


        }}>
     Signera Offert <FiEdit3 /> 
    </button>
    <BankID 
      opened={showBankID} 
      onClose={() => setShowBankID(false)}
      offer={offer}
      markAsSigned={markAsSigned}
    />
    </div>
)}
export default SignButton;