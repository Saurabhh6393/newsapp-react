import React, { Component } from 'react'
import loader from "./loading.gif"

const Spinner = ()=> {
  
    return (
      <div className='text-center'>
        <img src={loader} alt='loading'/>
      </div>
    )
  }
export default Spinner

