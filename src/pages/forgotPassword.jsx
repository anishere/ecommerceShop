import { useState } from "react";


function forgotPassword() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [submit, setSubmit] = useState(false)
    
    const handleSubmit = () => {
        setSubmit(!submit)
    }

    return (<>
        <section className="login p-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-4 card login-detail p-4 mx-auto">
                        <h4 className="text-center text-success">Forgot password</h4>
                        <p className="text-center text-success">Enter your email address to receive a reset confirmation</p>
                        <form className="mt-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="mb-3 form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="enter email here ..." id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        </form>
                        <button onClick={() => handleSubmit()} type="submit" className="button-link">Submit</button>
                        {submit && <p className="text-danger mt-3">An error occurred. Please try again later.</p>}
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default forgotPassword;