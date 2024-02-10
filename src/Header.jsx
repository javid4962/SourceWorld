import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white position-sticky top-0 z-1 p-3">
            <div className="container-fluid">
                <Link className="navbar-brand fs-2" to="/" style={{ color: "blue", textShadow: "1px -1px 1px white" }}>
                    <i className="bi bi-vector-pen text-warning"></i> Source<span style={{ color: "red" }}>World</span>
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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/resources'>Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resumes">Resumes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skill Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">My Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profiles">My Profiles</Link>
                        </li>
                      
                    </ul>
                    {/* Add your search form or other elements here */}
                </div>
            </div>
        </nav>
    );
}

export default Header;
