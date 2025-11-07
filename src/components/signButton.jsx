import {FiEdit3} from 'react-icons/fi';
import { useState } from 'react';
import BankID from './bankID';
function SignButton() {
    const [showBankID, setShowBankID] = useState(false);
  return (
    <>
    <button onClick={() => setShowBankID(true)}  >
     Signera Offert <FiEdit3 /> 
    </button>
    <BankID 
      opened={showBankID} 
      onClose={() => setShowBankID(false)} 
    />
    </>
)}
export default SignButton;