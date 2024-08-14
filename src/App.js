
import Route  from 'react-router-dom';
import {Logintext,Loginpassword,Loginsubmit,LoginRegister,LoginDeclaration} from './loginProcess/loginPage';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form>
          <h3>Login Here</h3>
          <Logintext/>
          <Loginpassword/>
          <Loginsubmit/>
          <LoginRegister/>
          <LoginDeclaration/>
        </form>
    </div>
  );
}

export default App;
