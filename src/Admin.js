import './Admin.css';
import {signIn, signOut} from './Function';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import db from './Firebase.js'
import { onSnapshot, addDoc, collection, serverTimestamp, 
        query,  orderBy} from "firebase/firestore"
import { useState, useEffect } from 'react';


const Admin = () => {
    
    const [adminName, setAdminName] = useState('')
    const [adminId, setAdminId] = useState('')
    const [data, setData] = useState([])
    const docRef = collection(db,'orders')
    
    const [name, setName] = useState('')

    

    //setting up the query
    const q = query(docRef, orderBy('createdAt', 'desc'))
    const auth = getAuth()
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
            setAdminId(adminUid)
            setData(newData)

        } else {
            setName('Please Sign In')
            setAdminId('')
            
        }
      });

  })
}, [])


    return ( 
        
        <div className="admin">
            <h1>Welcome to admin Panel</h1>
            <div className="admin-content">
                <button className='sing-out' onClick={signOut}>Sign Out</button>
                
                <h1>Hello.</h1>
                <h1>{adminName}</h1>
                <p>{adminId}</p>
                <h1>Food List</h1>
                {data.map(item => (
                    <div className = 'home-item'>
                    <ul>
                        <h2>Name: {item.name}</h2>
                        <p>Order: {item.food}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Ready: {item.ready ? 'Yes' : 'No'}</p>
                        
                    </ul>
                    </div>
                ))}
           </div>
        </div>

     );
}
 
export default Admin;