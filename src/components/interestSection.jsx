import { useState } from "react";
import Tabs from "./tabs";

const InterestSection = ({handleButtonClickFunction}) => {
    const [selectedInterest, setSelectedInterest] = useState("");

    function handleRadioChange(e) {
        setSelectedInterest(e.target.value);
    }

    function onSubmitHandler(e){
        e.preventDefault();
        if(!selectedInterest){
            alert('Select aleast one option to proceed !!')
        } else {
            localStorage.setItem("Interest", JSON.stringify(selectedInterest));
            console.log(JSON.parse(localStorage.getItem("Interest")));
            handleButtonClickFunction("settings");
        }
    }

    return (
        <>
        <Tabs handleButtonClickFunction={handleButtonClickFunction}/>
        <div style={{ border: 'solid 1px black', padding: "12px", maxWidth: "650px" }}>
            <h3>Select your interest</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={onSubmitHandler}>
                <label>
                    <input
                        type="radio"
                        name="interest"
                        value="sports"
                        checked={selectedInterest === "sports"}
                        onChange={handleRadioChange}
                    />
                    Sports
                </label>
                <label>
                    <input
                        type="radio"
                        name="interest"
                        value="music"
                        checked={selectedInterest === "music"}
                        onChange={handleRadioChange}
                    />
                    Music
                </label>
                <button type="submit">Save & next</button>
            </form>
        </div>
        </>
        
    );
};

export default InterestSection;
