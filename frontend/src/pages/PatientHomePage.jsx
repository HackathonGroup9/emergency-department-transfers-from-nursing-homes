import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


export const PatientHomePage = () => {
const [patient, savepatient] = useState([]) 

useEffect(() => {
    const fetchpatients = async () => { //making an api request with the async
        try{
            const res = await axios.get("http:localhost:3000/patient")
            console.log (res)
        }catch(err){
            console.log(err)
        }
    }
})

  return (
    <div>
        PatientHomePage
    </div>
  )
}
