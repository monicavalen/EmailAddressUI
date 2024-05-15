import React from 'react'
// import EmailAddress from './EmailAddress'
import finkraftLogo from './finkraft_logo.svg'
import email_logo from './email_logo.svg'
import line from './line.svg'
import mailImage from './image 17.png'
import './App.css'
import xIcon from './xIcon.svg'
import clickBelowLine from './clickBelowLine.svg'


const App = () => {
  const handleClick = () => {
    console.log('Confirm button is clicked');
  };

  const handleMouseOver = (event) => {
    event.target.style.cursor = 'pointer';
  };
  return (
    <>
      <div className='container'>
        <div className='finkraftFrame'>
          <img src={finkraftLogo} alt='image not found' className='finkraftImage' />
          <img src={line} alt='image not found' />
          
          <img src={xIcon} alt='image not found' className='XIcon' />
        
        </div>
        <div className='bodySection'>
          <div className='centre'>
            <div className="imageFrame">
              <img src={mailImage} alt='image not found' />
            </div>
            <div className='Text'>
              <span className='emailConfirmText'>Confirm your Email address</span><br />
              <span className='clickBelowText'>Hi, please click below to confirm your email</span>
            </div>
            </div>
            <div className='buttonLinks'>
              <div className='button' onClick={handleClick} onMouseOver={handleMouseOver}>
                <p className='buttonText'>Confirm</p>
              </div>

              <div className='clickBelowLine'>
                <img src={clickBelowLine} alt='' />
              </div>
              <p className='link'>https://www.finktai.com/free-icon/email</p>
            </div>
          
        </div>
        
      </div>
    </>



  )
}

export default App