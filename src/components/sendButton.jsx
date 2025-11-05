import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SendButton({onSubmit}) {
    const navigate = useNavigate()
const [email, setEmail] = useState("")

function handleChange(event) {
setEmail(event.target.value)
}
function handleSubmit(event){
  event.preventDefault();
  if(email!=="") {
    if(onSubmit) {
      onSubmit(event)
    }
    navigate("/reviewSent")
    console.log(email)
  }


}

return (
    <>
    <label>
        Mejladress:
        <input type="text" name="mejladress" value={email} onChange={handleChange}></input>
    </label>
    <button onClick={handleSubmit}>
        Skicka formulär
    </button>
    </>
)
}
