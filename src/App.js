import './App.css';
import './global.css'
import './Contact.css'
// import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Page from './Page';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
// import SignIn from './Account'
// import Contact from './Contact';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (

    // <Page />


    <>
      <Navbar />
      {/* <Page /> */}
      <Routes>
        <Route path='/' element={<Page />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/account' element={<Account />} /> */}

      </Routes>
      <Footer />
    </>

  );
}

export default App;
