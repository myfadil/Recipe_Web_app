import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
// import './index.css'

function MyNavbar() {
  const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto d-flex gap-3 mx-5 mb-4">
        <Link to="/menu" className="text-decoration-none fw-bold fs-5">
                <Nav.Link as="div" style={{ color: "#2E266F" }}>
                  Home
                </Nav.Link>
              </Link>
              <Link
                to='/input-menu'
                className="text-decoration-none fw-bold fs-5"
              >
                <Nav.Link as="div" style={{ color: "#2E266F" }}>
                  Add Recipe
                </Nav.Link>
              </Link>
              <Link
                to="/search-menu"
                className="text-decoration-none fw-bold fs-5"
              >
                <Nav.Link as="div" style={{ color: "#2E266F" }}>
                  Search Menu
                </Nav.Link>
              </Link>
        </Nav>
        <div className="d-flex gap-3">
          <div style={{ height: '60px', width: '5px', backgroundColor: '#efc81a' }}></div>
          <div>
            {localStorage.getItem("photo") !== "null" ?
            <img
              src={localStorage.getItem("photo")}
              alt="profile"
              width="90px"
              height="60px"
              style={{ borderRadius: '50%' }}
            /> : <img src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" 
            alt="profile"
              width="60px"
              style={{ borderRadius: '50%' }}/>
          }
          </div>
          <div>
            <p className="m-0">{localStorage.getItem("username")}</p>
            <p className="btn m-0 fw-bold" onClick={logout}>Logout</p>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;


// class Navbar extends React.Component {
//     render() {
//         return <div className="navbar container-fluid mt-5 px-5">
//             <div className="col-4">
//                 <div className="justify-content-between d-none d-sm-flex">
//                     <div className="navbar-item">Register</div>
//                     <div className="navbar-item">Login</div>
//                     <Link to="/search-menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
//                         <div className="navbar-item">Search Menu</div>
//                     </Link>
//                 </div>
//                 <i className="bi bi-list-ul d-flex d-sm-none display-4" />
//             </div>
//             <div className="col-8  d-flex justify-content-end">
//                 <div className="row profile-divider" style={{ width: "max-content" }}>
//                     <div className="col account-image pl-3 d-none d-sm-flex">
//                         <img
//                             className="navbar-photo"
//                             src="./../../src/assets/pic-oke.jpeg"
//                             alt="profile pic"
//                         />
//                     </div>
//                     <div className="col ml-3">
//                         <div>Ilham</div>
//                         <div className="logout">Logout</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//             ;
//     }
// }

// export default Navbar;