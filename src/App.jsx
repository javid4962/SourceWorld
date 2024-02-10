import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from "./pages/Parent.jsx";
import Home from "./pages/Home.jsx";
import Resources from "./pages/Resources.jsx";
// import Mymemory from "./pages/Mymemory.jsx";
import Resumes from "./pages/Resumes.jsx";
import Skills from "./pages/Skills.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import Profiles from "./pages/Profiles.jsx";
import './App.css'


export default function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/projects" element={<MyProjects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/resumes" element={<Resumes />} />
                    {/* <Route path="/mymemory" element={<Mymemory />} /> */}
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/profiles" element={<Profiles />} />
                    {/* <Route path='/' element={<Home />}> */}
                    <Route path='/home' element={<Home />} />
                    <Route path='/' element={<Parent />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

