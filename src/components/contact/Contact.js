import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your submission!");
        setFormData({
          name: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred, please try again.");
    }
  };

  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit}>
            <h4>Fill Up The Form</h4> <br />
            <div>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
              />
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Phone Number'
              />
            </div>
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Subject'
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              cols='30'
              rows='10'
              placeholder='Your message'
            ></textarea>
            <div className="property-actions">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
