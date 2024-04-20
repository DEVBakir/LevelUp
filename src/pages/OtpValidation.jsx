import { useContext } from "react";
import { DataTest } from "../context/Form";

function OtpValidation() {
    let value = useContext(DataTest);
    console.log(value)
    return (
        <div>
            ddd
        </div>
   )
}

export default OtpValidation;