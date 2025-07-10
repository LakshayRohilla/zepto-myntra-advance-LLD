const validateEmail = (email) => {
    if (!email) return false;
    return /\S+@\S+\.\S+/.test(email);
  };
  
  // help for localStorage operations - centralized
  const saveToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  const getFromStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
      return null;
    }
  };