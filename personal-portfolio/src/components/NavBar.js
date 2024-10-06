// To manage the link that we are on currently we need to create State that holds that information
import {useState, useEffect} from "react";
import { Navbar, Container } from "react-bootstrap";

// Creating funtional componenet for now with no parameters

import { Container, Nav, NavDropdown } from "react-bootstrap"

export const NavBar = () => {
  // activeLink is the state which holds the information about current Link
  // setActiveLick is the intial state i.e. home
  const [activeLink, setActiveLink] = useState('home');

  // Inorder to change the effects when scrolled we need add scrolled state which determine 
  // whether or not the page was scrolled and intially its false that's why seScrolled is set to false
  const[scrolled, seScrolled] = useState(false);

  // useEffect will determine wether its been scrolled or not and will trigger
  // once the scroll starts 
  // It will fire on mount 
  useEffect(()=> {
    // onScroll is a function that determine what happens on scroll
    const onScroll = () => {
      // window.scrollY is the value upto which the page has been scrolled. In this
      // case we want to set seScrolled to true whenever its scrolled above 50 
      if (window.scrollY > 50) {
        seScrolled(true);
      } 
      // if the user has scrolled back or not scrolled to 50 we will set seScrolled to false
      else {
        seScrolled(false);
      }
    }

    // as onScroll is just a function and will not fire on its own. Therefore, we 
    // need to add window.addEventListener which gets fired on "scroll" and calls the 
    // onScroll function which tells what to do on scroll
    window.addEventListener("scroll",onScroll);

    // As we are adding EventListener on Mount(i.e. the moment the page loads) we need to 
    // remove it when the component gets removed from the dome 
    return window.removeEventListener("scroll",onScroll);

  },[])

  const onUpdateActiveLink = (value) => 
  {
    setActiveLink(value);
  }

  return (
    // We can give our own colors here
    // We can give className based on the condition scrolled wise i.e. if scrolled is 
    // set to true it means it scrolled or else leave it as it is 
    <NavBar  expand="lg" className={scrolled ? "scrolled":""}> 
      <Container>

        // To add image logo to our Navbar
        <NavBar.Brand href ="home"> 
          <img src={''} alt="Logo" />
        </NavBar.Brand>

        // NavBar.Toogle is used when using our site is on mobile and our Navbar is minimized
        <NavBar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span>
        </NavBar.Toggle>

        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me_auto">
            // Based on the link that is active we will highlight the link at the top
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

          // Social media links like LinkedIn,Github and Leetcode
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={} alt=""/></a>
              <a href="#"><img src={} alt=""/></a>
              <a href="#"><img src={} alt=""/></a>
            </div>

            //Contact us form
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>

        </NavBar.Collapse>
      </Container>

    </NavBar>
  )
}