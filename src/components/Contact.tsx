import { useState } from "react";
import FloatingInput from "./FloatingInput"; // Ensure the correct import path
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const Contact = () => {
  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(form); // Fixed typo here
  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    alert('Thank you for your interest!');
  };

  return (
    <div
      className="px-4 sm:px-8 lg:px-16 mx-auto my-10 mb-28 font-mono max-w-5xl"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-center font-bold text-white">
        <span className="text-primaryColor">05 &nbsp;</span> Contact
      </h1>

      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="flex flex-col w-full sm:w-[90%] lg:w-[70%] border border-primaryColor shadow-[0_0_10px_0_#64FFDA] rounded-3xl p-6 sm:p-8 gap-6 sm:gap-4 m-auto"
      >
        <div className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
          Let's Connect
        </div>

        <FloatingInput
          id="name"
          name="Name"
          value={formData.name}
          handleChange={handleChange}
        />

        <FloatingInput
          id="email"
          name="Email"
          value={formData.email}
          handleChange={handleChange}
        />

        <FloatingInput
          id="phone"
          name="Phone Number"
          value={formData.phone}
          handleChange={handleChange}
        />

        <FloatingInput
          id="message"
          name="Message"
          value={formData.message}
          handleChange={handleChange}
        />

        <Button
          onClick={handleSubmit} // Wrapped the alert in a function
          fullWidth
          rightSection={<IconArrowRight size={20} />}
          className="!text-bgColor !font-bold text-lg sm:text-xl"
          variant="filled"
          size="lg"
          radius="lg"
          color="teal" // Use a predefined color name, or apply a class for custom colors
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Contact;
