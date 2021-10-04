import React from 'react';

// firebase firestore
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from './Services/firebase';
const CurrentUserProfile = () => {

    async function readAllUsers() {
        try {
      
          const usersRef = collection(db,'users');
         
          console.log(`User Reference`, usersRef);
      
        }
        catch (err) {
          console.error(err);
        }
      }
      
      readAllUsers();

    return (
        <div>

        </div>
    )
}

export default CurrentUserProfile;