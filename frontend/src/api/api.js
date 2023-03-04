import {useState, useEffect} from "react";


const stuff = 'http://api.weatherapi.com/v1/current.json?key=47a53ef1aeff4b29ba811204220210&q=London&api=no';

function Api(){

    const [temp, setTemp] = useState(0)

    // const [temp, setTemp] = useState(0)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await fetch(stuff)
    //     }
    // })
}