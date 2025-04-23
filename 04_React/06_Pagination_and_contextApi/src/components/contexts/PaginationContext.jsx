import React from 'react'
import { useContext } from 'react';

const PaginationContext = React.createContext();

export default function PaginationProvider({ children }) {
    const pageProps = {};
    return (
        <PaginationContext.Provider value={pageProps}>{children}</PaginationContext.Provider>
    )
}

export const usePaginationContext = () => {
    return useContext(PaginationContext);
}