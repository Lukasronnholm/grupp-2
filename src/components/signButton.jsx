import {FiEdit3} from 'react-icons/fi';
function SignButton({ onClick }) {
  return (
    <button onClick={onClick} >
     Signera Offert <FiEdit3 /> 
    </button>
  );
}
export default SignButton;