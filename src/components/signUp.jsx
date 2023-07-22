import { Link } from "react-router-dom";


function signUp() {
    return (<>
        <div className="sign-up p-4">
            <div className="container-xxl py-4">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <h5 className="mb-4">Sign Up for a newsletter</h5>
                        <h6>Get email updates on all our <Link>special offers</Link></h6>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="@example.com" aria-describedby="button-addon2"/>
                            <button className="btn" type="button" id="button-addon2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default signUp;