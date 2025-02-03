import React from "react";

const ContactPage = () => {
  return (
    <div  style={{marginTop:"100px" ,minHeight:"100vh"}} className="contact-page py-5 bg-dark">
      <div className="container">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center mb-5">
          Have a question or need assistance? We'd love to hear from you! Please fill out the form below or reach out to us using the contact details provided.
        </p>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info w-100">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-details mt-4 mt-md-0">
              <h2>Our Contact Details</h2>
              <p>
                <strong>Email:</strong> support@shoppy.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Mobile Street, Tech City, USA
              </p>
              <p>
                Follow us on social media:
                <br />
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
