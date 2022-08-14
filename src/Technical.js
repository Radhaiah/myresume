import React from 'react'
import { List, ListInlineItem } from 'reactstrap'
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
function Technical() {
  const navigate=useNavigate();
    const styles={
        backgroundImage:"url('https://t4.ftcdn.net/jpg/03/05/11/25/360_F_305112572_ZIl735QFruE4xp3SNKLAhHnr3jkdBKib.jpg')",
        height:"20%",
        width:"100%",
        textAlign:"center"
    }
  return (
    <div style={styles}>
        <h1>Technical Skills and Softwares</h1>
        <List type="inline"> 
        <ListInlineItem><img src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png' alt=""  height="250" width="250"/>
        </ListInlineItem>
        <ListInlineItem><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt=""  height="250" width="250"/>
        </ListInlineItem>
        <ListInlineItem><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png' alt=""  height="250" width="450"/>
        </ListInlineItem>
        <ListInlineItem><img src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' alt=""  height="250" width="750"/>
        </ListInlineItem>
   </List>
   <Button onClick={()=>{navigate("/Main")}}>Back</Button>
    </div>
  )
}

export default Technical