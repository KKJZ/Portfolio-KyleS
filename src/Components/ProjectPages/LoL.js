import React from "react";

export default function LoL(props) {
    return(
    <div className="columns">
        <div className="column">
            <img src="https://image.ibb.co/mNjyNq/LOL.jpg" alt="League of Legends Player search" className="projects" />
        </div>
        <div className="column">
            <h1 className="title">League of Legends player search</h1>
            <h2 className="subtitle">Find your last three matches in League of Legends.</h2>
            <section className="subtitle about">
                <p className="about">A player search for League of Legends.  I developed this app when I was first learning jquery and how to perform ajax requests.  Currently this app doesn't work all the time as I am attempting to acquire a permanent key for it.</p>
                <a className="button is-dark" href="https://github.com/KKJZ/League-Recent-Players" rel="noopener noreferrer" target="_blank">Check it out here!</a>                
            </section>
        </div>
    </div>
    )
}