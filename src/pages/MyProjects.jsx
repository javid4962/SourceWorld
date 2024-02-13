import Header from "../Header";
import Footer from "../Footer";

const bg1 = "/pro_thumbnail1.jpg";
const bg2 = "/pro_thumbnail2.jpg";
const bg3 = "/pro_thumbnail3.jpg";
// const none = "/img_not_found.jpg";

export default function MyProjects() {
    return (
        <>
            <Header />
            <hr className="m-0 p-0"/>
            <div className="bg-black">

            <h3 className="p-3 text-white"># My Projects</h3>
            <div className="row container-fluid m-0 g-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">

                <div className="col ">
                    <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                        {/* project thumbnail */}
                        <img src={bg1} alt="" className="d-sm-block d-md-block p-2" loading="lazy"/>
                        <div className="col p-4 d-flex flex-column overflow-auto">
                            <h3 className="mb-0"><a href="https://github.com/javid4962/Shoes-Ecommerce-Website" target="blank" className="text-primary">Shoes-Ecommerce-Website</a></h3>
                            <div className="mb-1 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?</div>
                            {/* <p className="mb-auto">content about</p> */}
                            <div className="d-flex flex-row gap-1 my-2">
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://shoesden.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://github.com/javid4962/Shoes-Ecommerce-Website" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col ">
                    <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                        {/* project thumbnail */}
                        <img src={bg2} alt="" className="d-sm-block d-md-block p-2 " loading="lazy"/>
                        <div className="col p-4 d-flex flex-column overflow-auto">
                            <h3 className="mb-0 "><a href="https://github.com/javid4962/Python_calculator" target="blank" className="text-primary">Python Calculator</a></h3>
                            <div className="mb-1 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?</div>
                            {/* <p className="mb-auto">content about</p> */}
                            <div className="d-flex flex-row gap-1 my-2">
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://github.com/javid4962/Python_calculator" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col ">
                    <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                        {/* project thumbnail */}
                        <img src={bg3} alt="" className="d-sm-block d-md-block p-2" loading="lazy"/>
                        <div className="col p-4 d-flex flex-column overflow-auto">
                            <h3 className="mb-0"><a href="https://github.com/javid4962/Cloths-Ecommerce-Website" target="blank" className="text-primary">Cloths-Ecommerce-Website</a></h3>
                            <div className="mb-1 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?</div>
                            {/* <p className="mb-auto">content about</p> */}
                            <div className="d-flex flex-row gap-1 my-2">
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://clothsden.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://github.com/javid4962/Cloths-Ecommerce-Website" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col ">
                    <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                        {/* project thumbnail */}
                        <img src={bg1} alt="" className="d-sm-block d-md-block p-2" loading="lazy"/>
                        <div className="col p-4 d-flex flex-column overflow-auto">
                            <h3 className="mb-0"><a href="https://github.com/javid4962/Shoes-Ecommerce-Website" target="blank" className="text-primary">Shoes-Ecommerce-Website</a></h3>
                            <div className="mb-1 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?</div>
                            {/* <p className="mb-auto">content about</p> */}
                            <div className="d-flex flex-row gap-1 my-2">
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://shoesden.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://github.com/javid4962/Shoes-Ecommerce-Website" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col ">
                    <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                        {/* project thumbnail */}
                        <img src={bg2} alt="" className="d-sm-block d-md-block p-2 " loading="lazy"/>
                        <div className="col p-4 d-flex flex-column overflow-auto">
                            <h3 className="mb-0 "><a href="https://github.com/javid4962/Python_calculator" target="blank" className="text-primary">Python Calculator</a></h3>
                            <div className="mb-1 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?</div>
                            {/* <p className="mb-auto">content about</p> */}
                            <div className="d-flex flex-row gap-1 my-2">
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://github.com/javid4962/Python_calculator" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col ">
                    <div className=" g-0  rounded  d-flex flex-column flex-md-column flex-lg-column text-bg-dark">
                        {/* project thumbnail */}
                        <img src={bg3} alt="" className="d-sm-block d-md-block p-2" loading="lazy"/>
                        <div className="col p-4 d-flex flex-column overflow-auto">
                            <h3 className="mb-0"><a href="https://github.com/javid4962/Cloths-Ecommerce-Website" target="blank" className="text-primary">Cloths-Ecommerce-Website</a></h3>
                            <div className="mb-1 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, molestiae deserunt, quisquam porro voluptatibus dolorem velit assumenda at quibusdam est vero rem fugiat praesentium voluptatum exercitationem inventore. Repudiandae, harum doloremque?</div>
                            {/* <p className="mb-auto">content about</p> */}
                            <div className="d-flex flex-row gap-1 my-2">
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://clothsden.netlify.app/" target="blank" className="text-primary">View Site <i className="bi bi-box-arrow-up-right text-warning"></i></a></button>
                                <button className="btn btn-outline-light p-1" type="button"><a href="https://github.com/javid4962/Cloths-Ecommerce-Website" target="blank" className="text-primary">Git Repository <i className="bi bi-github text-warning"></i></a></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <Footer />
        </>

    )
}