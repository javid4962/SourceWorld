import React from "react";
import { MdDelete } from "react-icons/md";
import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import "./style.css";

function Mymemory(props) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        caches.open("my-cache").then((cache) => {
            cache.match("notes").then((response) => {
                response
                    .json()
                    .then((data) => {
                        setNotes(data); // Set the loaded notes directly, replacing existing notes
                    })
                    .catch((error) => console.error("Error parsing JSON:", error));
            });
        });
    }, []);

    useEffect(() => {
        caches.open("my-cache").then((cache) => {
            cache.put("notes", new Response(JSON.stringify(notes)));
        });
    }, [notes]);

    function addNote(newNote) {
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });
    }

    function deleteNotes(id) {
        setNotes((preValue) => {
            return [...preValue.filter((note, index) => index !== id)];
        });
    }

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-3">
                        <div className="m-1 bg-black text-white p-5" style={{ minHeight: `400px` }}>
                            <Notes />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-3">
                        <div className="m-1 bg-black text-white p-5" style={{ minHeight: `400px` }}>
                            <NoteMaker />
                        </div>
                    </div>
                </div>
            </div>

            <KeepHeader />

            <CreateArea onAdd={addNote} />
            <div className="keepnote d-flex flex-wrap">
                {notes.map((note, index) => (
                    <KeepNote
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNotes}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
}
export default Mymemory;

function Notes() {
    const [textareaContent, setTextareaContent] = useState("");
    const [selectedFormat, setSelectedFormat] = useState("txt");

    const handleTextareaChange = (event) => {
        setTextareaContent(event.target.value);
    };

    const handleFormatChange = (event) => {
        setSelectedFormat(event.target.value);
    };

    const handleDownload = () => {
        const blob = new Blob([textareaContent], { type: getMimeType(selectedFormat) });
        const objectURL = URL.createObjectURL(blob);

        const downloadLink = document.createElement("a");
        downloadLink.href = objectURL;
        downloadLink.download = `downloaded_content.${selectedFormat}`;

        // Append the link to the DOM and trigger a click event
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up by removing the link from the DOM
        document.body.removeChild(downloadLink);
    };

    const getMimeType = (format) => {
        switch (format) {
            case "txt":
                return "text/plain";
            case "pdf":
                return "application/pdf";
            case "doc":
                return "application/doc";
            default:
                return "text/plain";
        }
    };
    return (
        <main className="bg-black text-white">
            <h1>Notes</h1>
            <div>
                <textarea
                    value={textareaContent}
                    onChange={handleTextareaChange}
                    placeholder="Enter content here"
                    className="bg-black text-white border border-secondary border-2 p-2 d-block w-100"
                /><br />
                <label>Select format:</label>
                <select
                    value={selectedFormat}
                    onChange={handleFormatChange}
                    className="btn shadow my-1 border-warning border-1 text-white bg-black p-1"
                >
                    <option value="txt" className="">
                        Text (txt)
                    </option>
                    <option value="pdf" className="">
                        PDF
                    </option>
                    <option value="doc" className="">
                        DOCS
                    </option>
                </select>
                <br />
                <button onClick={handleDownload} className="btn shadow-lg border-1 rounded-circle bg-black px-2 text-warning"><i className="bi bi-download fs-6"></i></button>
            </div>
        </main>
    );
}

function NoteMaker() {
    const [noteMake, setNoteMake] = useState("");
    const [bulletPoints, setBulletPoints] = useState([]);

    useEffect(() => {
        caches.open("my-cache").then((cache) => {
            cache.match("bulletPoints").then((response) => {
                response
                    .json()
                    .then((data) => {
                        setBulletPoints(data);
                    })
                    .catch((error) => console.error("Error parsing JSON:", error));
            });
        });
    }, []);

    useEffect(() => {
        caches.open("my-cache").then((cache) => {
            cache.put("bulletPoints", new Response(JSON.stringify(bulletPoints)));
        });
    }, [bulletPoints]);

    const handleNoteChange = (event) => {
        setNoteMake(event.target.value);
    };

    const handleAddBulletPoint = () => {
        if (noteMake.trim() !== "") {
            setBulletPoints((prevBulletPoints) => [...prevBulletPoints, noteMake]);
            setNoteMake("");
        }
    };

    const handleRemoveBulletPoint = (index) => {
        const updatedBulletPoints = [...bulletPoints];
        updatedBulletPoints.splice(index, 1);
        setBulletPoints(updatedBulletPoints);
    };

    const handleCopyText = (text) => {
        navigator.clipboard.writeText(text).catch((err) => console.error("Error copying text:", err));
    };

    return (
        <main className=" bg-black text-white">
            <h1>Note Maker</h1>
            <div className="mb-4">
                <textarea
                    placeholder="Type your note here..."
                    value={noteMake}
                    onChange={handleNoteChange}
                    onSubmit={handleAddBulletPoint}
                    className="bg-black text-white border border-secondary border-2 p-2 w-100"
                />
                <button onClick={handleAddBulletPoint} className="btn m-2 fs-6 bi bi-plus position-absolute right-0 d-inline-flex shadow-lg border-1 rounded-circle bg-black px-1 text-black bg-white"></button>
            </div>
            <div className="w-100">
                <i className="" style={{ fontSize: `10px` }}>Double tap to copy Bullet Points</i>
                <ul className="d-inline mt-2">
                    {bulletPoints.map((point, index) => (
                        <div className="d-flex" key={index}>
                            <a onDoubleClick={() => handleCopyText(point)} className="bg-black text-white align-right w-100 ">
                                <ul className="shadow border border-info border-1 w-100 p-2 mt-2 overflow-scroll d-flex flex-row">
                                    <i className="text-danger" style={{ fontSize: `12px`, marginRight: `0px` }}>{index + 1})</i>
                                    <span className="mx-5 rounded flex-wrap">{point}</span><br />
                                    <i className="bi bi-clipboard2 text-right" onClick={() => handleCopyText(point)}></i>
                                    <div className="d-flex flex-row bg-black">
                                        <a onClick={() => handleCopyText(point)} className="bi bi-clipboard mx-2 my-auto text-secondary"></a>
                                        <a onClick={() => handleRemoveBulletPoint(index)} className="bi bi-trash mx-2 my-auto text-secondary"></a>
                                    </div>
                                </ul>
                            </a>
                        </div>
                    ))}
                </ul>
            </div>
        </main>
    );
}

