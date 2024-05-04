import React, {createContext, useState, useContext} from 'react'


const PoojaContext = createContext();

const Context = ({children}) => {

    const [update, setUpdate] = useState(null);
  return <PoojaContext.Provider value={{update, setUpdate}}>{children}</PoojaContext.Provider>;
  
};

export default Context;

export const PoojaContextShare = () => useContext(PoojaContext);