import React from 'react';
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
export default function Header(){
    const navigate=useNavigate();
    return (
        <div className='header bg-primary text-white'>
            <Button onClick={()=>{navigate('/Carrer')}}>Carrer Object</Button>
            <Button onClick={()=>{navigate('/Technical')}}>Technical Skills</Button>
            <Button onClick={()=>{navigate('/Experience')}}>Projrcts</Button>
            <Button onClick={()=>{navigate('/Education')}}>Education Details</Button>
            <Button onClick={()=>{navigate('/About')}}>About Me</Button>
        </div>
    )
}
