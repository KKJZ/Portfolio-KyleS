import React from "react";

export default function Projects(props) {
    return (
    <section class="hero is-light is-bold is-fullheight">
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="Projects" />
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Projects:
                </h1>
                <div class="controls">
                {/* want to make the projcets change on click */}
                {/* want to add a nice transitions to the leaving */}
                    <button class="previous round">&#8249;</button>
                    <button class="next round">&#8250;</button>
                </div>
                <div class="columns">
                    <div class="column">
                        <img src="https://i.ibb.co/QNGL7XV/Untitled.jpg" alt="Personal Publication" class="projects" />
                    </div>
                    <div class="column">
                        <h1 class="title">Personal Publication</h1>
                        <h2 class="subtitle">Online journalling made easy.</h2>
                        <section class="subtitle about">
                            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eleifend risus in lobortis. Vivamus non enim eget nisl ultricies lobortis sit amet a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum, mi ac imperdiet viverra, libero odio porttitor arcu, sed commodo sapien sapien quis nibh. Suspendisse lobortis nisi nulla, eget finibus augue faucibus nec.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}