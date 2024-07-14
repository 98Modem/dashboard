import React, { Children, creatContext, useContext, useState } from 'react';

const StateContext = creatContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ Children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
            }}
        >
            { Children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);