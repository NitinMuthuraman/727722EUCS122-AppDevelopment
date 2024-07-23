import { useState } from 'react';
const Register=()=>{
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => {
    setVisible(!visible);
    };

    const Register1 = () => {
        return(
        <div>
            <div>
            <h1>Register</h1>
            <input type='email' placeholder='Enter E-mail' className='input' /><br></br>
            <input type='text' placeholder='UserName' className='input' />
            <div>
                <input  placeholder='Enter Password' className='input' />
            </div>
            <button onClick={toggleVisibility}>Login</button><br></br>
            <button><b>Register</b></button>
            </div>
        </div>
        )
    };
    const Login1 = () => {
        return(
        <div>
            <h1>Login</h1>
            <input type='email' placeholder='Enter E-mail' className='input' />
            <div>
            <input  placeholder='Enter Password' className='input' />
            </div>
            <button onClick={toggleVisibility}>Register</button><br></br>
            <button><b>Login</b></button>
        </div>
        )
    };
    return(
        <>
            {visible ? <Login1></Login1>:<Register1></Register1>}
        </>
    );
};
export default Register;