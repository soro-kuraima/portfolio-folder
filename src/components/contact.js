import React from "react";
import "animate.css";
import toast, { Toaster } from "react-hot-toast";
import TrackVisibility from "react-on-screen";

import chat from "../assets/begin_chat.svg";

export default function Contact() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    fetch("https://getform.io/f/00b95fb0-416a-40b5-bd92-90b087555562", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          toast.custom(
            (t) => (
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Message Sent successfully</span>
                </div>
              </div>
            ),
            { id: "success-notification" }
          );
        } else {
          toast.custom(
            (t) => (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Something went wrong! try again</span>
                </div>
              </div>
            ),
            { id: "error-notification" }
          );
        }
      })
      .catch((error) => console.log(error));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <div
      className="contact bg-gradient-to-r from-purple-500 to-pink-500"
      id="contact"
    >
      <div className="p-8 md:pl-32 flex flex-col md:grid md:grid-cols-7 justify-center justify-items-center place-content-center items-center">
        <div className="md:col-span-3">
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                src={chat}
                alt=""
                className={
                  isVisible ? "animate__animated animate__jackInTheBox" : ""
                }
              />
            )}
          </TrackVisibility>
        </div>
        <div className="md:col-span-3">
          <h1 className="mb-8 text-4xl text-white font-bold">Let's Chat</h1>
          <form
            className="flex flex-col md:grid md:grid-cols-2 gap-2 text-white focus:text-black"
            onSubmit={handleFormSubmission}
          >
            <input
              type="text"
              name="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="bg-transparent font-semi-bold input input-bordered border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1"
            />
            <input
              type="text"
              name="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1"
            />
            <input
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1"
            />
            <input
              type="phone"
              name="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1"
            />
            <textarea
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id=""
              cols="60"
              rows="60"
              placeholder="Message"
              className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-2 h-64"
            ></textarea>
            <button
              type="submit"
              className="mt-8 ml-2 font-bold py-3 px-8 bg-white text-xl text-black hover:bg-black hover:text-white "
            >
              Send
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
}
