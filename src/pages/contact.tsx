import { ContactForm } from '../components/contactForm';
import { Socials } from '../components/socials';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-pattern bg-no-repeat bg-center space-y-8 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      >
      <div className="w-full max-w-4xl">
        <ContactForm />
        <Socials />
      </div>
    </motion.div>
  );
}