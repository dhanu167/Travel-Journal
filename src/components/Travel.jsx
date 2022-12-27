import React from "react"

export default function Travel(props){
    return(
        <div className="travel-card">
            <img src={props.item.imageUrl} className="travel--image" />
            <section className="travel--details">
                <section className="travel-location">
                    <img src="images/location.png" />
                    <p className="travel-country">{props.item.location.toUpperCase()}</p>
                    <a className="travel-country-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </section>
                <h2 className="travel-name">{props.item.title}</h2>
                <p className="travel-date">{props.item.startDate} - {props.item.endDate} </p>
                <p className="travel-details">{props.item.description}</p>
            </section>
        </div>
    )
}