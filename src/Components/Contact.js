import React from "react";

export default function Contact(props) {
    return (
    <section className="hero is-dark is-bold is-fullheight">
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="Contact" />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
              Contact Me
          </h1>
          <div className="columns">
            <div className="column">

            <form onSubmit={(e) => props.onSubmit(e)}>
              <div className="field">
                <label className="label subtitle">Name</label>
                <div className="control">
                  <input className="input" name="name" type="text" placeholder="Name" onChange={props.Change} required />
                </div>
              </div>

              <div className="field">
                <label className="label subtitle">Subject</label>
                <div className="control">
                  <input className="input" name="subject" type="text" placeholder="Subject" onChange={props.Change} required />
                </div>
              </div>

              <div className="field">
                <label className="label subtitle">Email</label>
                <div className="control">
                  <input className="input" name="email" type="email" placeholder="Email" onChange={props.Change} required  />
                </div>
              </div>

              <div className="field">
                <label className="label subtitle">Message</label>
                <div className="control">
                  <textarea className="textarea" name="content" placeholder="Your messege here..." onChange={props.Change} required></textarea>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Clear</button>
                </div>
              </div>
            </form>  
            </div>
            <div className="column is-half">
                <img src="https://i.ibb.co/mGwPMPj/About.jpg" className="about" alt="Picture of Sasha and I" />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}