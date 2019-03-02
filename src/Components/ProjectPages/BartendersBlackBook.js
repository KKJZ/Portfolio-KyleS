import React from "react";

export default function BartendersBlackBook(props) {
    return(
    <div className="columns">
        <div className="column">
            <img src="https://image.ibb.co/jWs7FA/drink.jpg" alt="Bartender's Black Book" className="projects" />
        </div>
        <div className="column">
            <h1 className="title">Bartender's BlackBook</h1>
            <h2 className="subtitle">Quick on the fly bar reference and community.</h2>
            <section className="subtitle about">
                <p className="about">Recipes all in one place, and easy to use, Bartender's BlackBook is that!  I made this app to help myself at work, I was a bartender, remembering recipes is everything.  With this app you get recipes on how to craft some amazing drinks(more to come!) and learn terminology for the new bartender.</p>
                <a className="button is-dark" href="https://github.com/KKJZ/Bartenders_Blackbooks" rel="noopener noreferrer" target="_blank">Check it out here!</a>
            </section>
        </div>
    </div>
    )
}