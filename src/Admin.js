import './Admin.css';
import {signOut} from './Function';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import db from './Firebase.js'
import { onSnapshot, collection, query,  orderBy, updateDoc, doc} from "firebase/firestore"
import { useState, useEffect } from 'react';


const Admin = () => {
    
    const [adminName, setAdminName] = useState('')
    const [data, setData] = useState([])
    const docRef = collection(db,'orders')
    

    const [button, setButton] = useState('')


    

    //setting up the query
    const q = query(docRef, orderBy('createdAt', 'desc'))
    const auth = getAuth()



    //setting up the react state

    useEffect(() => {
      onSnapshot(q, docRef, (snapshot) => {
      const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      }))


      onAuthStateChanged(auth, (user) => {


        if (user) {
            const adminName = user.displayName
            const adminUid = user.uid;
            setAdminName(adminName)
            setData(newData)
            setButton(<button className='sign-out' onClick={signOut}>Sign Out</button>)
        
        
        } else {
            setAdminName('Please Sign In')
            
        }
      });

  })
}, [])

    const updateUser = async (id,ready) => {
        const userDoc = doc(db,'orders', id)
        const readyStatus = {ready: true}
        await updateDoc(userDoc, readyStatus)
    }

    return ( 
        
        <div className="admin">

                    <div className='admin-info'>
                    <h2>Hello,{adminName}</h2>

                    </div>
                    <div className='admin-orders'>
                        {data.map(item => (
                            <div className = 'admin-item'>
                            <ul>
                                <h2>Name: {item.name}</h2>
                                <p>Order: {item.food}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Ready: {item.ready ? 'Yes' : 'No'}</p>
                                <button className='ready-button' onClick={()=> {updateUser(item.id, item.ready)}}>Update Status</button>
                                
                            </ul>
                            </div>
                ))}
                </div>

                {button}                   
        </div>
    
     );
}
 
export default Admin;