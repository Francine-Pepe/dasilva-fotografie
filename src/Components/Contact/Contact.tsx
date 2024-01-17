import ContactAddress from "./ContactAddress";
import ContactForm from "./ContactForm";
import { motion as m } from "framer-motion";

function Contact() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <main className="contact-container">
        <ContactAddress />
        <ContactForm />
      </main>
    </m.div>
  );
}

export default Contact;
