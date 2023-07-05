import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUser, protectedData } from './actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';



// ------------------user -------------------------- //
import SignUp from './componentes/SignUpAndLogIn/SignUp'
import LogIn from './componentes/SignUpAndLogIn/Login';
import Navbar from './componentes/NavBar';
import Profile from './componentes/Profile';
import Home from './componentes/Home'
import Footer from './componentes/footer';
import Blog from './componentes/blog/Blog';
import BlogDetails from './componentes/blog/BlogDetails';
import Contact from './componentes/Contact';



// ------------------dashboard -------------------------- //
// import Profile from './componentes/Profile';
// import Profile from './componentes/Profile';
// import Profile from './componentes/Profile';
// import Profile from './componentes/Profile';
// import Profile from './componentes/Profile';
// import Profile from './componentes/Profile';

const App = () => {
  
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);


    const { loading, data, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);
      
     useEffect(() => {
      protectedIdRole()  
    }, [data]);
      
   
  
      const protectedIdRole = async ()=> {
      let ManegeRouters =[];

        let role=data?.role
        if(role ==1){
          ManegeRouters= [true ,false,true ]
        }else if (role ==2){
          ManegeRouters= [true ,true,false]
        }else{
          ManegeRouters= [false ,true,true ]
        }
        setHideRouterUser(ManegeRouters[0]);
        setHideRouterAdmin(ManegeRouters[1]);
        setHideRouterProvider(ManegeRouters[2]);
      }


// ------------------user -------------------------- //
   const AppRouter1 = () => {
    return (
      <Router>
        <Navbar /> 
        <Routes>
          <Route index element={<Home />} />    
          <Route path="SignUp" element={<SignUp />} />    
          <Route path="Profile" element={<Profile />} />    
          <Route path="LogIn" element={<LogIn />} />    
          <Route path="BlogDetails" element={<BlogDetails />} />    
          <Route path="Blog" element={<Blog />} />    
          <Route path="Contact" element={<Contact />} />    
        </Routes>
        <Footer/>
      </Router>
    );
  };





  //-----------------dashboard----------------------------------------//
  const AppRouter2 = () => {
    return (
      <Router>
        <Routes>
          {/* <Route index element={<Home />} />     */}
          {/* <Route index element={<Home />} />     */}
          {/* <Route index element={<Home />} />     */}
          {/* <Route index element={<Home />} />     */}   
        </Routes>
      </Router>
    );
  };










  const AppRouter3 = () => {
    return (
      <Router>
        {/* <NavListMenu /> */}
        {/* <Routes>
          <Route path="ContactUs" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Routes> */}
      </Router>
    );
  };

  return (

 
    <>
      {hideRouter1 ? null : (
        <>
          <AppRouter1 />
        </>
      )}

      {hideRouter2 ? null : (
        <>
          <div className="flex">
            <AppRouter2 />
          </div>
        </>
      )}

      {hideRouter3 ? null : (
        <>
          <AppRouter3 />
        </>
      )}
 
    </>

      
  );
};

export default App;
