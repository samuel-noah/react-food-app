import './Home.css'
import db from './Firebase.js'
import { getDocs, collection} from "firebase/firestore"
import { useState, useEffect } from 'react'


const Home = () => {
    const [data, setData] = useState([]);
    const docRef = collection(db, 'orders')
    
    useEffect(() => {

        const getData = async () => {
            const data = await getDocs(docRef)
            setData(data.docs.map((doc) => ({...doc.data()})))
        }
        getData()
    }, [])
    return (
        
        <div className="home">
            <div className="home__container">
                <h1> Content Management System </h1>
                {data.map((item) => {
                    return(
                    <div className="home__item">
                        <h2>{item.name}</h2>
                        <h2>{item.food}</h2>
                    </div>
                )
            })}
            </div>
        </div>
     );
}
 
export default Home;