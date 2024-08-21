import React,{useState} from 'react'
import { FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { GiCarWheel, GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll';
import "./Navbar.css"




const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className='navbar font-sora'>
    <div className='containers'>
      <div className='logo'> race</div>

      <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
        

        

        

       

        

        <li> <a href=""> <Link activeClass='active' to="Home" spy={true} smooth={true} duration={500}>Home</Link></a></li>
        <li> <a href=""> <Link activeClass='active' to="About" spy={true} smooth={true} duration={500}>About</Link></a></li>
        <li> <a href=""> <Link activeClass='active' to="Service" spy={true} smooth={true} duration={500}>Service</Link></a></li>
        <li> <a href="">  <Link activeClass='active' to="Doctor" spy={true} smooth={true} duration={500}>Doctor</Link></a></li>
        <li> <a href=""> <Link activeClass='active' to="Blog" spy={true} smooth={true} duration={500}>Blog</Link></a></li>
        <li> <a href=""> 
        <Link activeClass='active' to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>

        <div className='mobile-menu'>
          <button>Make Appiontment</button>
          
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <GiCarWheel />

          </div>

        </div>
        
      </ul>
      

      <ul className='nav-menu hide'>
        <li><a href=""> Make Appiontment</a></li>
        
      </ul>

      <div className="humburger" onClick={handleNav}>
        {nav ? <FaTimes /> : <GiHamburgerMenu />}
      

      </div>


    </div>
    



  </div>

  )
}

export default Navbar