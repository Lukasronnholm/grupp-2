import { useState } from "react"

export function SendButton() {
     const [sendForm, setSendForm]= useState(false)

return (
    <>
    <button onClick={()=>{
        setSendForm(true)
    }}>
        Skicka formulär
    </button>
    </>
)
}
