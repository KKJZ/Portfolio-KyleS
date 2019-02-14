import React from "react";

export default function About(props) {
    return (
    <section class="hero is-light is-bold is-fullheight">
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="About" />
        <div class="hero-body">
            <div class="container">
                <h1 class="title">About Me:</h1>
                <div class="columns">
                    <div class="column is-half">
                        <img src="https://i.ibb.co/mGwPMPj/About.jpg" class="about" alt="Picture of Sasha and I" />
                        <img src="https://i.ibb.co/6D5rqnk/Drone.jpg" class="about" alt="Flying my drone" />
                    </div>
                    <div class="column is-half">
                        <section class="subtitle about">
                            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eleifend risus in lobortis. Vivamus non enim eget nisl ultricies lobortis sit amet a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum, mi ac imperdiet viverra, libero odio porttitor arcu, sed commodo sapien sapien quis nibh. Suspendisse lobortis nisi nulla, eget finibus augue faucibus nec.</p>
                            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eleifend risus in lobortis. Vivamus non enim eget nisl ultricies lobortis sit amet a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum, mi ac imperdiet viverra, libero odio porttitor arcu, sed commodo sapien sapien quis nibh. Suspendisse lobortis nisi nulla, eget finibus augue faucibus nec.</p>
                            <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt eleifend risus in lobortis. Vivamus non enim eget nisl ultricies lobortis sit amet a diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris condimentum, mi ac imperdiet viverra, libero odio porttitor arcu, sed commodo sapien sapien quis nibh. Suspendisse lobortis nisi nulla, eget finibus augue faucibus nec.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
