import {useEffect, useState} from 'react'
import axios from "axios"

const key = process.env.NEXT_PUBLIC_API_NINJA
const Funfact = () => {
    const [quote, setQuote] = useState("")
    const config = {
        headers: {
            'X-Api-Key': key
        }
    }

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/facts?limit=1', 
       config)
        .then((res) => {
            setQuote(res.data[0].fact)
         })
         .catch((err)=>{
            return(
                <div>
                    Error loading API
                </div>
            )
         })
    },[])

    return(
        <div>
             {quote}
        </div>
    )

}

export default Funfact;

