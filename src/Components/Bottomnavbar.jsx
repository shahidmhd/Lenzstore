import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './BottomNavbar.css';

const Bottomnavbar = () => {
  return (
    <Navbar fixed="bottom" bg="light" expand="lg">
      <div className="container" style={{ backgroundColor: "#2257a7" }}> {/* Add background color to the container */}
        <Nav className="mx-auto">
          <Nav.Item>
            <Link to="/" className="nav-link">
              {/* Icon 1 */}
              <i className="ion-android-person" style={{ color: "#fff" }} />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/page2" className="nav-link">
              {/* Icon 2 */}
              <i className="ion-android-person" style={{ color: "#fff" }} />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/page3" className="nav-link">
              {/* Icon 3 */}
              <i className="ion-android-person" style={{ color: "#fff" }} />
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/page4" className="nav-link">
              {/* Icon 4 */}
              <i className="ion-android-person" style={{ color: "#fff" }} />
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Bottomnavbar;
