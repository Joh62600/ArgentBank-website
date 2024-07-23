import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSignIn, setSignOut } from "../../redux/reducer/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../img/argentBankLogo.webp";
import "./Header.css";

function Header() {
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const userProfile = useSelector((state) => state.user);
   const dispatch = useDispatch();

   const userSignOut = () => {
      dispatch(setSignOut());
   };

   useEffect(() => {
      const token = localStorage.getItem("authToken");
      const userName = localStorage.getItem("userName");

      if (token && userName) {
         dispatch(setSignIn({ token, userName }));
      }
   }, [dispatch]);

   return (
      <header>
         <Link to="/">
            <img className="logo" src={Logo} alt="Argent Bank" />
            <h1 className="hidden">Argent Bank</h1>
         </Link>

         <nav>
            {isAuthenticated ? (
               <>
                  <Link to="/user" className="link user-profile">
                     <FontAwesomeIcon icon={faUserCircle} className="icon-header" />
                     {userProfile.userName ? userProfile.userName : userProfile.firstName}
                  </Link>
                  <Link to="/login" onClick={userSignOut} className="link">
                     <FontAwesomeIcon icon={faSignOutAlt} className="icon-header" />
                     Sign Out
                  </Link>
               </>
            ) : (
               <Link to="/login" className="link">
                  <FontAwesomeIcon icon={faUserCircle} className="icon-header" />
                  Sign In
               </Link>
            )}
         </nav>
      </header>
   );
}

export default Header;
