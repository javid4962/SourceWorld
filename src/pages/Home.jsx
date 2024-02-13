import Header from "../Header"
import Footer from "../Footer"
import '../App.css'
// import Backgroundimg from '../assets/bg-main.jpeg'

const Home = () => {
    
    return (
        <div >
            <Header />
            <main className="m-auto bg-black text-white d-flex flex-column justify-content-center align-items-center" style={{  background: `transparent` }} >
                <h1 style={{minHeight:'500px', fontSize: `50px` }}> <span className="bg-transparent text-info shadow-lg" style={{ textShadow: `-2px 2px 1px black` }} > Dive into</span> <span className=" shadow-lg" style={{ textShadow: `2px -2px 1px black` }} >SourceWorld</span> </h1>
            </main>

            <Footer />

        </div>
    );
};

export default Home;
