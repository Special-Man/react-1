import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";


const Layout= () =>{
    return(
        <div>
          <Header/>
        {/* { <Header/> } */}

        <div class="flex-wrap"> 

      <Sidebar/>

  
        <div class="body1">
        
       <Outlet/>


        </div>

        </div>

  
        {/* <Footer/> */}
        </div>
    )
};
export default Layout;