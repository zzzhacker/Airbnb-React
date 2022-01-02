import React from "react"
import image from "../images/photo-grid.png"

export default function Navbar(){
    return (
        <section className="hero">
            <img src = {image} className='hero--img'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p1 className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p1>
        </section>
    )
}
