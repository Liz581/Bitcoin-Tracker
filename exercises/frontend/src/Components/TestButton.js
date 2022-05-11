import styles from "./TestButton.module.css"
import React from 'react'

/* 
:chosen:
  the current chosen button
:type:
  string
:changeChosen:
  function that change chosen value on parent
:type:
  function
*/
function TestButton ({chosen,changeChosen}) {
  return (
    <div className={styles.bodyContainer}>
          <button onClick={()=>changeChosen("Button 1")} className={chosen === 'Button 1' ? styles.currencyButtonActive : styles.currencyButtonDefault}>
            Button 1
          </button>
        
          <button onClick={()=>changeChosen("Button 2")} className={chosen === 'Button 2' ? styles.currencyButtonActive : styles.currencyButtonDefault}>
            Button 2
          </button>
    </div>         
  );

}

export default TestButton;
