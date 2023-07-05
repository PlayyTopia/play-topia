import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
import { Link } from "react-router-dom";
export default function NavbarA() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lgall"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lgall"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link to="/Blog" className="flex items-center">
          Blogs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lgall"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link to="/" className="flex items-center">
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="lgall"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <Link to="/Contact" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
      
    </ul>
  );
 
  return (
    <Navbar className="py-2 lg:py-4 bg-[#10143d]
      sticky top-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <Link to="/"> <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-3xl"
        >
          Playtopia
        </Typography>
        </Link> 
        <div className="hidden lg:block">{navList}</div>
      
      {
      
      localStorage.auth == null ?    
      
      <Link to="/LogIn">
      <Button variant="gradient" size="lg" className="hidden lg:inline-block">
        <span>LogIn</span>
      </Button>
      </Link> 

      :   
      
      <Link to="/Profile">
      <Button variant="gradient" size="lg" className="hidden lg:inline-block">
        <span>Profile</span>
      </Button>
      </Link> 
      
      }
      
 
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      {openNav && (
        <div className="container mx-auto">
          {navList}
       <Link to="/SignIn">
       
         <Button variant="gradient" size="lg" fullWidth className="mb-2">
            <span>Log In</span>
          </Button>

          </Link>
        </div>
      )}
    </Navbar>
  );
}