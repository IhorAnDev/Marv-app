import React from 'react';
import './FooterContent.css';
import { Navbar } from 'react-bootstrap';


function Footer(props) {
    return (
        <Navbar className="footer" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <div className='fotter_row'>
                    <img className="footer_img" src="" />{' '}
                    <p><a href="https://github.com/Snegurjan" target="_blank">GitHub</a></p>
                </div>
            </Navbar.Brand>
        </Navbar>
    )
}
export default Footer;