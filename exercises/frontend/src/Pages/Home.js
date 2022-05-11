import React, { useState,useEffect } from "react";
import TestButton from "../Components/TestButton";
import styles from "./Home.module.css"

function Home () {
  // set variables [chosen, setChosen] using hooks (useState) to "button 1"
  const [chosen, setChosen] = useState("Button 1")

  //  excercise 9.3
  // set variables [message, setMessage] using hooks (useState) to "you choose 1"
  const [message, setMessage] = useState("You Choose 1")

  //  excercise 9.3 update message when chosen change ( set dependecy to chosen) 
  useEffect(() =>{
    setMessage(chosen === "Button 1" ? "You Choose 1" : "You Choose 2")
  },[chosen])

  // handle currency button onclick
  const changeChosen = (clickedButton) =>{
    setChosen(clickedButton);
  }

  return (
      <div className={styles.bodyContainer}>
        <div className={styles.innerBodyContainer}>
          {chosen}
           {/* exercise 9.1 insert TestButton pass chosen and changeChosen ( pass by chosen={chosen})*/
            <TestButton chosen={chosen} changeChosen={changeChosen}/>
           }
          {message}
        </div>
      </div>
  );

}

export default Home;
