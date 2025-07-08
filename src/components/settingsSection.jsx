import { useState } from "react";
import Tabs from "./tabs";

const SettingsSection = ({handleButtonClickFunction}) => {
    const [checkbox, setCheckbox] = useState([]);
    const [drop, setDrop] = useState('');
    const [showAllDetails, setShowAllDetails] = useState(false);
    const profile = JSON.parse(localStorage.getItem("profile"));
    const interest = JSON.parse(localStorage.getItem("Interest"));

    const handleCheckboxChange = (value, isChecked) => {
        if (isChecked) {
          setCheckbox([...checkbox, value]);
        } else {
          setCheckbox(checkbox.filter(item => item !== value));
        }
      };

    function onSubmitHandler(e) {
        e.preventDefault();
        {!interest && alert('Please fill interest section before submitting !!')}
        {!profile && alert('Please fill profile section before submitting !!')}
        {checkbox.length===0 && alert("Select atleast one option");}
        {!drop && alert('Select anyone from the dropdown')};
        {checkbox.length>0 && drop && setShowAllDetails(true)};
    }

    return (
        <>
            <Tabs handleButtonClickFunction={handleButtonClickFunction}/>
            <div style={{border: 'solid 1px black', padding:"12px", maxWidth:"650px"}}>
                <h2>Settings</h2>
                {/* help for the input part */}
                <form style={{display: 'flex', flexDirection:'column', gap:5}} onSubmit={onSubmitHandler}>
                    <div>
                        {/* help for the selected/unselected checkbox */}
                        <input type="checkbox" id="option1" onChange={(e) => handleCheckboxChange('Option1', e.target.checked)} />
                        <label htmlFor="option1">Option 1</label>
                        <input type="checkbox" id="option2" onChange={(e) => handleCheckboxChange('Option2', e.target.checked)} />
                        <label htmlFor="option2">Option 2</label>
                    </div>
                     {/* help to handle the selection */}
                    <select value={drop} onChange={(e)=>setDrop(e.target.value)}>
                        <option value="">-- Please select --</option>
                        <option value="DP1">DP1</option>
                        <option value="DP2">DP2</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                {showAllDetails && (
                    <>
                        <p>The profile is : Age {profile.age} and Email {profile.email}</p>
                        <p>Interest is {interest}</p>
                        <p>Selected options are {checkbox}</p>
                        <p>Selected dropdown {drop}</p>
                    </>
                   
                )}
            </div>
        </>
    );
}

export default SettingsSection;