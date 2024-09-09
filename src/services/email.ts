import emailjs from 'emailjs-com';

export interface ContactData {
    user_name: string;
    user_email: string;
    message: string;
  }

export function sendEmail(formData: ContactData){
    const data: Record<string, unknown> = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        message: formData.message,
      };

    emailjs.send('', '', data, '')
      .then((response) => {
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}