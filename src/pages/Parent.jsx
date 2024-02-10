import Header from "../Header"
import Footer from "../Footer"
import '../App.css'
// import Backgroundimg from '/bg-main.jpeg'
import Backgroundimg1 from '/bg-main2.jpg'

const Home = () => {
    
    return (
        <div style={{ backgroundImage: `url(${Backgroundimg1})`,backgroundAttachment: "fixed", backgroundRepeat:'no-repeat', backgroundSize:"cover",backgroundPosition:"bottom" }}>
            <Header />
            <main className="m-auto my-5 p-4 bg-tranparent text-white d-flex flex-column justify-content-center align-items-center rounded-1" width={'300px'} style={{ minHeight: `700px`, background: `transparent` }} >
                <h1 style={{ fontSize: `50px` }} className="shadow-lg p-1"> <span className="bg-transparent text-info" style={{ textShadow: `-2px 2px 1px black` }} > Dive into</span> <span className=" " style={{ textShadow: `2px -2px 1px black` }} >SourceWorld</span> </h1>
            </main>
            <Footer />
        </div>
    );
};


export default Home;
