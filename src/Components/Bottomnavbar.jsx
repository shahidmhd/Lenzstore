import React, { useState } from "react";
import { Navbar, Nav, Modal } from "react-bootstrap";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import './BottomNavbar.css';
import { Link } from "react-router-dom";


const DrawerModal = ({ show, onClose }) => {
    const handleMenuItemClick = () => {
        // Perform any additional actions if needed
        // ...
    
        // Close the modal
        onClose();
      };
  return (
    <Modal show={show} onHide={onClose} dialogClassName="left-to-right-modal">
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ul>
                    <li className="menu-item-has-children">
                      <a href="#"className="text-black">EYEGLASSES</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Men</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Women</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Unisex</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Kids</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#"className="text-black">SUNGLASSES</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Men</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Women</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Unisex</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Kids</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#"className="text-black">COMPUTER GLASSES</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Men</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Women</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Unisex</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Kids</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" className="text-black">NEW ARRIVAL</a>
                      <ul className="sub-menu single-column-menu">
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Men</Link>
                        </li>
                        <li>
                        <Link to={'/shop'}className="text-black" onClick={handleMenuItemClick}>Women</Link>
                        </li>
                        <li>
                        <Link to={'/shop'} className="text-black" onClick={handleMenuItemClick}>Unisex</Link>
                        </li>
                        <li>
                        <Link to={'/shop'} className="text-black" onClick={handleMenuItemClick}>Kids</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  
      </Modal.Body>
    </Modal>
  );
};

const Bottomnavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Navbar className="d-block d-lg-none" fixed="bottom" style={{ backgroundColor: '#2257a7' }} expand="lg">
        <div className="container" style={{ backgroundColor: "#2257a7" }}>
          <Nav className="mx-auto">
            <Nav.Item>
              <Link to="/" className="nav-link" >
                <FaHome style={{ color: 'white' }}/>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/" className="nav-link" >
                <BiCategory style={{ color: 'white' }} onClick={toggleDrawer} />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/cart" className="nav-link" >
                <MdOutlineShoppingBag style={{ color: 'white' }}/>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/login" className="nav-link">
                <CgProfile style={{ color: 'white' }}/>
              </Link>
            </Nav.Item>
          
          </Nav>
        </div>
      </Navbar>

      <DrawerModal show={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

export default Bottomnavbar;
