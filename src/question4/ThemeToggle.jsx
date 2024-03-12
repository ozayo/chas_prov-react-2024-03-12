import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
  <>
  <button onClick={toggleTheme}>{theme} mode</button> 
    <p>Theme is now {theme}</p>
  </>
  )
};

export default ThemeToggle;
