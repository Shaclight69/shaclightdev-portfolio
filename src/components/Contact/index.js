import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInputMessage,
  ContactInput,
  ContactButton,
} from "./ContactStyle";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  //hooks
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f9u7zqp",
        "template_k8c2hru",
        form.current,
        "pXroB7eLE3gsDzLcY"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  const contactvariants = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      bounce: 0.1,
    },
  };
  return (
    <Container id="contact">
      <Toaster position="bottom-left" expand={false} richColors />
      <Wrapper>
        <motion.div
          whileInView={contactvariants}
          initial={{ y: "-10%", opacity: 0 }}
        >
          <Title>Contact</Title>
          <Desc>
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
        </motion.div>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Write me a message 📧</ContactTitle>
          <ContactInput
            required
            placeholder="Your Email"
            type="email"
            name="form_email"
          />

          <ContactInput
            required
            placeholder="Your Name"
            type="text"
            name="form_name"
          />
          <ContactInput required placeholder="Subject" name="form_subject" />
          <ContactInputMessage
            required
            placeholder="Message"
            rows="4"
            name="message"
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
