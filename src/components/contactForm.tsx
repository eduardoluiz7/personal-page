import { useState } from 'react';
import { ContactData, sendEmail } from '../services/email';
import { useTranslation } from 'react-i18next';

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    const data: ContactData = {
        message: formData.message,
        user_name: formData.name,
        user_email: formData.email,
    }
    sendEmail(data)
    setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl text-center font-bold text-lime-300 mb-12">{t('contact.title')}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder={t('contact.select-name')}
            className="w-full h-12 px-3 py-2 border-none bg-zinc-900 rounded-lg text-gray-200 focus:outline-none"
          />
        </div>
        {/* Email */}
        <div>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t('contact.select-email')}
            className="w-full h-12 px-3 bg-zinc-900 border-none py-2 border rounded-lg text-gray-200 focus:outline-none"
          />
        </div>

        {/* Assunto */}
        <div>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder={t('contact.select-subject')}
            className="w-full h-12 px-3 bg-zinc-900 py-2 border border-none rounded-lg text-gray-200 focus:outline-none"
          />
        </div>

        {/* Mensagem */}
        <div>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.select-message')}
            required
            className="w-full bg-zinc-900 px-3 border-none py-2 border placholder-zinc-400 rounded-lg text-gray-200 focus:outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          disabled
          className="w-full bg-lime-300 text-zinc-900 font-bold py-2 px-4 rounded-lg hover:bg-lime-400"
        >
          {t('contact.button-send')}
        </button>
      </form>
    </div>
  );
}