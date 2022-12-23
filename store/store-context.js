import React, { useState, useEffect, useReducer} from 'react';

const StoreContext = React.createContext({
    selectedStore: [],
    selectHandler:() => { },
});

export const StoreContextProvider = ({children}) =>{
    const [selectedStore, setStore] =  useState([]);

    const StoreFilterHandler = (e) => {
        console.log('called');
        if (e.target.checked) {
            setStore((selectedStore) => {
                const newArray = [...selectedStore, e.target.value]
                return newArray
            }
            )
        } else {
            setStore((selectedStore) => {
                const newArray = selectedStore.filter(function (ele) {
                    return ele != e.target.value;
                });
                return newArray
            })
        }
    }

    const contextValue = {
        selectedStore:selectedStore,
        selectHandler:StoreFilterHandler
      };

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContext;