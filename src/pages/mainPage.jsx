import ProfileSection from "../components/profileSection";
import {useState} from "react";
import InterestSection from "../components/interestSection";
import SettingsSection from "../components/settingsSection";

const MainPage = () => {
    const [selectedTab, setSelectedTab] = useState(TABS.PROFILE);
  
    function handleButtonClick(tabKey) {
      setSelectedTab(tabKey);
    }
  
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>Multi-Tab Form</h1>
        
        {selectedTab === TABS.PROFILE && (
          <ProfileSection 
            handleButtonClickFunction={handleButtonClick} 
            currentTab={selectedTab} 
          />
        )}
        {selectedTab === TABS.INTERESTS && (
          <InterestSection 
            handleButtonClickFunction={handleButtonClick} 
            currentTab={selectedTab} 
          />
        )}
        {selectedTab === TABS.SETTINGS && (
          <SettingsSection 
            handleButtonClickFunction={handleButtonClick} 
            currentTab={selectedTab} 
          />
        )}
      </div>
    );
  };

export default MainPage;

// What I should be doing is by default profile will be selected in the useState so profile form will be displayed.
// On click of the tab we will change the state and display that form. 
// instead of showing the diff page using router 
// Will we display the diff page based on the condition. 
