import React from "react"
// import image1 from "../images/katie-zaferes.png"
// import image from "../images/star.png"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div className='card'>
            <img className="card--image" src={process.env.PUBLIC_URL+'/images/katie-zaferes.png'}/>
            <div className='card--stats'>
                <img className ="card--star" src={process.env.PUBLIC_URL+'/images/star.png'}/>
                <span className="grey">5.0</span>
                <span className="grey">(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessone with katie</p>
            <p><span className="bold">from $136k</span>/person</p>
        </div>
        
    )
}