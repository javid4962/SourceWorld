import Header from "../Header"
import Footer from "../Footer"
import '../App.css'
import Backgroundimg from '/bg-main.jpeg'

const Home = () => {
    
    return (
        <div style={{ backgroundImage: `url(${Backgroundimg})`,backgroundAttachment: "fixed" }}>
            <Header />
            <main className="m-auto my-5 p-4 bg-tranparent text-white d-flex flex-column justify-content-center align-items-center rounded-1" width={'300px'} style={{ minHeight: `700px`, background: `transparent` }} >
                <h1 style={{ fontSize: `50px` }}> <span className="bg-transparent text-info shadow-lg" style={{ textShadow: `-2px 2px 1px black` }} > Drive into</span> <span className=" shadow-lg" style={{ textShadow: `2px -2px 1px black` }} >SourceWorld</span> </h1>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
