import { CiCircleCheck } from "react-icons/ci";

export function ReviewSent() {
    return (
        <>
        <div>
            <h2>Offert skickad!</h2>
            <h3>Datum: {new Date().toString()}</h3>
            <CiCircleCheck />

        </div>
        </>
    )
}
