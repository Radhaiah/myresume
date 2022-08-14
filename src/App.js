import './App.css';
import {Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
function App() {
  const navigate=useNavigate()
  return (
    <div className="App">
    <h2>Welcome TO My Page Respected Sir/Madam</h2>
      <img src="https://cdn.pixabay.com/photo/2017/09/26/20/22/introduction-2789965_960_720.png" height="25%" width="25%" alt="" />
    <h3>Please Click The bellow Button To Know About Myself</h3>
    <Button onClick={()=>navigate("/main")}>Click Me</Button>
    <h2>Thank You</h2>
    </div>
  );
}

export default App;
