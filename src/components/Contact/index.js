import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 2rem;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align center;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
display: flex;
justify-content: center;
align-items: center;
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 100%;
text-align: center;
padding: 13px 16px;
color:${({ theme }) => theme.white};
border-radius: 20px;
border: none;
cursor: pointer;
font-size: 20px;
font-weight: 600;
transition: all 0.2s ease-in-out !important;
background: rgb(0,168,123);
background: linear-gradient(90deg, rgba(0,168,123,1) 0%, rgba(53,162,159,1) 35%, rgba(0,135,162,1) 100%);
background: -moz-linear-gradient(90deg, rgba(0,168,123,1) 0%, rgba(53,162,159,1) 35%, rgba(0,135,162,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(0,168,123,1) 0%, rgba(53,162,159,1) 35%, rgba(0,135,162,1) 100%);
box-shadow:  20px 20px 60px #1F2634,
-20px -20px 60px #1F2634;
&:hover {
    transform: scale(1.05);
transition: all 0.4s ease-in-out;
box-shadow:  20px 20px 60px #1F2634,
filter: brightness(1);`;

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
  const skillEffect = {
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
          whileInView={skillEffect}
          initial={{ y: "-10%", opacity: 0 }}
        >
          <Title>Contact</Title>
          <Desc>
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
        </motion.div>
        {/* <motion.div
          whileInView={skillEffect}
          initial={{ y: "-10%", opacity: 0 }}
        > */}
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
        {/* </motion.div> */}
      </Wrapper>
    </Container>
  );
};

export default Contact;
