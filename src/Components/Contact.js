import React from "react";

export default function Contact(props) {
    return (
    <section class="hero is-dark is-bold is-fullheight">
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="Contact" />
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
              Contact Me
          </h1>
          <div class="columns">
            <div class="column">
            <form onSubmit={(e) => props.handleSubmit(e)}>
              <div class="field">
                <label class="label subtitle">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Name" required />
                </div>
              </div>

              <div class="field">
                <label class="label subtitle">Subject</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Subject" required />
                </div>
              </div>

              <div class="field">
                <label class="label subtitle">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="Email" required  />
                </div>
              </div>

              <div class="field">
                <label class="label subtitle">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Your messege here..." required></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-text">Clear</button>
                </div>
              </div>
            </form>  
            </div>
            <div class="column is-half">
                <img src="https://i.ibb.co/mGwPMPj/About.jpg" class="about" alt="Picture of Sasha and I" />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}