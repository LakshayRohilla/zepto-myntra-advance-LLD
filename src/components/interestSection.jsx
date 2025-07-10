import { useState } from "react";
import Tabs from "./tabs";
import { useState } from "react";

const InterestSection = ({ handleButtonClickFunction, currentTab }) => {
  const savedInterest = getFromStorage(STORAGE_KEYS.INTERESTS);
  const [selectedInterest, setSelectedInterest] = useState(savedInterest || "");

  function onSubmitHandler(e) {
    e.preventDefault();
    if (!selectedInterest) {
      alert('Select at least one option to proceed!');
      return;
    }
    
    saveToStorage(STORAGE_KEYS.INTERESTS, selectedInterest);
    handleButtonClickFunction(TABS.SETTINGS);
  }

  // help for the radio options - make it easily extendable
  const interestOptions = [
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'reading', label: 'Reading' } // Easy to add more
  ];

  return (
    <>
      <Tabs handleButtonClickFunction={handleButtonClickFunction} currentTab={currentTab} />
      <div style={{ border: '1px solid black', padding: "12px", maxWidth: "650px" }}>
        <h3>Select your interest</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmitHandler={onSubmitHandler}>
          {interestOptions.map(option => (
            <label key={option.value}>
              <input
                type="radio"
                name="interest"
                value={option.value}
                checked={selectedInterest === option.value}
                onChange={(e) => setSelectedInterest(e.target.value)}
                style={{ marginRight: '8px' }}
              />
              {option.label}
            </label>
          ))}
          <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
            Save & Next
          </button>
        </form>
      </div>
    </>
  );
};

export default InterestSection;
