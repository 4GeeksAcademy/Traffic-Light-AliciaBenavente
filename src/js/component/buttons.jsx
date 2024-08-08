
import React, { useState } from "react";

const Buttons = () => {
    const [ selectedColor, setSelectedColor ] = useState("");
    const [ lightColor, setLightColor ] = useState({
        red: "red",
        yellow: "yellow",
        green: "green"
    });
    const [availableColors, setAvailableColors] = useState(["red", "yellow", "green"]);

    const colorChange = () => {

        if (selectedColor) {
            const randomColor = availableColors[Math.floor(Math.random()*availableColors.length)]
            setLightColor(prevColors => ({
                ...prevColors,
                [selectedColor]: randomColor}));
        }
        else {
            alert("Please select a light first")

    }}
    const addPurple = () => {
        if(!availableColors.includes("purple")){
            setAvailableColors(prevColors => [...prevColors, "purple"])
            alert("Great, you added the purple color! Now try again the Change Color button")
        }
    };

    return (
        <>
        <div className="lightAndButtons">
            <div className="ligthContainer">
                <button onClick={() => setSelectedColor("red")} className={`light red + ${(selectedColor === "red" ? "glow" : "")}`} style={{ backgroundColor: lightColor.red}}></button>
                <button onClick={() => setSelectedColor("yellow")} className={`light yellow  + ${(selectedColor === "yellow" ? "glow" : "")}`} style={{ backgroundColor: lightColor.yellow}}></button>
                <button onClick={() => setSelectedColor("green")} className={`light green + ${(selectedColor === "green" ? "glow" : "")}`} style={{ backgroundColor: lightColor.green}}></button>
            </div>
            <div>
                <button className="changeColor" onClick={colorChange}>Change Color</button>
                <button className="addPurple" onClick={addPurple}>Add purple color</button>
            </div>
        </div>
        </>

    );
}


export default Buttons