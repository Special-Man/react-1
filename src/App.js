import logo from './logo.svg';
import './App.css';
import Footer from "./Pages/Theme/Footer";
import Layout from "./Pages/Theme/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserManagement from './Pages/UserManagement'
import Faq from './Pages/Faq'
import Contact from './Pages/Contact'
import AddUser from './Pages/AddUser'
import Detail from './Pages/Detail'
import Login from './Pages/Login'
import PrivateRoute from './routes/PrivateRoute';
import UserDelete from './Pages/UserManagement/UserDelete';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import EditUser from './Pages/UserManagement/EditUser';



const App = () => {
//function App() {
  return (
    // <div className="App">
    
    // <Header/>
    // <Layout/> rjkernfkrefekjffse yo hey this is the app.js
    // <Footer/>
<div>
 {/* <Layout/> */}
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/Pages/UserManagement" element={<PrivateRoute component={UserManagement}/>} />
            <Route path="/Pages/AddUser" element={ < PrivateRoute component={AddUser}/>} />

            <Route path="/Pages/Faq" element={<Faq/>} />
            <Route path="/Pages/Contact" element={<Contact/>} />
            <Route path="/Pages/Detail/:id" element={<Detail/>} />
            
            <Route path="/UserManagement/UserDelete/:id" element={<UserDelete/>} />
            <Route path="/UserManagement/EditUser/:id" element={<EditUser/>} />


          </Route>
          <Route path="/Pages/Login" element={<Login/> } />
                  
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
      <Footer/>
    </div>
  );
};

export default App;
