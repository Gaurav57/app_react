
import '../css/Registration.css';
import Route  from 'react-router-dom';

function RegistrationProcess() {
    return (
        
        <div className='registion_form'>
            <div className="content">
            <form>
            <h3>Registerion Form</h3>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="Enter your username" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder="Enter your email" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" placeholder="Enter your number" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter your password" required/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="password" placeholder="Confirm your password" required/>
                    </div>
                </div>
                <div className="button">
                    <input type="submit" value="Register"/>
                </div>
                
            </form>
            </div>
        </div>

    );
}


export default RegistrationProcess;