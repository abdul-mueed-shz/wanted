import React from "react";
import { useForm } from "react-hook-form";
import { DATA } from "../../data/details";

const ContactForm = () => {
  const { NAME } = DATA;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
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
              <span className="text-red-500 mt-1">{errors.email.message}</span>
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
            <span className="text-red-500 mt-1">{errors.message.message}</span>
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
  );
};

export default ContactForm;
