import React from "react";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">🍕 Home</a>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔓 Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔒 Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔐 Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">🔐 Register</a>
                </li>
              </>
            )}
          </ul>
          <span className="navbar-text">
            🛒 Total: ${total.toLocaleString()}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
