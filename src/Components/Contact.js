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
          <h2 class="subtitle">
              Subtitle
          </h2>
          <div class="columns">
            <div class="column">

              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" />
                </div>
              </div>

              <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" value="bulma" />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
                  <span class="icon is-small is-right">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Textarea"></textarea>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-text">Cancel</button>
                </div>
              </div>  
            </div>
            <div class="column">
            
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}