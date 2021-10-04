import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// firebase
// import { collection, doc, setDoc } from "firebase/firestore"; 
// import { db } from './Services/firebase';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
 
// console.log(db);  

// async function readAllUsers() {
//   try {

//     const usersRef = collection(db,'users');
   
//     console.log(`User Reference`, usersRef);

//   }
//   catch (err) {
//     console.error(err);
//   }
// }

// readAllUsers();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

