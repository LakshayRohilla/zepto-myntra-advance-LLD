import { useState } from "react";
import Tabs from "./tabs";

const SettingsSection = ({ handleButtonClickFunction, currentTab }) => {
  const savedSettings = getFromStorage(STORAGE_KEYS.SETTINGS);
  const [preferences, setPreferences] = useState(savedSettings?.preferences || []);
  const [dropdown, setDropdown] = useState(savedSettings?.dropdown || '');
  const [showAllDetails, setShowAllDetails] = useState(false);

  // help for the checkbox options - make it configurable
  const preferenceOptions = [
    { value: 'Option1', label: 'Option 1' },
    { value: 'Option2', label: 'Option 2' },
    { value: 'Option3', label: 'Option 3' } // Easy to add more
  ];

  const dropdownOptions = [
    { value: 'DP1', label: 'DP1' },
    { value: 'DP2', label: 'DP2' },
    { value: 'DP3', label: 'DP3' } // Easy to add more
  ];

  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setPreferences([...preferences, value]);
    } else {
      setPreferences(preferences.filter(item => item !== value));
    }
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    
    // help for validation - improved from your version
    const profile = getFromStorage(STORAGE_KEYS.PROFILE);
    const interest = getFromStorage(STORAGE_KEYS.INTERESTS);
    
    const errors = [];
    if (!profile) errors.push('Please fill profile section');
    if (!interest) errors.push('Please fill interest section');
    if (preferences.length === 0) errors.push('Select at least one preference');
    if (!dropdown) errors.push('Select from dropdown');
    
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
    
    // Save current settings
    const settingsData = { preferences, dropdown };
    saveToStorage(STORAGE_KEYS.SETTINGS, settingsData);
    
    // Show success
    setShowAllDetails(true);
    console.log('Form submitted successfully!', {
      profile,
      interest,
      settings: settingsData
    });
  }

  return (
    <>
      <Tabs handleButtonClickFunction={handleButtonClickFunction} currentTab={currentTab} />
      <div style={{ border: '1px solid black', padding: "12px", maxWidth: "650px" }}>
        <h2>Settings</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 15 }} onSubmit={onSubmitHandler}>
          
          {/* help for the checkbox section */}
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
              Preferences *
            </label>
            {preferenceOptions.map(option => (
              <label key={option.value} style={{ display: 'block', marginBottom: '5px' }}>
                <input 
                  type="checkbox" 
                  onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                  checked={preferences.includes(option.value)}
                  style={{ marginRight: '8px' }}
                />
                {option.label}
              </label>
            ))}
          </div>
          
          {/* help for the dropdown section */}
          <div>
            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
              Select from Dropdown *
            </label>
            <select 
              value={dropdown} 
              onChange={(e) => setDropdown(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="">-- Please select --</option>
              {dropdownOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none' }}>
            Submit
          </button>
        </form>
      </div>
      
      {/* help for showing final results */}
      {showAllDetails && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f8ff', border: '1px solid #007bff' }}>
          <h3>Form Submitted Successfully!</h3>
          <p><strong>Profile:</strong> Age {getFromStorage(STORAGE_KEYS.PROFILE)?.age}, Email {getFromStorage(STORAGE_KEYS.PROFILE)?.email}</p>
          <p><strong>Interest:</strong> {getFromStorage(STORAGE_KEYS.INTERESTS)}</p>
          <p><strong>Preferences:</strong> {preferences.join(', ')}</p>
          <p><strong>Dropdown Selection:</strong> {dropdown}</p>
        </div>
      )}
    </>
  );
};

export default SettingsSection;