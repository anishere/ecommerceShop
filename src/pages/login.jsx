import { useState } from "react";
import { Link } from "react-router-dom";

function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [register, setRegister] = useState(false)

    const handleToggle = () => {
        setRegister(!register)
    }

    return (<>
        <section className="login p-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-4 card login-detail p-md-5 p-3 mx-auto">
                        <h4 className="text-center text-success">{register ? 'Sign Up' : 'LOGIN'}</h4>
                        <p className="text-center text-success mb-4">{register ? 'Join us in shopping!!' : 'Welcome Back!'}</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="mb-3 form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="enter email here ..." id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="mb-3 form-label">Password</label>
                                <input type="password" className="form-control" placeholder="enter password here ..." id="exampleInputPassword1"/>
                            </div>
                            {register &&
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="mb-3 form-label">Confirm Your password</label>
                                <input type="password" className="form-control" placeholder="enter password here ..." id="exampleInputPassword1"/>
                            </div>
                            }
                        </form>
                        {register === false && <Link to={'../forgot'}>Forgot password?</Link>}
                        <div className="mt-3 d-flex justify-content-between">
                            <span>{register ? 'Have an account' : 'Dont have an account ?'}</span> 
                            <Link onClick={() => handleToggle()}>{register ? 'Login' : 'Sign Up'}</Link>
                        </div>
                        <button className="button-link mt-3">{register ? 'Sign up' : 'Login'}</button>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default login;