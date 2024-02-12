import './App.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='bg-black text-white p-3 d-block'>
            <ul className="nav justify-content-center border-bottom ">
                <li className="nav-link"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-link"><Link to="/resources" className="nav-link px-2 text-body-secondary">Resources</Link></li>
                <li className="nav-link"><Link to="/resumes" className="nav-link px-2 text-body-secondary">Resumes</Link></li>
                <li className="nav-link"><Link to="/skills" className="nav-link px-2 text-body-secondary">Skill Development</Link></li>
                <li className="nav-link"><Link to="/project" className="nav-link px-2 text-body-secondary"> My Projects</Link></li>
                <li className="nav-link"><Link to="/profiles" className="nav-link px-2 text-body-secondary"> My Profiles</Link></li>
            </ul>
            <p className="text-center mt-2">© {new Date().getFullYear()} SourceWorld</p>
        </footer>

    )
}