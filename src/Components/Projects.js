import React from "react";

export default function Projects(props) {
    return (
    <section className="hero is-light is-bold is-fullheight">
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="Projects" />
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Projects:
                </h1>
                <div className="controls">
                {/* want to make the projcets change on click */}
                {/* want to add a nice transitions to the leaving */}
                    <button className="previous round">&#8249;</button>
                    <button className="next round">&#8250;</button>
                </div>
                <div className="columns">
                    <div className="column">
                        <img src="https://i.ibb.co/QNGL7XV/Untitled.jpg" alt="Personal Publication" className="projects" />
                    </div>
                    <div className="column">
                        <h1 className="title">Personal Publication</h1>
                        <h2 className="subtitle">Online journalling made easy.</h2>
                        <section className="subtitle about">
                            <p className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eleifend risus in lobortis. Vivamus non enim eget nisl ultricies lobortis sit amet a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum, mi ac imperdiet viverra, libero odio porttitor arcu, sed commodo sapien sapien quis nibh. Suspendisse lobortis nisi nulla, eget finibus augue faucibus nec.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}