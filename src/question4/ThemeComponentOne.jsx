import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeComponentOne = () => {
  const { theme } = useTheme();
  return (
    <>
    <div style={{
      background: theme === 'light' ? '#e7e7e7' : '#000',
      color: theme === 'light' ? '#000' : '#FFF'
      }}>
        <div className=' p-6 my-3'>
          <h1>Component One</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore hic laborum rem, harum fugit repellendus pariatur vero beatae accusamus quidem quae iusto dolores enim, voluptas vel quia quaerat quibusdam autem.</p>
        </div>
      </div>
    </>
    )
};

export default ThemeComponentOne;
