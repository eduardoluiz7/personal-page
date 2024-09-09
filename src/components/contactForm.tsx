import { useState } from 'react';
import { ContactData, sendEmail } from '../services/email';

export function ContactForm() {
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
      <h2 className="text-3xl font-bold text-lime-300 mb-6">Entre em contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none"
          />
        </div>

        {/* Assunto */}
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="subject">
            Assunto
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg text-gray-900 focus:outline-none"
          />
        </div>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full bg-lime-300 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-lime-400"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}