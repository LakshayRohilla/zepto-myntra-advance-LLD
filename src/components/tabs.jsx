const Tabs = ({ handleButtonClickFunction, currentTab }) => {
    const tabConfig = [
      { key: TABS.PROFILE, label: 'Profile' },
      { key: TABS.INTERESTS, label: 'Interest' },
      { key: TABS.SETTINGS, label: 'Settings' }
    ];
  
    return (
      <div style={{ marginBottom: '20px' }}>
        {tabConfig.map(tab => (
          <button 
            key={tab.key}
            onClick={() => handleButtonClickFunction(tab.key)}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: currentTab === tab.key ? '#007bff' : '#f8f9fa',
              color: currentTab === tab.key ? 'white' : 'black',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

export default Tabs;