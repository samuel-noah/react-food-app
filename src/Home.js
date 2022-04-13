import './Home.css'
import './Insert.css'
import db from './Firebase.js'
import { onSnapshot, addDoc, collection, serverTimestamp, 
        query,  orderBy} from "firebase/firestore"
import { useState, useEffect } from 'react'


const Home = () => {

    //setting up the react state
    const [data, setData] = useState([])
    const docRef = collection(db,'orders')
    
    const [name, setName] = useState('')
    const [food, setFood] = useState('')
    const [quantity, setQuantity] = useState('')
    

    //setting up the query
    const q = query(docRef, orderBy('createdAt', 'desc'))

    const handleSubmit =  () => {

         addDoc(docRef, {
            name: name,
            food: food,
            quantity: quantity,
            ready: false,
            createdAt: serverTimestamp() 
        })
        .then(() => {
            // alert('Document successfully written!');
            window.location.reload(false);
        })
        .catch (error => {
            console.error("Error writing document: ", error);
        })

    }

    useEffect(() => {
            onSnapshot(q, docRef, (snapshot) => {
            const newData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setData(newData)
        })
    }, [])

    return  (
        <div className="home">
        <div className="insert">
            <h1>Insert orders</h1>


                <input type="text" placeholder="Name" 
                onChange = {(e) => {setName(e.target.value)}}/>


                <input type="text" placeholder="Food"  
                onChange = { (e) => {setFood(e.target.value)}}/>

                <input type="text" placeholder="Quantity"  
                onChange = { (e) => {setQuantity(e.target.value)}}/>



                <button className='submit'onClick={handleSubmit}>Submit</button>
            </div>
        </div>
      );
}


export default Home;   


