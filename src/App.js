import logo from './logo.svg';
import './App.css';
import Header from "./Pages/Theme/Header";
import Footer from "./Pages/Theme/Footer";
import Layout from "./Pages/Theme/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserManagement from './Pages/UserManagement'
import Faq from './Pages/Faq'
import Contact from './Pages/Contact'

const App = () => {
//function App() {
  return (
    // <div className="App">
    
    // <Header/>
    // <Layout/> rjkernfkrefekjffse yo hey this is the app.js
    // <Footer/>
<div>
<Header/>
 {/* <Layout/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/Pages/UserManagement" element={<UserManagement/>} />
            <Route path="/Pages/Faq" element={<Faq/>} />
            <Route path="/Pages/Contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
