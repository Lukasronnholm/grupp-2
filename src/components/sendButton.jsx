import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SendButton({onSubmit}) {
  const [email, setEmail] = useState("")
   const navigate = useNavigate()



function handleChange(event) {
setEmail(event.target.value)
}
function handleEmailSubmit(event){
  event.preventDefault();
  if(email!=="") {

    if(onSubmit){
      onSubmit(event)
    }
        navigate("/ReviewSent")
        console.log(onSubmit)
  }


}

return (
    <>
    <label>
        Mejladress:
        <input type="text" name="mejladress" value={email} onChange={handleChange}></input>
    </label>
    <button onClick={handleEmailSubmit}>
        Skicka formulär
    </button>
    </>
)
}
