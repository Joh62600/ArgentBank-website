import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSignIn, setSignOut } from "../../redux/reducer/authSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../img/argentBankLogo.webp";
import "./Header.css";

function Header() {
   //* Extrait valeur depuis le store
   const user = useSelector((state) => state.auth.isAuthenticated);

   const dispatch = useDispatch(); // màj valeur
   const userProfile = useSelector((state) => state.user); // extrait user profil

   //* Deco user
   const userSignOut = () => {
      dispatch(setSignOut());
   };

   useEffect(() => {
      const token = localStorage.getItem("authToken");
      if (token) {
         dispatch(setSignIn({ token })); // co user
      }
   }, [dispatch]);

   return (
      <header>
         <Link to="/">
            <img className="logo" src={Logo} alt="Argent Bank" />
            <h1 className="hidden">Argent Bank</h1>
         </Link>

         <nav>
            {user ? (
               <>
                  <Link to="/User" className="link">
                     <FontAwesomeIcon icon={faUserCircle} className="icon-header" />
                     {!userProfile.userName ? <>{userProfile.firstName}</> : <>{userProfile.userName}</>}
                  </Link>
                  <Link to="/User"  className="link">
                     <FontAwesomeIcon icon={faCog} className="icon-header" />
                  </Link>
                  <Link to="/Login" onClick={userSignOut} className="link">
                     <FontAwesomeIcon icon={faSignOutAlt} className="icon-header" />
                     Sign Out
                  </Link>
               </>
            ) : (
               <Link to="/Login" className="link">
                  <FontAwesomeIcon icon={faUserCircle} className="icon-header" />
                  Sign In
               </Link>
            )}
         </nav>
      </header>
   );
}

export default Header;
