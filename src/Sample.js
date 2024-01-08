
import './Imagegallery.css'
import { useCallback, useState } from "react";
import './Buttonpannel';
export default function Sample() {
    const [name, setName] = useState("ONLINE SHOOPING CLONE");
    function handleClick() {
        /*
        if (button= "ALL") {
            setName("ALL PRODUCTS");
        }
        else if (button = "LAPTOPS") {
            setName("AVAILABLE LAPTOPS");
        }
        else if (button = "MOBILE") {
            setName("AVAILABLE MOBILES");
        }
        else if (button = "DESKTOP") {
            setName("AVAILABLE DESKTOPS");
        }
        */
    }
    return (
        <div>
            <h1>{name}</h1>

            <button className="SAMPLE" onClick={() => { handleClick() }}>Hiii</button>

        </div>
    )
}