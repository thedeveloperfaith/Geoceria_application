import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


const TestAPI = () => {
    const [getAPI, setGetAPI] = useState([]);

    const api = async () => {
        try {
            const res = await axios.get ( "https://api.escuelajs.co/api/v1/products")
            setGetAPI(res?.data)
            console.log (res.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        api();
    },[])




    
  return (
    <div>
      hhhhhhhhh
    </div>
  )
}

export default TestAPI
