import React from 'react'
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
function Experience() {
  const navigate=useNavigate();
    const styles={
        backgroundImage:"url('')"
    }
  return (
    <div style={styles}>
    <h1 style={{textAlign:'center'}}>Projects</h1>
       <h3>MERN Stack projects:</h3>
       <h5>PROJECT MANAGEMENT TOOL: </h5><p>
In this project I have included the both frontend and backend development by using React js, Node js, MongoDB.
In this project Mainly I add the login page and creating a new account page for login purpose. In this I included the different field that used to clients getting all things in one place. I created a home page for displaying all things about projects to-do list and notification toggle and team details in different projects.
</p>
<Button onClick={()=>{navigate("/Main")}}>Back</Button>
    </div>
  )
}

export default Experience