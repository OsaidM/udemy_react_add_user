import React, { useState } from 'react'
import styles from './ErrorModal.module.css';
const ErrorModal = ({setIsDesplayed, message}) => {
    const onClickHandler = (e)=>{
      e.stopPropagation();
      e.preventDefault();
      if(e.target === e.currentTarget) {// this to prevent in the middle element from activating the onClick event
        setIsDesplayed(false);
      }
    }
  return (
    <div className={styles.error} onClick={e=>onClickHandler(e)}>
        <section>
            <h1>Invalid Input</h1>
            <p>Please enter a valid {message}</p>
            <button onClick={e=>onClickHandler(e)}>Okay</button>
        </section>
    </div>
  )
}

export default ErrorModal