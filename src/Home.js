import './Home.css'
import db from './Firebase.js'
import { onSnapshot, collection} from "firebase/firestore"
import { useState, useEffect } from 'react'


const Home = () => {

    const [data, setData] = useState([])
    const docRef = collection(db,'orders')

    useEffect(() => {
            onSnapshot((docRef), (snapshot) => {
            const newData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setData(newData)
        })
    }, [])

    return  (
        <div className="home">
            <h1>Food List</h1>
                {data.map(item => (
                    <div className = 'home-item'>
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.food}</li>
                    </ul>
                    </div>
                ))}

        </div>
      );
}


export default Home;   


