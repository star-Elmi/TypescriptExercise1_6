import React, { useState } from "react";

interface ContactData {
  name: string;
  email: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactData) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [contactForm, setContactForm] = useState<ContactData>({
    name: "",
    email: "",
  });

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(contactForm);
  };

  return (
    <form onSubmit={handleContactSubmit}>
      <input
        type="text"
        value={contactForm.name}
        onChange={(e) =>
          setContactForm({ ...contactForm, name: e.target.value })
        }
        placeholder="Name"
      />

      <input
        type="email"
        value={contactForm.email}
        onChange={(e) =>
          setContactForm({ ...contactForm, email: e.target.value })
        }
        placeholder="Email"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
