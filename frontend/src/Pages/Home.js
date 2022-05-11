import React, { useState,useEffect } from "react";
import axios from "axios";
import CurrencyButton from "../Components/CurrencyButton";
import TimeCurrencyCard from "../Components/TimeCurrencyCard";
import styles from "./Home.module.css"

function Home () {
  // ToDo 10.3.1
  /* set variables (data, shown data, currency) using hooks (useState) */
  const [data, setData] = useState([])
  const [showData, setShow] = useState([])
  const [currency, setCurrency] = useState("USD")

  // ToDo 10.3.2
  /* 
  set function to call backend (axios) and update bitcoin data using state setter
  use JSON.parse to parse response data 
  Hint: with axios use .get(url of backend) .then(response =>{ do something with response}) refrence https://axios-http.com/docs/example
  */
  const updateData = () => {
    // https://api.coindesk.com/v1/bpi/currentprice.json
    // https://http://127.0.0.1:8000/
    // C:\Users\ricok\OneDrive\Documents\GitHub\Training-Sprinternship22\backend
    axios.get('http://127.0.0.1:8000/get_bitcoin_prices')
      .then (response => {
        setData(JSON.parse(response.data))
        //console.log(JSON.parse(response.data))
      })
  }
  
  // update data on initialization (useEffect [], no dependencies)
  useEffect(() =>{
    updateData()
  },[])

  // ToDo 10.3.3
  // useEffect reference https://reactjs.org/docs/hooks-effect.html
  /* update data every 5 minutes (useEffect [data] as the dependency & setTimeout call updateData) 
    setTimeout refrence https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  */
  /*useEffect(() =>{
    setTimeout(updateData(), 300.0*1000)
  },[data])*/

  // ToDo 10.3.3
  /*
  set data to be shown ( sorting date descending and changing price if other currency is chosen) 
  (useEffect [currency,data] as the dependecies)
  
  first set a mutable variable 'let currShowData' as data
  
  to change currency use 
  currShowData = currShowData.map(el => ({...el, price:parseFloat((el.price*{insert exchange rate}).toFixed(4))}))
  reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 
                
  to sort use (since data has the oldest at first, we want to sort it by date so the latest is on top)
  currShowData.sort((a,b)=> {return(new Date(b.timestamp) - new Date(a.timestamp))})
  reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  */
  useEffect(() =>{
    let currData = data;
    if (currency !== 'USD') {
      currData = currData.map(el => ({...el, price:parseFloat((el.price*129.87).toFixed(4))}))
    }
    currData.sort((a, b) => {
      return (new Date(b.timestamp) - new Date(a.timestamp))
    })
    setShow(currData)
    console.log(currData)
  },[currency, data])
  
  // ToDo 10.3.4
  /* 
  handle currency state button onclick
  change currency with its state setter
  :currency:
    the current chosen currency
  :type:
    string
  */
  const changeCurrency = (currency) =>{
    setCurrency(currency)
  }

  // ToDo 10.3.5
  // call CurrencyButton and TimeCurrencyCard pass the variabless
  return (
      <div className={styles.bodyContainer}>
        <CurrencyButton currency={currency} changeCurrency={changeCurrency}/>
        <TimeCurrencyCard currency={currency} showData={showData}/>
      </div>
  );

}

export default Home;
