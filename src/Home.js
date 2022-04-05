import './Home.css'
import './Insert.css'
import db from './Firebase.js'
import { onSnapshot, addDoc, collection} from "firebase/firestore"
import { useState, useEffect } from 'react'


const Home = () => {

    const [data, setData] = useState([])
    const docRef = collection(db,'orders')
    
    const [name, setName] = useState('')
    const [food, setFood] = useState('')
    
    const handleSubmit = async () => {

        await addDoc(docRef, {
            name: name,
            food: food
        })

    }

    useEffect(() => {
            onSnapshot(docRef, (snapshot) => {
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

                <button onClick={handleSubmit}>Submit</button>


        </div>
            <h1>Food List</h1>
                {data.map(item => (
                    <div className = 'home-item'>
                    <ul>
                        <li>Name: {item.name}</li>
                        <li>Order: {item.food}</li>
                    </ul>
                    </div>
                ))}

        </div>
      );
}


export default Home;   


