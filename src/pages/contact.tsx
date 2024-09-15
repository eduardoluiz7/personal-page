import { ContactForm } from '../components/contactForm';
import { Socials } from '../components/socials';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pattern bg-no-repeat bg-center space-y-8 px-4">
      <div className="w-full max-w-4xl">
        <ContactForm />
        <Socials />
      </div>
    </div>
  );
}