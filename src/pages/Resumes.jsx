import Header from "../Header";
import Footer from "../Footer";

export default function Resumes() {

    const resumes = [
        "/resumes/Format 1.pdf",
        "/resumes/Format 2.pdf",
        "/resumes/Format 3.pdf",
        "/resumes/Format 4.pdf",
        "/resumes/Format 5.pdf",
        "/resumes/Format 6.pdf",
        "/resumes/Format 7.pdf",
        "/resumes/Format 8.pdf",
        "/resumes/Format 9.pdf",
        "/resumes/Format 10.pdf",
        "/resumes/Format 11.pdf",
        "/resumes/Format 12.pdf",
        "/resumes/Format 13.pdf",
        "/resumes/Format 14.pdf",
        "/resumes/Format 15.pdf",
        "/resumes/Format 16.pdf"

    ];

    return (
        <>
            <Header />
            <hr className="m-0 p-0"/>
            <div className="m-0 p-0 bg-black">
                <h3 className="mb-0 p-3 text-white"># Resumes</h3>
                {/* resources for pdf - pdf tools */}
                <section className=" container-fluid my-3">
                    <ul className="nav row row-cols-1 ">
                        <li className="nav-item rounded col-auto fs-6 m-1 p-0" ><a href="https://www.ilovepdf.com/pdf_to_word" target="blank" className="nav-link bg-primary rounded p-1 text-white" aria-current="page">Pdf <i className="bi bi-arrow-right text-white px-1"></i> Word</a></li>
                        <li className="nav-item rounded col-auto fs-6 m-1 p-0"><a href="https://www.ilovepdf.com/word_to_pdf" target="blank" className="nav-link bg-primary rounded p-1 text-white">Word <i className="bi bi-arrow-right text-white px-1"></i> Pdf</a></li>
                        <li className="nav-item rounded col-auto fs-6 m-1 p-0"><a href="https://www.ilovepdf.com/merge_pdf" target="blank" className="nav-link bg-primary rounded p-1 text-white">Merge Pdf <i className="bi bi-file-plus text-white px-1"></i></a></li>
                        <li className="nav-item rounded col-auto fs-6 m-1 p-0"><a href="https://www.ilovepdf.com/split_pdf" target="blank" className="nav-link bg-primary rounded p-1 text-white">Split Pdf <i className="bi bi-vr text-white px-1"></i></a></li>
                        <li className="nav-item rounded col-auto fs-6 m-1 p-0"><a href="https://www.office.com/launch/Word?auth=1" target="blank" className="nav-link bg-primary rounded p-1 text-white">Edit Document <i className="bi bi-pen text-white px-1"></i></a></li>
                    </ul>
                </section>
                <div className="album py-5">
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-0 ">

                            <div className="col p-3 m-0 ">
                                <div className="card shadow-sm border-0 rounded">
                                    <iframe
                                        src={resumes[0]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[0]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[0]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[1]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[1]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[1]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[2]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[2]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[2]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[3]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[3]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[3]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[4]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[4]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[4]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[5]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[5]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[5]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[6]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[6]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[6]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[7]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[7]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[7]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[8]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[8]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[8]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[9]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[9]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[9]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[10]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[10]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[10]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[11]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[11]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[11]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[13]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[13]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[13]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[14]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[14]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[14]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-3 m-0">
                                <div className="card shadow-sm border-0">
                                    <iframe
                                        src={resumes[15]}
                                        height="350px"
                                        loading="lazy"
                                    ></iframe>
                                    <div className="card-body bg-dark text-white">
                                        {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[15]} target="blank" className="text-white">View</a></button>
                                                <button type="button" className="btn btn-sm btn-outline-warning"><a href={resumes[15]} download={true} className="text-white">Download</a></button>
                                            </div>

                                        </div>
                                    </div>
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