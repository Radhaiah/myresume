import React from 'react';
import {BsFacebook, BsGithub, BsLinkedin} from 'react-icons/bs';
import { List, ListInlineItem } from 'reactstrap';
export default function Footer(){
    return (
        <div className="footer bg-light" style={{color: 'red', textAlign: 'center'}}>
            <h5>Follow Me</h5>
            <List type="inline"> 
            <ListInlineItem><a href='https://github.com/Radhaiah' target="blank" ><h3><BsGithub/></h3></a></ListInlineItem>
            <ListInlineItem><a href='https://www.facebook.com/' target="blank"><h3><BsFacebook/></h3></a></ListInlineItem>
            <ListInlineItem><a href='https://www.linkedin.com/in/muthakana-radhaiah-44459ab7/' target="blank"><h3><BsLinkedin/></h3></a></ListInlineItem></List>
        </div>
    )
}