import React from "react";
import './App.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='bg-black text-white p-3 d-block'>
            {/* <ul className="nav justify-content-center border-bottom ">
                <Link className="navbar-brand fs-6 bg-black px-2" to="/" style={{ color: "blue", textShadow: "1px -1px 1px white" }}><i className="bi bi-vector-pen text-warning"></i> Source<span style={{ color: "red" }}>World</span></Link>
                <li className="nav-link"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-link"><Link to="/resources" className="nav-link px-2 text-body-secondary">Resources</Link></li>
                <li className="nav-link"><Link to="/mymemory" className="nav-link px-2 text-body-secondary">My Memory</Link></li>
                <li className="nav-link"><Link to="/resumes" className="nav-link px-2 text-body-secondary">Resumes</Link></li>
                <li className="nav-link"><Link to="/skills" className="nav-link px-2 text-body-secondary">Skill Development</Link></li>
                <li className="nav-link"><Link to="/project" className="nav-link px-2 text-body-secondary"> My Project</Link></li>
            </ul> */}
            <p className="text-center mt-2">© {new Date().getFullYear()} SourceWorld</p>
        </footer>

    )
}