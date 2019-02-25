import React from "react";

export default function About(props) {
    return (
    <section className="hero is-dark is-bold is-fullheight">
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="About" />
        <div className="hero-body">
            <div className="container">
                <h1 className="title">About Me:</h1>
                <div className="columns">
                    <div className="column is-half">
                        <img src="https://i.ibb.co/mGwPMPj/About.jpg" className="about" alt="Picture of Sasha and I" />
                        <img src="https://i.ibb.co/6D5rqnk/Drone.jpg" className="about" alt="Flying my drone" />
                    </div>
                    <div className="column is-half">
                        <section className="subtitle about">
                            <p className="about">Born and raised in the Pacific Northwest; I have always enjoyed, biking, hiking, and flying planes/drones but my real passion has always been computers. From the first time I played on a computer I had a drive to learn more about them and how they work.</p>
                            <p className="about">This curiosity bloomed when I hit high school and start taking programming classes, as well as working with the IT department to keep the school computers maintained. From there I began learning as much as I could about writing code, going as far as reading up on w3schools.com to learn the basics of HTML, CSS, and Javascript. Upon graduating from high school I built my own computer with my graduation money.</p>
                            <p className="about">After high school I took a few years off and started working in the food industry. Now that I have savings and time I decided to not go the traditional college route and looked into fullstack development programs. I ended up at Thinkful because they were one of the only programs that would work around my work schedule. Thanks to Thinkful, not only do I get to expand my knowledge, but I finally get to turn my passion for computers into a career.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
