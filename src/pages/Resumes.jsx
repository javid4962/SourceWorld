import Header from "../Header";
import Footer from "../Footer";

export default function Resumes() {

    const resumes = [
        "/resumes/MASTHANJAVIDVALI.pdf",
        "/resumes/MASTHANJAVIDVALISHAIK (1).pdf",
        "/resumes/MASTHANJAVIDVALISHAIK-MILLIMAN.pdf",
        "/resumes/MASTHANJAVIDVALISHAIK.pdf",
        "/resumes/MASTHANJAVIDVALISHAIK1.pdf",
        "/resumes/MASTHANJAVIDVALISHAIK3.pdf",
        "/resumes/SHAIKMASTHANJAVIDVALI-Wipro.pdf"



    ];

    return (
        <>
            <Header />
            <h3 className="mb-0 m-3"># Resumes</h3>
            {/* resources for pdf - pdf tools */}
            <section className=" container-fluid my-3 ">
                <ul className="nav row row-cols-1 ">
                    <li className="nav-item border rounded col-auto fs-6 m-0 p-0" ><a href="https://www.ilovepdf.com/pdf_to_word" target="blank" className="nav-link bg-primary rounded p-1" aria-current="page">Pdf <i className="bi bi-arrow-right text-warning px-1"></i> Word</a></li>
                    <li className="nav-item border rounded col-auto fs-6 m-0 p-0"><a href="https://www.ilovepdf.com/word_to_pdf" target="blank" className="nav-link bg-primary rounded p-1">Word <i className="bi bi-arrow-right text-warning px-1"></i> Pdf</a></li>
                    <li className="nav-item border rounded col-auto fs-6 m-0 p-0"><a href="https://www.ilovepdf.com/merge_pdf" target="blank" className="nav-link bg-primary rounded p-1">Merge Pdf <i className="bi bi-file-plus text-warning px-1"></i></a></li>
                    <li className="nav-item border rounded col-auto fs-6 m-0 p-0"><a href="https://www.ilovepdf.com/split_pdf" target="blank" className="nav-link bg-primary rounded p-1">Split Pdf <i className="bi bi-vr text-warning px-1"></i></a></li>
                    <li className="nav-item border rounded col-auto fs-6 m-0 p-0"><a href="https://www.office.com/launch/Word?auth=1" target="blank" className="nav-link bg-primary rounded p-1">Edit Document <i className="bi bi-pen text-warning px-1"></i></a></li>
                </ul>
            </section>
            <div className="album py-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-1">

                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[0]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[0]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[0]} download={true}>Download</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[1]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[1]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[1]} download={true}>Download</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[2]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[2]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[2]} download={true}>Download</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[3]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[3]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[3]} download={true}>Download</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[4]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[4]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[4]} download={true}>Download</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[5]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[5]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[5]} download={true}>Download</a></button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col p-1">
                            <div className="card shadow-sm">
                                <iframe
                                    src={resumes[6]}
                                    height="300px"
                                    loading="lazy"
                                ></iframe>
                                <div className="card-body bg-black text-white">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[6]} target="blank">View</a></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><a href={resumes[6]} download={true}>Download</a></button>
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