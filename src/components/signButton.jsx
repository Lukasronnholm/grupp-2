import {FiEdit3} from 'react-icons/fi';
import { useState } from 'react';
import BankIDModal from './bankID';
function SignButton() {
    const [showBankID, setShowBankID] = useState(false);
  return (
    <>
    <button onClick={() => setShowBankID(true)}  >
     Signera Offert <FiEdit3 /> 
    </button>
    {showBankID && <BankIDModal />}
    </>
)}
export default SignButton;