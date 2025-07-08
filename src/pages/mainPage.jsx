import ProfileSection from "../components/profileSection";
import {useState} from "react";
import InterestSection from "../components/interestSection";
import SettingsSection from "../components/settingsSection";

const MainPage = () =>{
    const [selectedTab, setSelectedTab] = useState('profile');

    function handleButtonClick(where){
        setSelectedTab(where);
    }

    return (
        <div style={{padding: '20px'}}>
            {selectedTab === 'profile' && (
                <ProfileSection handleButtonClickFunction={handleButtonClick}/>
            )}
            {selectedTab === 'interests' && (
                <InterestSection handleButtonClickFunction={handleButtonClick}/>
            )}
            {selectedTab === 'settings' && (
                <SettingsSection handleButtonClickFunction={handleButtonClick}/>
            )}
        </div> 
    );
}

export default MainPage;

// What I should be doing is by default profile will be selected in the useState so profile form will be displayed.
// On click of the tab we will change the state and display that form. 
// instead of showing the diff page using router 
// Will we display the diff page based on the condition. 
