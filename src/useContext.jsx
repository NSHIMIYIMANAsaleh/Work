import React, { createContext, useContext, useState } from 'react';
import './context.css'
const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  var sec = 0;
  for(sec= 0; sec < 0; sec+=1){
      
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const UseContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consuming the context value

  return (
    <div className='w-50' style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
        <h1>Usecontext</h1>
     <h6>Current Theme: {theme}</h6>
      <button className='btn btn-primary btn-hover' onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default UseContext;