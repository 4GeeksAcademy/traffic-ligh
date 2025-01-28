import React from "react";
import {useState} from "react";

const TrafficLight = () => {
    const [ color, setColor] = useState("red");
 
     return (
         <div>
             <div className="palo"></div>
             <div className = "trafic-light">
                 <div onClick={() => setColor("yellow")} className={"light red" + (color === "red" ? " brillo" : "" )}></div>
                 <div onClick={() => setColor("green")} className={"light yellow" + (color === "yellow" ? " brillo" : "" )}></div>
                 <div onClick={() => setColor("red")} className={"light green" + (color === "green" ? " brillo" : "" )}></div>
             </div>
         </div>
     );
 };

 export default TrafficLight;