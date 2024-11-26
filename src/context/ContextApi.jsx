import React, { createContext } from 'react';
export const ApiContext = createContext();


const ContextApi = ({ children }) => {

    const BASE_URL = "https://todolist-89d46-default-rtdb.firebaseio.com/";


    return (

            <ApiContext.Provider value={{BASE_URL}}>
            {children}
            </ApiContext.Provider>
    )
}

export default ContextApi