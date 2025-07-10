import { useState } from "react";

const ProfileSection = ({ handleButtonClickFunction, currentTab }) => {
  // Initialize with saved data if exists
  const savedProfile = getFromStorage(STORAGE_KEYS.PROFILE);
  const [age, setAge] = useState(savedProfile?.age || "");
  const [email, setEmail] = useState(savedProfile?.email || "");
  const [errors, setErrors] = useState({}); // Quick error handling

  function handleFormSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    
    // help for validation - improved from your version
    if (!age || age <= 0) {
      newErrors.age = "Age is required and must be positive";
    }
    if (!validateEmail(email)) {
      newErrors.email = "Please enter email in correct format";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Save and proceed
    saveToStorage(STORAGE_KEYS.PROFILE, { age, email });
    handleButtonClickFunction(TABS.INTERESTS);
  }

  return (
    <>
      <Tabs handleButtonClickFunction={handleButtonClickFunction} currentTab={currentTab} />
      <div style={{ border: '1px solid black', padding: "12px", maxWidth: "650px" }}>
        <h2>Profile</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={handleFormSubmit}>
          <div>
            <label>Age *</label>
            <input 
              onChange={(e) => setAge(e.target.value)} 
              value={age}
              type='number' 
              min="1"
              style={{ 
                width: '100%', 
                padding: '8px',
                borderColor: errors.age ? 'red' : '#ccc' 
              }}
            />
            {errors.age && <div style={{ color: 'red', fontSize: '12px' }}>{errors.age}</div>}
          </div>
          
          <div>
            <label>Email *</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="email"
              style={{ 
                width: '100%', 
                padding: '8px',
                borderColor: errors.email ? 'red' : '#ccc' 
              }}
            />
            {errors.email && <div style={{ color: 'red', fontSize: '12px' }}>{errors.email}</div>}
          </div>
          
          <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
            Save & Next
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileSection;