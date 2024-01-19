import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {

    const headerRef = useRef(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleShowLoginModal = () => setShowLoginModal(true);
    const handleCloseLoginModal = () => setShowLoginModal(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
        // Adjust the scroll threshold according to your design
        const isSticky = scrollTop > 50;
  
        // Get the current header element using useRef
        const headerElement = headerRef.current;
  
        // Toggle the "sticked" class based on the scroll position
        if (headerElement) {
          headerElement.classList.toggle('sticked', isSticky);
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array ensures that the effect runs once after the initial render
    
  return (

   
  

    <header  id="header" ref={headerRef} className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="d-flex align-items-center">Nova</h1>
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Portfolio</Link></li>
            <li><Link to="/reg">Team</Link></li>
            <li><Link to="/home/login"  onClick={handleShowLoginModal}>Blog</Link></li>
            <li className="dropdown">
              <Link to="#">
                <span>Dropdown</span>
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </Link>
              <ul>
                <li><Link to="#">Dropdown 1</Link></li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Dropdown</span>
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="#">Contact</Link></li>
            <Login show={showLoginModal} handleClose={handleCloseLoginModal} />
          </ul>
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default Header;
