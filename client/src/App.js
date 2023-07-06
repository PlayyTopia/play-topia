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
// import ApproveTable from './componentes/dashboard/ApproveTable'
// import PendingPosts from './componentes/dashboard/PendingPosts'
// import UsersInfo from './componentes/dashboard/UserInfo'
// import MainDashboard from './componentes/dashboard/MainDashboard'
// import Sidebar from './componentes/dashboard/Sidebar'
// import ProfileMenu from './componentes/dashboard/NavDashboard'
import Sidebar from "./pages/dashboard/Sidebar";
import NavListMenuD from "./pages/dashboard/NavDashboard";
import MainDashboard from "./pages/dashboard/MainDashboard";
import EditAboutContact from "./pages/dashboard/EditAboutUs";
import UserInfo from "./componentes/dashboard/UserInfo"
import ApproveTable from "./componentes/dashboard/ApproveTable";
// import AdminInfo from "./components/dashboard/AdminInfo";
import  Chat  from "./pages/dashboard/Chat";
import PendingPosts from "./componentes/dashboard/PendingPosts";
// import PaymentsInfo from "./components/dashboard/Payment"

const App = () => {
  
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);


    const { loading, data, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
      if(localStorage.auth != null){
        dispatch(fetchUser());
      }
      }, [dispatch]);
      
     useEffect(() => {
      if(localStorage.auth != null){
      protectedIdRole()  
    }
    }, [data]);
      
   
  
      const protectedIdRole = async ()=> {
      let ManegeRouters =[];

        let role=data?.role
        if(role ==1){
          ManegeRouters= [true ,false,true ]
        }else{
          ManegeRouters= [false ,true,true ]
        }
        setHideRouterUser(ManegeRouters[0]);
        setHideRouterAdmin(ManegeRouters[1]);
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
      // <Router>
      //   <Routes>
      //   <Route path='PendingPosts' element={<PendingPosts/>}/>
      //   <Route path='UsersInfo' element={<UsersInfo/>}/>
      //   <Route path='ApproveTable' element={<ApproveTable/>}/>
      //   <Route index element={<MainDashboard/>}/>
      //   <Route path='Sidebar' element={<Sidebar/>}/>
      //   <Route path='ProfileMenu' element={<ProfileMenu/>}/>
      //   </Routes>
      // </Router>
      <Router>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavListMenuD />
        <Routes>
          <Route index element={<MainDashboard />} />
          <Route path="ListUser" element={<UserInfo />} />
          <Route path="EditAboutContact" element={<EditAboutContact />} />
          <Route path="Chat" element={<Chat />} />
          {/* <Route path="UserProfile" element={<UserProfile />} /> */}
          <Route path="ListRestaurant" element={<ApproveTable />} />
          {/* <Route path="ListAdmin" element={<AdminInfo />} /> */}
          <Route path="AcceptTables" element={<PendingPosts />} />
          {/* <Route path="PaymentsInfo" element={<PaymentsInfo />} /> */}
        </Routes>
      </div>
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

 
    </>

      
  );
};

export default App;