// rest of the code remains unchanged



// keep note here

function KeepHeader() {
    const logo = (
        <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="logo"
        />
    );
    return (
        <div className="keep-header bg-white d-flex flex-row align-items-center" style={{
            margin
                : `20px 10px 0 10px `, padding: `10px 20px`, boxShadow: `0 0 2px 0 rgb(110, 110, 110)`
        }}>
            {logo}
            <h1 style={{ color: `#5f6368`, fontSize: `1.5rem` }}>Keep</h1>
        </div>
    );
}



function CreateArea({ onAdd }) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }
    function handleExpanded() {
        setExpanded(true);
    }

    function submitButton(event) {
        setNote({
            title: "",
            content: "",
        });
        onAdd(note);
        event.preventDefault();
    }

    return (
        <div className="container d-flex flex-column justify-content-center my-3">
            <form style={{ position: `relative`, padding: `7px`, boxShadow: `0 1px 7px rgb(128, 128, 128)` }} className="bg-white m-auto w-100">
                {isExpanded && (
                    <input
                        value={note.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                        className=" bg-white text-black"
                        style={{ width: `100%`, border: `none`, padding: `4px 10px`, outline: `none`, fontSize: `1.1rem`, resize: `none` }} required
                    />
                )}
                <p>
                    <textarea
                        value={note.content}
                        onClick={handleExpanded}
                        name="content"
                        placeholder="Take a note..."
                        onChange={handleChange}
                        className="d-flex w-100"
                        rows={isExpanded ? 3 : 1}
                        style={{ border: `none`, padding: `4px 10px`, outline: `none`, fontSize: `1rem`, resize: `none` }}
                        required></textarea>
                </p>
                <button type="submit" className="sub" onClick={submitButton}>
                    <IoIosAdd size={35} />
                </button>
            </form>
        </div>
    );
};



function KeepNote({ title, content, onDelete, id }) {

    return (
        <div className="overflow-y-hidden">
            <div className="note p-0 text-black shadow-lg border border-1 border-black rounded-3 overflow-y-auto " style={{ maxWidth: `300px`, maxHeight: `300px`, scrollbarWidth: `thin` }}>
                <h1 className="w-100 fs-6 p-2 text-center m-auto bg-secondary text-white border-bottom border-1 border-black">{title}</h1>
                {/* <hr /> */}
                <p className="text-black mb-2 fs-6 text-wrap p-1 ">{content}</p>
                <button onClick={() => onDelete(id)} className="d-block m-2">
                    <MdDelete size={20} />
                </button>
            </div>
        </div >
    );
};




