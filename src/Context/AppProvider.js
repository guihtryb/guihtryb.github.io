import { useEffect, useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 20 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
  const contextValue = {
    scrolled,
  };

  return (
    <AppContext.Provider value={ contextValue } >
      { children }
    </AppContext.Provider>
  );
}

