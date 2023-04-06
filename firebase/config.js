import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB9t1678VL9EZjZ5uT7jfQkLOVCJhL4xyY",
  authDomain: "hoy-bo-8b964.firebaseapp.com",
  databaseURL: "https://hoy-bo-8b964-default-rtdb.firebaseio.com",
  projectId: "hoy-bo-8b964",
  storageBucket: "hoy-bo-8b964.appspot.com",
  messagingSenderId: "551277367590",
  appId: "1:551277367590:web:c1ae3952ab6b3a63a7f1e7"
};



// const firebaseConfig = {
//   apiKey: "AIzaSyDF5JudBkhp8lAR2Sof3Dm7s_80pBwjxeU",
//   authDomain: "periodico-hoy-db.firebaseapp.com",
//   databaseURL: "https://periodico-hoy-db-default-rtdb.firebaseio.com",
//   projectId: "periodico-hoy-db",
//   storageBucket: "periodico-hoy-db.appspot.com",
//   messagingSenderId: "758100973171",
//   appId: "1:758100973171:web:7b1ffde4c754288204fc06"
// };



export const app = initializeApp(firebaseConfig)
