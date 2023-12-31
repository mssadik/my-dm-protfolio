import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_set0oep', 'template_slfxq8e', form.current, 'cBN2lf_SimMFLqCvA')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Error sending message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="bg-black">
      <h2 className="font-extrabold font-serif text-slate-200 text-3xl md:my-4 text-center">Get in touch</h2>
      <div className="mx-4 md:mx-20 md:pb-20 p-4 md:p-8">
        <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
          {/* Left side: Image */}
          <div className="md:w-1/2 mb-0 md:mb-0">
            <img
              src="https://i.ibb.co/xq6VrJ0/depositphotos-288196084-stock-photo-robot-hand-making-contact-with.webp"
              alt="Contact"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Right side: Contact Form */}
          <div className="md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="bg-gradient-to-br from-black to-gray-800 text-white shadow-md rounded-md p-12 md:p-4">
              {/* Form fields here */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                <input type="text" required id="name" name="user_name" className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white" placeholder="Your Name" />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="user_email"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  className="mt-1 p-2 w-full border rounded-md bg-gray-800 text-white"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                className="bg-emerald-400 w-full font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none"
              >
                Sent
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
