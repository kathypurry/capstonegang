import {useState, useEffect, createContext} from 'react';
import { auth } from './firebase';

export const UserContext = createContext();

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            setCurrentUser(user)
        });
    },[]);

    return (
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    );
};


