import React, { useState } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState("");
  const tempId = "template_jwgbcjk";
  const serviceId = "service_msxsdyb";
  const userId = "user_KfUOwiUcoIGRmbzYaBS46";
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function formHandler(e) {
    e.preventDefault();

    if (name.length === 0) {
      let nameInput = document.querySelector(".name-input");
      let nameTitle = document.querySelector(".name-title");
      nameInput.classList.add("contact__form-error");
      nameTitle.classList.add("contact__form-error-text");
      return;
    } else {
      let nameInput = document.querySelector(".name-input");
      let nameTitle = document.querySelector(".name-title");
      nameInput.classList.remove("contact__form-error");
      nameTitle.classList.remove("contact__form-error-text");
    }

    if (!validateEmail(email) ) {
      let emailInput = document.querySelector(".email-input");
      let emailTitle = document.querySelector(".email-title");
      emailInput.classList.add("contact__form-error");
      emailTitle.classList.add("contact__form-error-text");
      return;
    } else {
      let emailInput = document.querySelector(".email-input");
      let emailTitle = document.querySelector(".email-title");
      emailInput.classList.remove("contact__form-error");
      emailTitle.classList.remove("contact__form-error-text");
    }

    if (msg.length === 0) {
      let msgInput = document.querySelector(".msg-input");
      let msgTitle = document.querySelector(".msg-title");
      msgInput.classList.add("contact__form-error");
      msgTitle.classList.add("contact__form-error-text");
      return;
    } else {
      let msgInput = document.querySelector(".msg-input");
      let msgTitle = document.querySelector(".msg-title");
      msgInput.classList.remove("contact__form-error");
      msgTitle.classList.remove("contact__form-error-text");
    }
   
    emailjs.sendForm(serviceId, tempId, e.target, userId)
    .then(res => {
        console.log(res)
    }).catch(err => console.log(err))

    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <div className="contact">
      <div className="contact__info">
        <h3 className="contact__title">Get in Touch</h3>
        <div className="contact__get-in-touch">
          <p className="contact__info-text">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a remote position. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <ul className="contact__info-links">
            <li>
             <a href="https://www.linkedin.com/in/heritier-akilimali-6a2856141/"><i class="fab fa-linkedin"></i></a> 
            </li>
            <li>
              <a href="https://github.com/heritio"><i class="fab fa-github"></i></a> 
            </li>
          </ul>
        </div>
      </div>
      <div className="contact__form">
        <h3 className="contact__title">Contact Me</h3>
        <form action="POST" className="contact__inputs" onSubmit={(e) => formHandler(e)} data-netlify="true">
          <div className="contact__inputs-container">
            <p className="contact__form-title name-title">Name</p>
            <input
              onChange={(e) => setName(e)}
              className="contact__form-input name-input"
              type="text"
              placeholder="John"
              name="name"
            />
          </div>
          <div className="contact__inputs-container">
            <p className="contact__form-title  email-title">Email adress</p>
            <input
              onChange={(e) => setEmail(e)}
              className="email-input contact__form-input"
              type="text"
              placeholder="Example@gmail.com"
              name="email"
            />
          </div>
          <div className="contact__inputs-container">
            <p className="contact__form-title msg-title">Message</p>
            <textarea
              onChange={(e) => setMsg(e)}
              className="msg-input contact__form-input2"
              type="text-area"
              placeholder="Message here..."
              name="msg"
            ></textarea>
          </div>
          <button
            
            type="submit"
            className="contact__form-btn"
          >
            send message
          </button>
        </form>
      </div>
    </div>
  );
}
