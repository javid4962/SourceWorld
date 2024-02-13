import Header from "../Header";
import Footer from "../Footer";
import '../App.css';

export default function Skills() {
    return (
        <>
            <Header />
            <hr className="m-0 p-0" />
            <div className="bg-black">
            <h3 className="mb-0 p-3 text-white"># Skill Development</h3>
            <div className="container-fluid row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 m-0">

                <div className="col-auto p-1  ">
                    <div className="card shadow-sm text-bg-dark">
                    <img src="/thumbnail1.jpg" className="p-3" loading="lazy"/>
                    <hr className="bg-white" />
                        <div className="h-100 p-4 text-bg-dark ">
                            <h4>Sigma WebDevelopment Express - <a href="https://www.youtube.com/@CodeWithHarry" target="blank" className="text-primary fs-6">@CodeWithHarry</a></h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.</p>
                            <button className="btn btn-primary mx-1 border border-white" type="button"><a href="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=giN74G5IDhZuHYCB" target="blank" className="text-white"><i className="bi bi-youtube text-danger"></i> Explore Now</a></button>

                            <button className="btn btn-primary border border-white " type="button"><a href="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course" target="blank" className="text-white"><i className="bi bi-github px-1 py-0 text-black"></i>  Github</a></button>
                        </div>
                    </div>
                </div>

                <div className="col-auto p-1 " >
                    <div className="card shadow-sm  text-bg-dark">
                    <img src="/thumbnail2.jpg" className="p-3" loading="lazy"/>
                    <hr className="bg-white" />
                        <div className="h-100 p-4 text-bg-dark">
                            <h4>HTML AND CSS full course - <br /><a href="https://www.youtube.com/@BroCodez" target="blank" className="fs-6 text-primary">@BroCodez</a></h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio repudiandae beatae qui omnis eius, voluptas sevitae es aliquid et vero voluptatem cum ipsam porro. Praesentium, velit perspiciatis! Suscipit voluptas sevitae es aliquid et verovoluptas sevitae es aliquid et vero,.</p>
                            <button className="btn btn-primary border border-white" type="button"><a href="https://youtube.com/playlist?list=PLZPZq0r_RZOPP5Yjt6IqgytMRY5uLt4y3&si=Qh6wlPBy9kM4Gu3W" target="blank" className="text-white"><i className="bi bi-youtube text-danger"></i> Explore Now</a></button>
                        </div>
                    </div>
                </div>

                <div className="col-auto p-1" >
                    <div className="card shadow-sm text-bg-dark">
                    <img src="/thumbnail3.jpg" className="p-3" loading="lazy"/>
                    <hr className="bg-white" />
                        <div className="h-100 p-4 text-bg-dark ">
                            <h4>Full Stack Web Dev Course - <br /><a href="https://www.youtube.com/@freecodecamp" target="blank" className="text-primary fs-6">freeCodeCamp.org</a></h4>
                            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quod. Optio blanditiis, impedi deserunt pariatur dignissimos in deserunt quo aliquam dolorum autem culpa fugiat placeat voluptatem totam et tempora repellat hw</p>
                            <button className="btn btn-primary border border-white" type="button"><a href="https://youtu.be/nu_pCVPKzTk?si=TYI3wvCofCHyn68M" target="blank" className="text-white"><i className="bi bi-youtube text-danger"></i> Explore Now</a></button>

                            
                        </div>
                    </div>
                </div>

                <div className="col-auto p-2">
                    <div className="card shadow-sm text-bg-dark">
                    <img src="/thumbnail4.jpg" className="p-3" loading="lazy"/>
                    <hr className="bg-white" />
                        <div className="h-100 p-4 text-bg-dark ">
                            <h4>Linux Crash Course - <a href="https://www.youtube.com/@LearnLinuxTV" target="blank" className="text-primary fs-6">@LearnLinuxTV</a></h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptates sit libero saepe, quasi fuga aspernatur commodi tempore, voluptatem, tenetur quisquam quo atque quae. Tempora asperiores veniam reiciendis quam ut.</p>
                            <button className="btn btn-primary border border-white" type="button"><a href="https://youtube.com/playlist?list=PLT98CRl2KxKHKd_tH3ssq0HPrThx2hESW&si=RCGxNmCIIjZPl4bD" target="blank" className="text-white"><i className="bi bi-youtube text-danger shadow"></i> Explore Now</a></button>
                        </div>
                    </div>
                </div>

                <div className="col-auto p-2">
                    <div className="card shadow-sm  text-bg-dark">
                    <img src="/thumbnail5.jpg" className="p-3" loading="lazy"/>
                    <hr className="bg-white" />
                        <div className="h-100 p-4 text-bg-dark ">
                            <h4>Java + DSA + Interview Preparation Course - <a href="https://www.youtube.com/@KunalKushwaha" target="blank" className="fs-6 text-primary">@KunalKushwaha</a></h4>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio repudiandae beatae qui omnis eius, voluptas porro. Praesentium, velit perspiciatis! Suscipit, quibusdam.</p>
                            <button className="btn btn-primary border border-white" type="button"><a href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=Qp9sHXDAqRE_pq_N" target="blank" className="text-white"><i className="bi bi-youtube text-danger"></i> Explore Now</a></button>
                        </div>
                    </div>
                </div>

                <div className="col-auto p-2">
                    <div className="card shadow-sm text-bg-dark">
                    <img src="/thumbnail6.jpg" className="p-3" loading="lazy"/>
                    <hr className="bg-white" />
                        <div className="h-100 p-4 text-bg-dark ">
                            <h4>cs50x 2024 Scratch - <a href="https://www.youtube.com/@cs50" target="blank" className="text-primary fs-6">@cs50</a></h4>
                            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quod. Optio blanditiis, impedit pariatur dignissimos in deserunt quo aliquam dolorum autem culpa fugiat placeat voluptatem totam et tempora repellat fuga!</p>
                            <button className="btn btn-primary border border-white" type="button"><a href="https://youtube.com/playlist?list=PLhQjrBD2T381WAHyx1pq-sBfykqMBI7V4&si=7KGPaXMcPpg8RTgW" target="blank" className="text-white"><i className="bi bi-youtube text-danger"></i> Explore Now</a></button>

                            
                        </div>
                    </div>
                </div>

             

            </div>
            </div>
            <Footer />
        </>

    )
}