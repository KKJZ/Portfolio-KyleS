import React from "react";
import "../css/mystyles.css";

export default function Home(props) {
    return (
    <section class="hero is-success is-fullheight landing">
    <a name="Home" />
    {/* <!-- Hero content: will be in the middle --> */}
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Hello World!
                </h1>
                <h2 class="subtitle">
                    I am a Full Stack Developer Living in Portland, Oregon
                </h2>
                <h2 class="subtitle">
                    Currently looking for new challenges!
                </h2>
            </div>
        </div>
    </section>
    )
}