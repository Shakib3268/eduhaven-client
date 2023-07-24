import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const{user,logOut} = useContext(AuthContext)
  const handleLogOut= () =>{
    logOut()
    .then()
    .catch(error => {
      console.log(error)
    })
  }
    const navOptions = <>
    <Link to='/'><li><a>Home</a></li></Link>
    <Link to='colleges'><li><a>Collages</a></li></Link>
    <Link to='admission'><li><a>Admission</a></li></Link>
    <Link to='mycollege'><li><a>My College</a></li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">EduHaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  {user ?.photoURL ? <img src={user.photoURL} className='rounded-full me-2 w-[50px] h-[50px]'/> :
      <p><FaUserCircle style={{fontSize:'1.5rem'}}></FaUserCircle></p>}
          {user ?
           <button onClick={handleLogOut} className="btn">LogOut</button>:
           <Link to='login'><button className="btn">Login</button></Link>
          }
  </div>
</div>
    );
};

export default Navbar;
