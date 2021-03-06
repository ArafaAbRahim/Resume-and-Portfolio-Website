import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { HomeRounded, Telegram } from '@material-ui/icons';
import {Link, NavLink, withRouter} from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css';


const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
       <Navbar expand="lg" sticky="top" className="header">
           {/* Home link */}
           <Nav.Link as={NavLink} to="/" className="header_navlink"> 
               <Navbar.Brand className="header_home">
                   <HomeRounded />
               </Navbar.Brand>
           </Nav.Link>

           <Navbar.Toggle />
           
           <Navbar.Collapse>
               <Nav className="header_left">
                   {/* Resume link */}
                   <Nav.Link 
                     as={NavLink} to="/resume" 
                     className={pathName == "/resume" ? "header_link_active" : "header_link"}>
                     RESUME
                    </Nav.Link>
               
                    {/* Portfolio link */}               
                   <Nav.Link 
                     as={NavLink} to="/portfolio" 
                     className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>
                     PORTFOLIO
                    </Nav.Link>

                    {/* Contact link */}               
                    <Nav.Link 
                     as={NavLink} to="/contact" 
                     className={pathName == "/contact" ? "header_link_active" : "header_link"}>
                     CONTACT
                    </Nav.Link>
               </Nav>

               <div className="header_right">
                   {Object.keys(resumeData.socials).map((Key) => (
                       <a href={resumeData.socials[Key].link} target="_blank">
                           {resumeData.socials[Key].icon}
                       </a>
                   ))}

                   <CustomButton text={'Hire Me'} icon={<Telegram />} />
               </div>
           </Navbar.Collapse>
       </Navbar>
    )
}

export default withRouter(Header);
