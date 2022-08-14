import React from 'react'
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
function About() {
  const navigate=useNavigate();
  return (
    <div>
      <h5>Personal Details</h5>
      <ol>
      <li>	Mobile: 7675852326</li>
      <li>	Email:muthakanaradhaiah@gmail.com</li>
        <li>	Date of birth:  March 18, 1996</li>
        <li>	Sex: Male</li>
        <li>	Languages known: English, Hindi, Telugu</li>
        <li>	Father's name:  SRINIVASA RAO MUTHAKANA</li>
        <li>	Address:  55-3-884, VASAVI NAGAR, GUNTUR, 522001 AP.</li>
      </ol>
      <Button onClick={()=>{navigate("/Main")}}>Back</Button>
    </div>
  )
}

export default About