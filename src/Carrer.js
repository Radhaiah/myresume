import React from 'react'
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
export default function Carrer() {
  const navigate=useNavigate();
    const styles={
        backgroundImage:"url('https://s35764.pcdn.co/wp-content/uploads/2021/09/career-pathing-2.png')",
        height:"20%",
        width:"100%",
        textAlign:"center"
    }
  return (
    <div style={styles}>
        <h1>Carrer Object</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 style={{color:"red"}}>
        To continuously strive for higher achievement in life and establish myself as a perfect and accept challenging work. 
        Contribute to the development of esteemed organisation by smart work and acquired skills.
        </h2>
        <Button onClick={()=>{navigate("/Main")}}>Back</Button>
    </div>
  )
}
