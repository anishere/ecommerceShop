import { Link } from 'react-router-dom';
import blog1 from '../assets/imgs/blog1.jpg'
import blog2 from '../assets/imgs/blog2.jpg'
import blog3 from '../assets/imgs/blog3.jpg'
import blog4 from '../assets/imgs/blog4.jpg'

function blog() {
    return (<>
        <div className="blog-card my-md-0 my-2 col-md-3">
            <div className="card">
                <img src={blog1} className="rounded m-3 img-fluid" alt="..."/>
                <div className="card-body">
                    <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the cards content.</small></p>
                    <Link to={'about'} className="btn p-2 mt-4">Learn more</Link>
                </div>
            </div>
        </div>
        <div className="blog-card my-md-0 my-2 col-md-3">
            <div className="card">
                <img src={blog2} className="rounded m-3 img-fluid" alt="..."/>
                <div className="card-body">
                    <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the cards content.</small></p>
                    <Link to={'about'} className="btn p-2 mt-4">Learn more</Link>
                </div>
            </div>
        </div>
        <div className="blog-card my-md-0 my-2 col-md-3">
            <div className="card">
                <img src={blog3} className="rounded m-3 img-fluid" alt="..."/>
                <div className="card-body">
                    <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the cards content.</small></p>
                    <Link to={'about'} className="btn p-2 mt-4">Learn more</Link>
                </div>
            </div>
        </div>
        <div className="blog-card my-md-0 my-2 col-md-3">
            <div className="card">
                <img src={blog4} className="rounded m-3 img-fluid" alt="..."/>
                <div className="card-body">
                    <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the cards content.</small></p>
                    <Link to={'about'} className="btn p-2 mt-4">Learn more</Link>
                </div>
            </div>
        </div>
    </>);
}

export default blog;