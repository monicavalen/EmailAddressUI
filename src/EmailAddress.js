import React from 'react'
import finkraftLogo from './finkraft_logo.svg'
import email_logo from './email_logo.svg'
import './App.css'

const EmailAddress = () => {
  return (
    <div className='container'>
        <img src={finkraftLogo } alt="Image not found" className='finkraftImage'/>
        <div className='line'></div>
        <div className='layout'>
        <div className='imageAndText'>
            <div className='imageFrame'>
            <img src={email_logo} alt='image not found' className='emailImage'/>
            </div>
       


        </div>
        </div>

    </div>
  )
}

export default EmailAddress