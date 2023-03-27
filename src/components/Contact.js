import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import './Body.css'
import Footer from "./Footer";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the AJAX request
    fetch("http://localhost/php-react/login-php/form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("your question has been send");
        setTimeout(function () {
          window.location.reload();
        }, 4000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section className="part2">
        <div className="form-main">
          <div id="form-div">
            <form className="form" id="form1" onSubmit={handleSubmit}>
              <input
                type="text"
                className="feedback-input"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="feedback-input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <textarea
                type="text"
                className="feedback-input"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Comment"
                required
              />
              <div className="submit">
                <button className="submitcom" type="submit">
                  <span>envoyer</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="Contact">
          <h1 className="title2">
            Contact Form LittleWolf
            <br />
            Tech Shop
          </h1>
          <p className="undertitle2">
            Use this form to contact us
            <br />
            if you have any questions.
          </p>
        </div>

      </section>
      <section className="section2">
      <h2 className="section-heading text-uppercase">Our Location</h2>
      <div className="location">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.7419181796718!2d10.18148241999203!3d36.80073777546683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd356b042dd1bb%3A0xc1f002c36a9e588e!2slittleWolf.tech!5e0!3m2!1sar!2stn!4v1675687828718!5m2!1sar!2stn"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </section>
      <Footer />
    </div>
  );
}

export default Contact;
