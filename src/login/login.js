import React, {useState, useEffect} from 'react';
import firebase from '../firebase'



// const getIds = () => {
//     let idData;

//     firebase.firestore().collection('users')
//         .onSnapshot((snapshot) => {
//             const idData = snapshot.docs.map(doc => ({
//                 id: doc.id,
//                 ...doc.data()
//             }));

            
//             setIds(idData)
//         });

//     console.log(idData)
// }





const login = () => {

    const getIds = () => {
    let data = 
            firebase.firestore().collection('users')
                .onSnapshot((snapshot) => {
                    const idData = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    console.log(idData)

                    return idData;
            });
            console.log(data);
    }

            
    
    let idArr =  getIds();
    console.log('ids:', idArr);
   

}

export default login;