import React from "react"
import "./Person.css"

export default function Person({person}){
    return <div className="Person">
        <div>
            <div>
                <div className="PersonCounter">
                    <h2 className="Counter">{person.id}/25</h2>
                </div>
                <div className="PersonName">    
                    <h2 className="Name">{person.name.first} {person.name.last}</h2>
                </div>
                <div className="AboutPerson">
                    <div className="From">    
                        <h3>From:</h3>
                        <h3 className="FromValue">{person.city}, {person.country}</h3>
                    </div>    
                    <div className="Title">    
                        <h3>Job Title:</h3>
                        <h3 className="TitleValue">{person.title}</h3>
                    </div>    
                    <div className="Employer">    
                        <h3>Employer:</h3>
                        <h3 className="EmployerValue">{person.employer}</h3>
                    </div>
                </div>
                <div className="FavoriteMovies">
                    <h3>Favorite Movies:</h3>
                    <h3 className="Movie1">1. {person.favoriteMovies[0]}</h3>
                    <h3 className="Movie2">2. {person.favoriteMovies[1]}</h3>
                    <h3 className="Movie3">3. {person.favoriteMovies[2]}</h3>
                </div>
            </div>
        </div>
    </div>
}