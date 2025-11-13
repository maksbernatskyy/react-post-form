import { useState } from "react"
import axios from "axios"

export default function Main() {

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
                                />
                                {/* Title */}
                                <input 
                                    className="w-25" 
                                    type="text" 
                                    placeholder="Title"
                                />
                                {/* Body */}
                                <input 
                                    className="w-25" 
                                    type="text"
                                    placeholder="Body" 
                                />
                                {/* Public */}
                                <input 
                                    className="align-self-start" 
                                    type="checkbox" 
                                />
                                <input
                                    className="align-self-start" 
                                    type="checkbox" 
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}