import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom';

function layout() {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
}

export default layout;