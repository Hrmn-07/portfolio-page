"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("loading");

    // bukan real API call, hanya simulasi
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitMessage("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          ✉️ Feel free to contact me! ✉️
        </h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-gray-100 rounded"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-100 rounded"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 bg-gray-100 rounded"
              required
              placeholder="Write me something..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors disabled:bg-pink-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitMessage && (
            <p className="mt-4 text-green-400" role="status">
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
