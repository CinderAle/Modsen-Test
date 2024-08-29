import { createContext, useContext } from 'react';

export type LocationContent = {
    path: string;
    setPath: (path: string) => void;
};

export const LocationContext = createContext<LocationContent>({
    path: '',
    setPath: () => {},
});

export const useLocationContext = () => useContext(LocationContext);
