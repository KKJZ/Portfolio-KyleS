import React from "react";
import "../css/mail.css";

export default function Contact(props) {
    return (
    <section className="hero is-dark is-bold is-fullheight">
      <div id="Contact" className="hero-body">
        <div className="container">
          <h1 className="title">
              Contact Me
          </h1>
          <div className="columns">
            <div className="column">
            <div className= "envelope-wrapper">
            <div className= "envelope active">
            <div className= "envelope-top active"></div>
            <div className= "card">

            <form onSubmit={(e) => props.onSubmit(e)}>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" name="email" type="email" placeholder="Email" onChange={props.Change} required  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" name="content" placeholder="Your messege here..." onChange={props.Change} required></textarea>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="email-button" type="submit">Submit</button>
                </div>
              </div>
            </form>  
            </div>
            <div className="sent hidden"></div>
            <div className="error-mail hidden"></div>
            </div>
            </div>
            </div>
            <div className="column is-half">
                <img src="https://i.ibb.co/PYHNxvF/IMG-3630.jpg" className="about" alt="Me on the dock" />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}