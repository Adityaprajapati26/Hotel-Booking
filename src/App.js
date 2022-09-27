import logo from './logo.svg';
import './App.css';
import Login from './Auth/Login';
import Sign from './Auth/Signup';
import Mainroutes from './Routes/Mainroutes';



function App() {
  return (
    <div className='App' >
      {/* <Login/> */}
      <Mainroutes/>
      
    </div>
  );
}

export default App;
