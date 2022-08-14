import React from 'react'
import { Table } from 'reactstrap'
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
function Education() {
  const navigate=useNavigate();
    const styles ={
        backgroundImage:"url('https://blog.vantagecircle.com/content/images/2019/08/employee-experience.png')"
    }
    const education=[
        {
        institution:'LakiReddy BaliReddy College of Engineering',
        cource:'B-Tech',
        branch:'Electrical and Electronics Engineering',
        end:'2018',
        percentage:'8.435',
        board:'JNTUK'},
        {
            institution:'NRI COLLEGE',
            cource:'Intermediate',
            branch:'M.P.C',
            end:'2014',
            percentage:'87.9',
            board:'BIEAP'},
            {
                institution:'Moderen Public School',
                cource:'SSC',
                branch:'Standered',
                end:'2012',
                percentage:'8.5',
                board:'SSC'},
        ]
    
  return (
    <div style={styles}>
    <h1 style={{textAlign:'center'}}>Education Details</h1>
<Table board>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Cource</th>
      <th>Institution</th>
      <th>Board</th>
      <th>Cource</th>
      <th>Branch</th>
      <th>Year of Passing</th>
      <th>C.G.P.A</th>
    </tr>
    </thead>
    <tbody>
        {education.map((value,index) =>{
            return(
            <tr className="table-secondary" key={index}>
      <td>{index + 1}</td>
      <td>{value.cource}</td>
      <td>{value.institution}</td>
      <td>{value.board}</td>
      <td>{value.cource}</td>
      <td>{value.branch}</td>
      <td>{value.end}</td>
      <td>{value.percentage}</td>
    </tr>
        )})}
    </tbody>
  </Table>
  <Button onClick={()=>{navigate("/Main")}}>Back</Button>
    </div>
  )
}

export default Education