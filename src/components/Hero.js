import React from "react"

export default function Navbar(){
    return (
        <section className="hero">
            <img src = {process.env.PUBLIC_URL+'/images/photo-grid.png'} className='hero--img'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p1 className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p1>
        </section>
    )
}
