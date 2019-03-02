import React from "react";

export default function PersonalPublication(props) {
    return(
    <div className="columns">
        <div className="column">
            <img src="https://i.ibb.co/QNGL7XV/Untitled.jpg" alt="Personal Publication" className="projects" />
        </div>
        <div className="column">
            <h1 className="title">Personal Publication</h1>
            <h2 className="subtitle">Online journaling made easy.</h2>
            <section className="subtitle about">
                <p className="about">Always have access to your journal from any browser, on mobile or the desktop.  I designed this app with privacy in mind, so journal about anything from ideas to feelings you have.  Journals can help also improve mental health, depression, and anxiety, and as someone who personally does, I believe this idea could help people with these issues.</p>
                <a className="button is-dark" href="https://github.com/KKJZ/Journal_React" rel="noopener noreferrer" target="_blank">Check it out here!</a>
            </section>
        </div>
    </div>
    )
}