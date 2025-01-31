import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = (email) => {
    // Basic email pattern check using regex
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = formRef.current.user_email.value;
    const message = formRef.current.message.value;

    const isEmailValid = validateEmail(email);
    const isMessageValid = message.trim() !== "";

    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (!isEmailValid || !isMessageValid) {
      return;
    }

    emailjs
      .sendForm("service_6td3k28", "template_johoxcm", formRef.current, "-3c5_quCEm3UhTV7X"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear the form after success
          setEmailError(false); // Reset email error
          setMessageError(false); // Reset message error
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );

  }

  return (
    <section id="contact" className=" text-black dark:text-gray-300 py-32 px-4 mx-4 md:mx-2 lg:mx-8 min-h-max">
      <div className="lg:flex md:mx-24 space-y-8 md:space-y-0 justify-between">
        {/* Heading Section */}
        <div className="text-5xl md:px-4 lg:m-10">
          <h1 className=" uppercase font-extrabold   m-0 lg:vertical-heading ">Contact Me</h1>
        </div>

        {/* Content Section */}
        <div className="font-poppins  content mx-2 md:mx-6 lg:py-12 md:py-10 items-start space-y-6">
          
          <p>
            Feel free to reach out for collaboration, questions, or just to say hi — 
            <br></br>I'd love to hear from you!
          </p>
          <p>
          </p>
          <div>
            <h2 className="text-lg font-semibold">Location:</h2>
            <p>Jaipur, Rajasthan</p>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              width="25px"
              height="23px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
                fill="#ffffff"
              />
            </svg>
            <p>
              <a
                href="mailto:Kushagra2808gupta@gmail.com"
                className="text-gray-300 no-underline hover:text-blue-700 "
              >
                Kushagra2808gupta@gmail.com
              </a>
            </p>
          </div>
          <div className="h-10 flex justify-center md:justify-start py-3 space-x-4">
            <a href="https://www.linkedin.com/in/kushagragupta08/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <svg
                fill="currentColor"
                height="800px"
                width="800px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-143 145 512 512"
                className="h-10 w-10 text-black hover:opacity-60 dark:text-gray-300 transition-colors"
              >
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z" />
              </svg>
            </a>
            <a
              href="https://github.com/kushagragupta04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 20 20"
                className="h-10 w-10 text-black hover:opacity-60 dark:text-gray-300 transition-colors"
                fill="currentColor">
                <g fill="currentColor" fillRule="evenodd">
                  <g fill="currentColor" transform="translate(-140.000000, -7559.000000)">
                    <g transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 256 256"
                className="h-10 w-10 text-black dark:text-gray-300 hover:opacity-60 transition-colors"
              >
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(1.4066 1.4066) scale(2.81 2.81)"
                >
                  <polygon
                    points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                  />
                  <path
                    d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z"
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      fill: "currentColor", // Dynamically adjusts with dark mode
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </a>
            <a href="https://instagram.com/heykush1" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <svg className="h-10 w-10 text-black dark:text-gray-300 hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 19.2 19.2" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z" />
              </svg>

            </a>
          </div>
        </div>

        {/* Form Section */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="form-container w-auto lg:w-4/12  space-y-4 bg-gray-100 dark:bg-gray-800 m-6 rounded-lg shadow-md font-poppins"
        >
          <h1 className="text-2xl font-bold">Drop Me a Message</h1>
          {/* Name Input */}
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Enter name"
              className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter email"
              className={`w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white ${emailError ? "border-2 border-red-500 focus:outline-none" : ""
                }`}
              required
              onBlur={() => {
                setEmailError(!validateEmail(formRef.current.user_email.value));
              }}
            />
          </div>

          {/* Message Textarea */}
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className={`w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white `}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="form-submit-btn w-full bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>


  );
};

export default Contact;
