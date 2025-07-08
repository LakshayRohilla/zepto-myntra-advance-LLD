const Tabs = ({handleButtonClickFunction}) => {
    return ( 
        <>
            <button onClick={() => handleButtonClickFunction('profile')}>
                Profile
            </button>
            <button onClick={() => handleButtonClickFunction('interests')}>
                Interest
            </button>
            <button onClick={() => handleButtonClickFunction('settings')}>
                Settings
            </button>
        </>
    );
}

export default Tabs;