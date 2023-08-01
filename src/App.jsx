import './App.css'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import Cart from './pages/cart'
import Wishlist from './pages/wishlist'
import Detail from './pages/detail'
import ScrollToTop from './components/scrollToTop'
import ForgotPassword from './pages/forgotPassword'
import Payment from './pages/payment'

// deploy

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq7avlxOvSeJNjlOCak9jQE1QBsTIfs5g",
  authDomain: "ecommerceapp-5b40c.firebaseapp.com",
  projectId: "ecommerceapp-5b40c",
  storageBucket: "ecommerceapp-5b40c.appspot.com",
  messagingSenderId: "477216598237",
  appId: "1:477216598237:web:2d7c9c3ea65ed0c9439334",
  measurementId: "G-H1QYKLZ338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

//deploy end

function App() {

  return (
    <> 
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='detail' element={<Detail/>}/>
            <Route path='blog' element={<Blog />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='wishlist' element={<Wishlist />}/>
            <Route path='login' element={<Login />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='forgot' element={<ForgotPassword/>} />
            <Route path='payment' element={<Payment/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
