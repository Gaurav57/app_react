import { useNavigate } from "react-router-dom";

function Logintext() {
    return (
        <div>
            <label for="username">Username</label>
            <input type="text" placeholder="Email or Phone" id="username"/>
        </div>
    );
}

function Loginpassword() {
    return (
        <div>
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password"/>
        </div>
    );
}

function Loginsubmit() {
    return (
        <div>
            <button>Log In</button>
        </div>
    );
}

function LoginRegister() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/register");
      }

    return (
        <div className="social">
            <a><div className="go" onClick={handleClick}> Sign up</div></a>
            <a><div className="fb">Forget Password</div></a>
        </div>
    );
}

function LoginDeclaration() {
    return (
        <div>
            <p className = "notice_div">If you are not register with us. Please click on Signup</p>
        </div>
    );
}
  
export  {Logintext,Loginpassword,Loginsubmit,LoginRegister,LoginDeclaration};