import { Link } from "react-router-dom";
import './App.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white position-sticky top-0 z-1 p-3">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2 text-warning" to="/" >
                    SourceWorld
                </Link>
                {/* <span>{new Date.getFullYear()}</span> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
                        <li className="nav-item nav-li fs-6 p-1 px-0 mx-0 m-1">
                            <Link className="nav-link text-white text-center" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item nav-li fs-6 p-1 px-0 mx-0 m-1">
                            <Link className="nav-link text-white text-center" to='/resources'>Resources</Link>
                        </li>
                        <li className="nav-item nav-li fs-6 p-1 px-0 mx-0 m-1">
                            <Link className="nav-link text-white text-center" to="/resumes">Resumes</Link>
                        </li>
                        <li className="nav-item nav-li fs-6 p-1 px-0 mx-0 m-1">
                            <Link className="nav-link text-white text-center" to="/skills">Skill Development</Link>
                        </li>
                        <li className="nav-item nav-li fs-6 p-1 px-0 mx-0 m-1">
                            <Link className="nav-link text-white text-center" to="/projects">My Projects</Link>
                        </li>
                        <li className="nav-item nav-li fs-6 p-1 px-0 mx-0 m-1">
                            <Link className="nav-link text-white text-center" to="/profiles">My Profiles</Link>
                        </li>

                    </ul>
                    {/* Add your search form or other elements here */}
                </div>
            </div>
        </nav>
    );
}

export default Header;
