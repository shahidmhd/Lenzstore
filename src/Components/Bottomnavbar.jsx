import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import './BottomNavbar.css';

const Bottomnavbar = () => {
  return (
    <Navbar className=" d-block d-lg-none" fixed="bottom" style={{ backgroundColor: '#2257a7' }} expand="lg">
      <div className="container" style={{ backgroundColor: "#2257a7" }}> {/* Add background color to the container */}
        <Nav className="mx-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">
              {/* Icon 1 */}
              <CgMenuGridR  style={{ color: 'white' }} />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/cart" className="nav-link">
              {/* Icon 2 */}
              {/* <i className="ion-android-person" style={{ color: "#fff" }} /> */}
              <MdOutlineShoppingBag  style={{ color: 'white' }}/>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">
              {/* Icon 3 */}
              {/* <i className="ion-android-person" style={{ color: "#fff" }} /> */}
              <CgProfile style={{ color: 'white' }}/>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/" className="nav-link">
              {/* Icon 4 */}
              {/* <i className="ion-android-person" style={{ color: "#fff" }} /> */}
              <BiCategory style={{ color: 'white' }} />
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Bottomnavbar;
