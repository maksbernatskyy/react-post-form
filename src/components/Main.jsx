import { useState } from "react"
import axios from "axios"

export default function Main() {

    {/* State of form */}
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        body: '',
        public: true
    })

    {/* Function for the onChange */}
    function handleFormData(e) {

        const value =
           e.target.type === "checkbox" ?
           e.target.checked : e.target.value


        setFormData({
            ...formData,
            [e.target.name] : value
        })
    }

    return (
        <>
        <main>
            <div className="container">

                {/* Card */}
                <div className="card p-3">
                    {/* Card Top */}
                    <div className="card-top">
                        <h2 className="text-uppercase text-primary">form</h2>
                    </div>

                    {/* Card Bottom */}
                    <div className="card-body">
                        {/* Form */}
                        <form>
                            <div className="d-flex flex-column gap-3">
                                {/* Author */}
                                <input 
                                    className="w-25" 
                                    type="text"
                                    placeholder="Author"
                                    name="author"
                                    value={formData.author}
                                    onChange={handleFormData}
                                />
                                {/* Title */}
                                <input 
                                    className="w-25" 
                                    type="text" 
                                    placeholder="Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleFormData}
                                />
                                {/* Body */}
                                <input 
                                    className="w-25" 
                                    type="text"
                                    placeholder="Body" 
                                    name="body"
                                    value={formData.body}
                                    onChange={handleFormData}
                                />
                                {/* Public */}
                                <div className="align-self-start">
                                    <span className="fw-bold">Public?</span>
                                    <input 
                                        className="ms-3" 
                                        type="checkbox"
                                        name="public" 
                                        checked={formData.public}
                                        onChange={handleFormData}
                                    />
                                </div>
                                {/* Button submit */}
                                <button className="w-25 btn btn-primary" type="submit">
                                    Invia
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}