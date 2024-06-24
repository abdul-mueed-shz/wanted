import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { DATA } from "../../data/details";
import DOMPurify from "dompurify";
import { renderToString } from "react-dom/server";
import {
  IoMdMail,
  IoMdCall,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io";
import { IoLogoStackoverflow } from "react-icons/io5";

const ContactForm = ({
  heading,
  tagline,
  iconSize = 20,
  socialDetails,
  contactDetails,
}) => {
  const { NAME } = DATA;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleMailClick = (email) => {
    if (!email) {
      return;
    }
    window.location.href = `mailto:${email}`;
  };

  const handleSocialClick = (link) => {
    if (!link) {
      return;
    }
    window.open(link, "_blank");
  };

  return (
    <section className="pb-8 opacity-100 border-top__2pxDashed max-w-718px">
      <div
        id="heading"
        className="text-3xl font-medium col-span-2 md:col-span-1  pt-10"
      >
        {heading}
      </div>
      <div className="break-words font-medium py-10">
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(renderToString(tagline)),
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
        <div className="flex flex-col gap-y-5">
          <button
            className="cursor-pointer flex items-center gap-x-3 font-medium bg-transparent border-none p-0 m-0"
            onClick={handleMailClick}
          >
            <IoMdMail size={iconSize} />
            <span>{contactDetails.EMAIL}</span>
          </button>
          <div className="flex items-center gap-x-3 font-medium">
            <IoMdCall size={iconSize} />
            <span>{contactDetails.PHONE}</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <button
            className="cursor-pointer flex items-center gap-x-3 font-medium bg-transparent border-none p-0 m-0"
            onClick={() => handleSocialClick(socialDetails.GITHUB)}
          >
            <IoLogoGithub size={iconSize} />
            <span>Github</span>
          </button>
          <button
            className="cursor-pointer flex items-center gap-x-3 font-medium bg-transparent border-none p-0 m-0"
            onClick={() => handleSocialClick(socialDetails.LINKEDIN)}
          >
            <IoLogoLinkedin size={iconSize} />
            <span>Linkedin</span>
          </button>
          <button
            className="cursor-pointer flex items-center gap-x-3 font-medium bg-transparent border-none p-0 m-0"
            onClick={() => handleSocialClick(socialDetails.TWITTER)}
          >
            <IoLogoTwitter size={iconSize} />
            <span>Twitter</span>
          </button>
          <button
            className="cursor-pointer flex items-center gap-x-3 font-medium bg-transparent border-none p-0 m-0"
            onClick={() => handleSocialClick(socialDetails.STACKOVERFLOW)}
          >
            <IoLogoStackoverflow size={iconSize} />
            <span>Stackoverflow</span>
          </button>
        </div>
      </div>
      <div>
        <h1 className="mb-4 text-2xl font-medium">
          Send {NAME.split(" ")[0]} a message
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col">
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Name"
                className={`p-4 border-0 font-medium bg-[#d6c7ad] text-[#535353] placeholder-gray-500 focus:outline-none ${
                  errors.name ? "border-b-2 border-red-500" : ""
                }`}
              />
              {errors.name && (
                <span className="text-red-500 mt-1">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="Email"
                className={`p-4 border-0 font-medium bg-[#d6c7ad] text-[#535353] placeholder-gray-500 focus:outline-none ${
                  errors.email ? "border-b-2 border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              rows="4"
              className={`w-full p-4 border-0 font-medium bg-[#d6c7ad] text-[#535353] placeholder-gray-500 focus:outline-none ${
                errors.message ? "border-b-2 border-red-500" : ""
              }`}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 mt-1">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-[#535353] text-[#ffffff] font-semibold hover:bg-[#6f6e6b] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  tagline: PropTypes.string,
  heading: PropTypes.string,
  iconSize: PropTypes.number,
  socialDetails: PropTypes.shape({
    LINKEDIN: PropTypes.string,
    GITHUB: PropTypes.string,
    TWITTER: PropTypes.string,
    STACKOVERFLOW: PropTypes.string,
  }),
  contactDetails: PropTypes.shape({
    EMAIL: PropTypes.string,
    PHONE: PropTypes.string,
    ADDRESS: PropTypes.string,
  }),
};

export default ContactForm;
