import React from 'react';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import {Container} from 'reactstrap'
export default function Main(){
    return (<>
    <Container>
        <Header/>
        <Body/>
        <Footer/></Container></>
    )
}