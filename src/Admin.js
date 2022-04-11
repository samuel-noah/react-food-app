import './Admin.css';
import {signIn, signOut} from './Function';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';


const Admin = () => {
    const [content,setContent] = useState('');
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setContent('Welcome');
            const uid = user.uid;
            
        } else {
            setContent('Please sign in');
        }
      });
    return ( 
        
        <div className="admin">
            <h1>Welcome to admin Panel</h1>
            <div className="admin-content">
                <button className='sing-in'onClick={signIn}>Open Admin Bar</button>
                <button className='sing-out' onClick={signOut}>Sign Out</button>
                {content}
           </div>
        </div>

     );
}
 
export default Admin;