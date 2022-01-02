import React from "react"


export default function Card(props) {
    let badgeText
    if (props.info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.info.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props.info.coverImg)
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={process.env.PUBLIC_URL+"/images/"+props.info.coverImg}/>
            <div className="card--stats">
                <img className ="card--star" src={process.env.PUBLIC_URL+"/images/star.png"}/>
                <span>{props.info.stats.rating}</span>
                <span className="gray">({props.info.stats.reviewCount}) • </span>
                <span className="gray">{props.info.location}</span>
            </div>
            <p className="card--title">{props.info.title}</p>
            <p className="card--price"><span className="bold">from ${props.info.price}</span>/person</p>
        </div>
    )
}