import './App.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='bg-black text-white p-3 d-block'>
            <ul className="nav justify-content-center border-bottom ">
                <li className="m-2"><Link to="/" className=" p-0  text-secondary m-0">Home</Link></li>
                <li className="m-2"><Link to="/resources" className=" p-0 text-secondary m-0">Resources</Link></li>
                <li className="m-2"><Link to="/resumes" className=" p-0 text-secondary m-0">Resumes</Link></li>
                <li className="m-2"><Link to="/skills" className=" p-0 text-secondary m-0">Skill Development</Link></li>
                <li className="m-2"><Link to="/projects" className=" p-0 text-secondary m-0"> My Projects</Link></li>
                <li className="m-2"><Link to="/profiles" className=" p-0 text-secondary m-0"> My Profiles</Link></li>
            </ul>
            <p className="text-center mt-2">© {new Date().getFullYear()} SourceWorld</p>
        </footer>

    )
}