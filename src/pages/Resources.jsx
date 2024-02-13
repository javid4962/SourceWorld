import Header from "../Header"
import Footer from "../Footer";
import '../App.css'
// import jobs from '../assets/jobsInternshipsOfficial_img.jpg'
import { Link } from "react-router-dom";

function Resources() {
    const freshershunt = "https://freshershunt.in/";
    const fullstackadda = "https://fullstackadda.com/";
    const frontlinesmedia = "https://frontlinesmedia.in/";
    const placementlelo = "https://yt3.googleusercontent.com/uV9SuEn0zQc3QuL6qkdWMLnjcC6JejzITAQagyBYIpqOSFkcs0WNW9A78Fml6tRkqyD3mA1k=s900-c-k-c0x00ffffff-no-rj";
    const internzila = "https://campsite.bio/internzila";
    const techfynder = "https://techfynder.com/";
    const techfinder_img = "https://techfynder.com/assets/images/imgs/new-tech-logo.svg";
    const oflates = "https://bio.oflatest.net/";
    const oflates_img = "https://cdn.campsite.bio/eyJidWNrZXQiOiJjYW1wc2l0ZS1iaW8tc3RvcmFnZSIsImtleSI6Im9mbGF0ZXN0YmxvZy81YTBlMWRjMS1mNGUxLTRlZTEtOTdmYi0wMGVhMGUyZjc5MzMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDB9fX0=";
    const drivetube = "https://superprofile.bio/drivetube";
    // const jobsInternshipsOfficial_img = "https://cdn5.cdn-telegram.org/file/hy9WeJMZBKGDpyxE5DAWDbZ9Fh75HEKeKacd3ZdO1CK5YM-smy2aEsuzsuIA7nRBxL9ONhVtB10yLGY2j1zPYAtX32g3BUzv5JRqHniQaPT8PpaTyvR_OKkagLfq4rX9Uzt_nPAnM-TTc6CUhwQH2wJyimsbhNXUHETrC4XPYs2lHkxaVALF9SYCTMIPA9JNsCUZHY5mm_Z_amy4Y7EWA6AmKRkeqiC7puvZWHnWvbaI-TvlUg6vi9-mS0iAwtUue9vj2_lfrYdGvORQgqKC4f8FIazrm58r5eEjF8Fb1sexHNbGQv-FHYXF4MWsDXuFCbdN8WCZn7jXIdjvTgYaPw.jpg";
    // const jobsInternshipsOfficial_img = "https://i.pinimg.com/564x/69/d2/45/69d245280f3493b7579f22d3dceeb795.jpg";
    const jobsInternshipsOfficial = "https://t.me/job_intern";


    const name1 = "Freshershunt";
    const name2 = "Fullstackadda";
    const name3 = "FrontLinesMedia";
    const name4 = "Placement Lelo";
    const name5 = "Internzila";
    const name6 = "Techfinder";
    const name7 = "Oflates";
    const name8 = "Drivetube";
    const name9 = "Jobs & Internships Official";

    return (
        <main>
            <Header />
            <hr className="m-0 p-0"/>
            <div className="bg-black">
                <h3 className="mb-0 p-3 text-white"># Resources</h3>
                <div className="album py-5  m-0">
                    <div className="container-fluid">

                        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-3">

                            {/* Freshershunt */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name1}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <iframe src={freshershunt} className="p-3" height={"450px"} loading="lazy"></iframe>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-dark border border-1 border-warning text-white" value={"submit"} ><Link to={freshershunt} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="https://t.me/freshershunt24" className="my-1 mx-3 link" target="_blank"><i className="bi bi-telegram fs-3 center text-warning"></i></Link>
                                            <Link to="https://www.instagram.com/freshershunt?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg==" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>
                                        </div>
                                    </div>

                                    {/* <small className="text-body-secondary">9 views</small> */}
                                </div>
                            </div>

                            {/* Fullstackadda */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name2}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <iframe src={fullstackadda} className="p-3" height={"450px"} loading="lazy"></iframe>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={fullstackadda} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="https://telegram.me/fullstackadda" className="my-1 mx-3" target="_blank"><i className="bi bi-telegram fs-3 center text-warning "></i></Link>
                                            <Link to="https://www.instagram.com/fullstack_adda?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg==" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>
                                            <Link to="https://www.whatsapp.com/channel/0029Va4yXG8I1rcjjVJD0A2U" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Frontlinesmedia */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name3}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <iframe src={frontlinesmedia} className="p-3" height={"450px"} loading="lazy"></iframe>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={frontlinesmedia} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="http://www.youtube.com/@Frontlinesmedia" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link>

                                            <Link to="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FFrontlinesmedia&e=AT3ahXa3ISbnN_dMExmQCXDGZ9C5F4l6fEuEPHDSeTQj-c5CkyEC3dHglOHsgwLnQUYoF2LI2jtnWBO2XiKBtGGnCdUGKIf7QHTrCCo" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Placement Lelo */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name4}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <img src={placementlelo} className="p-3" height={"450px"} loading="lazy" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to="https://linktr.ee/placementlelo" className="text-white" target="_blank">Open Link</Link></button>
                                        <div className="btn-group">
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="https://telegram.me/PLACEMENTLELO" className="my-1 mx-3" target="_blank"><i className="bi bi-telegram fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.youtube.com/@placementlelo" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.instagram.com/placementlelo" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.whatsapp.com/channel/0029Va4bojk90x2rq1LgdD1a" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Internzila */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name5}</h2>
                                    <div className="card-body ratio ratio-4x3 image">
                                        {/* <img src={internzila} className="border border-1 p-3 image" height={"450px"} /> */}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={internzila} className="text-white" target="_blank">Open Link</Link></button>

                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="https://t.me/internzila" className="my-1 mx-3" target="_blank"><i className="bi bi-telegram fs-3 center text-warning"></i></Link>

                                            {/*    <Link to="https://www.youtube.com/@placementlelo" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link> */}

                                            <Link to="https://www.instagram.com/internzila?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg==" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>

                                            <Link to="https://whatsapp.com/channel/0029VaAl9hx7IUYdyyvm680D" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Techfinder */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name6}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <img src={techfinder_img} alt="techfinder" />
                                        {/* <iframe src={techfinder_img} className="p-3" height={"450px"} loading="lazy"></iframe> */}
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={techfynder} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="https://t.me/techfynder" className="my-1 mx-3" target="_blank"><i className="bi bi-telegram fs-3 center text-warning"></i></Link>

                                            {/*    <Link to="https://www.youtube.com/@placementlelo" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link> */}

                                            <Link to="https://www.instagram.com/thetechfynder?utm_source=ig_web_button_share_sheet&igsh=MmVlMjlkMTBhMg==" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>

                                            <Link to="https://whatsapp.com/channel/0029VaAl9hx7IUYdyyvm680D" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* oflates */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name7}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <img src={oflates_img} className=" image1 border-1 mx-auto d-block p-3 w-100 d-flex" height={"450px"} loading="lazy" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={oflates} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">
                                            <Link to="https://t.me/oflatestblog" className="my-1 mx-3" target="_blank"><i className="bi bi-telegram fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.youtube.com/@Oflatestblog" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.instagram.com/oflatestblog?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>

                                            <Link to="https://bio.oflatest.net/%E2%80%8EFollow%20the%20OFLATEST%20|%20Job%20Updates%20channel%20on%20WhatsApp:%20https://whatsapp.com/channel/0029VaIIQi29RZAgmTAJLk30" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* DriveTube */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name8}</h2>
                                    <div className="card-body ratio ratio-4x3">
                                        <iframe src={drivetube} className="p-3" height={"450px"} loading="lazy"></iframe>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={drivetube} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">

                                            <Link to="https://www.youtube.com/channel/UCwiQla3Tg-G_5YHJf4yGEuw" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.linkedin.com/company/drivetube" className="my-1 mx-3" target="_blank"><i className="bi bi-linkedin fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.instagram.com/drivetube._/" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>

                                            <Link to="https://www.whatsapp.com/catalog/919959737407/?app_absent=0" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Jobs Internships Official */}
                            <div className="col">
                                <div className="card shadow-sm bg-dark">
                                    <h2 className="m-4 text-warning">{name9}</h2>
                                    <div className="card-body ratio ratio-4x3 ">
                                        <img src={"/img_not_found1.jpg"} className="p-3" height={"450px"} loading="lazy" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center m-3">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-light border border-1 border-warning bg-dark" value={"submit"} ><Link to={jobsInternshipsOfficial} className="text-white" target="_blank">Open Link</Link></button>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-right ">

                                            <Link to={jobsInternshipsOfficial} className="my-1 mx-3" target="_blank"><i className="bi bi-telegram fs-3 center text-warning"></i></Link>

                                            {/*    <Link to="https://www.youtube.com/@placementlelo" className="my-1 mx-3" target="_blank"><i className="bi bi-youtube fs-3 center text-warning"></i></Link> */}

                                            <Link to="https://linkedin.oia.bio/Atulkumarx" className="my-1 mx-3" target="_blank"><i className="bi bi-linkedin fs-3 center text-warning"></i></Link>

                                            <Link to="https://insta.oia.bio/atulkumarx" className="my-1 mx-3" target="_blank"><i className="bi bi-instagram fs-3 center text-warning"></i></Link>

                                            <Link to="https://whatsapp.com/channel/0029Va9Rj3F5PO13U9iYGc0b" className="my-1 mx-3" target="_blank"><i className="bi bi-whatsapp fs-3 center text-warning"></i></Link>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    );
}
export default Resources