import './Insert.css'
import db from './Firebase.js'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'


const Insert = () => {

    const [name, setName] = useState('')
    const [food, setFood] = useState('')
    
    const handleSubmit = async() => {
        const docRef = collection(db,'orders')

        await addDoc(docRef, {
            name: setName,
            food: setFood
        })
    }
        
    console.log(setName)
    return ( 
        <div className="insert">
            <h1>Insert</h1>
                <form className='insert-form'>

                <input type="text" placeholder="Name" value={name} 
                onChange = {(e) => {setName(e.target.value)}}/>


                <input type="text" placeholder="Food" value={food} 
                onChange = { (e) => {setFood(e.target.value)}}/>

                <button onClick={handleSubmit}>Submit</button>
                </form>

        </div>
     );
}
 
export default Insert;