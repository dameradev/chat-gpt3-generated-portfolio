import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Use your preferred online service for saving the data here
      // for example, you can use a service like Formspree to save the contact form data
      //const response = await fetch("https://formspree.io/your-email-address", {
      //  method: "POST",
      //  headers: {
      //    "Content-Type": "application/json"
      //  },
      //  body: JSON.stringify({ name, email, message })
      //});
      //const data = await response.json();
      //if (!response.ok) {
      //  throw new Error(data.message);
      //}
      //setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Your message was sent successfully!</p>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border border-gray-400 p-2 rounded-md"
          disabled={isSubmitting}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full border border-gray-400 p-2 rounded-md mt-2"
          disabled={isSubmitting}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block w-full border border-gray-400 p-2 rounded-md mt-2"
          rows={5}
          disabled={isSubmitting}
        />
      </label>
      <button
        type="submit"
        className="bg-gray-800 text-white p-3 rounded-md hover:bg-gray-900 mt-4"
        disabled={isSubmitting}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;