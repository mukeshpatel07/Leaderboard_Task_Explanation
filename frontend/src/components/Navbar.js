import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://internshala-uploads.internshala.com/logo%2F62906f7b5810b1653632891.jpg.webp"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>

        <div className="d-flex align-items-center">
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          <Link to="/add-user" className="btn btn-success">
            Add New User
          </Link>
        </div>
      </div>
    </nav>
  );
}
