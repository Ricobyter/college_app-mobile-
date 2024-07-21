import axios from 'axios';

const API_URL = 'http://localhost:5000/send-email'
export const sendWelcomeEmail = async (emailData) => {
  try {
    console.log('Sending email...');
    
    const response = await axios.post(API_URL, emailData);
    console.log('Response:', response.data);
    
    if (response.data.success) {
      console.log('Email sent successfully');
    } else {
      console.error(error);
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
