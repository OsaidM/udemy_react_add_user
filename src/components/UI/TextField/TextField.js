import React, { useState } from 'react'

const TextField = (props) => {
  const {onChange, value, label} = props;
  return (
    <p>
        <label>{label}</label><br/>
        <input type="text" onChange={e=>onChange(e)} value={value}/>
    </p>
  )
}

export default TextField