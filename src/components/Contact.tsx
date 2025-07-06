import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import TopImage from '../assets/planted furniture.jpg';
import BottomImage from '../assets/dry.jpg';
import HangingLeaf from '../assets/form plant.webp';

export interface ContactForm {
    name: string,
    company: string,
    email: string,
    phone: number,
    attendees: number,
    preferredDate: Date
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    company: '',
    email: '',
    phone: 0,
    attendees: 1,
    preferredDate: new Date()
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Environment variables - fallback approach
  const EMAILJS_SERVICE_ID = (() => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.VITE_EMAILJS_SERVICE_ID;
    }
    return undefined;
  })();
  
  const EMAILJS_TEMPLATE_ID = (() => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    }
    return undefined;
  })();
  
  const EMAILJS_PUBLIC_KEY = (() => {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    }
    return undefined;
  })();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : 
              type === 'date' ? new Date(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Format the data for EmailJS
    const templateParams = {
      // Basic client info
      client_name: formData.name,
      company_name: formData.company || 'Not specified',
      email_address: formData.email,
      phone_number: formData.phone.toString(),
      attendees_count: formData.attendees.toString(),
      preferred_date: formData.preferredDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      submission_date: new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      
      // Additional context for the email
      consultation_type: 'Free Design Consultation',
      service_interest: 'Workspace planting solutions',
      
      // For reply links in email
      reply_subject: `Re: Your Design Consultation Request - ${formData.name}`,
      reply_body: `Dear ${formData.name},%0D%0A%0D%0AThank you for your interest in our design consultation services. We've received your request and would like to schedule your free consultation.%0D%0A%0D%0ABest regards,%0D%0AYour Design Team`
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: 0,
        attendees: 1,
        preferredDate: new Date()
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-row justify-center h-[85vh] basic-font  my-8 min-w-full'>
      <div className='relative flex flex-col bg-white w-1/2 items-center justify-center'>
        <div className='absolute flex flex-col gap-3 w-3/4'>
          <h1 className='text-primary main-font text-7xl font-bold w-1/2'>
            Book a free design <span style={{textDecoration: 'underline', textDecorationColor:'#ffd700'}}>consultation</span>
          </h1>
          <p className='text-[1.1rem] font-light basic-font w-3/4 mt-6'>
            Whether you're looking for living, replica or preserved planting for your workspace, our experts are on hand to help.
          </p>
          <sub className='text-xs hover:text-yellow-500'>Request a consultation session using the form opposite.</sub>
        </div>
      </div>
      
      <div className='flex flex-row w-1/2 py-14'>
        <div className='flex w-2/3 flex-row bg-yellow'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-8 w-1/2'>
            <label htmlFor="name">Your name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className='border-b-2 py-3 focus:outline-none focus:border-primary' 
              placeholder='Enter your full name'
              required
            />
            
            <label htmlFor="company">Company</label>
            <input 
              type="text" 
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className='border-b-2 py-3 focus:outline-none focus:border-primary' 
              placeholder='Company name' 
            />
            
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className='border-b-2 py-3 focus:outline-none focus:border-primary' 
              placeholder='your.email@example.com'
              required
            />
            
            <label htmlFor="phone">Phone number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              className='border-b-2 py-3 focus:outline-none focus:border-primary' 
              placeholder='Your phone number'
              required
            />
            
            <label htmlFor="attendees">Number of attendees</label>
            <input 
              type="number" 
              id="attendees"
              name="attendees"
              value={formData.attendees}
              onChange={handleInputChange}
              min="1"
              className='border-b-2 py-3 focus:outline-none focus:border-primary' 
              placeholder='How many people will attend?'
              required
            />
            
            <label htmlFor="preferredDate">Preferred consultation date</label>
            <input 
              type="date" 
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate.toISOString().split('T')[0]}
              onChange={handleInputChange}
              className='border-b-2 py-3 focus:outline-none focus:border-primary'
              required
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-6 py-3 px-6 rounded-full transition-colors ${
                isSubmitting 
                  ? 'bg-primary cursor-not-allowed' 
                  : 'border-2 border-[#00322d] text-primary font-semibold hover:bg-[#00322d] hover:text-white'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit a Request'}
            </button>
            
            
            {/* Status messages */}
            {submitStatus === 'success' && (
              <p className="text-green-600 mt-2">Consultation request submitted successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 mt-2">Failed to submit request. Please try again.</p>
            )}
          </form>
          
          <div className='flex flex-col w-1/2 relative'>
            <img src={HangingLeaf} alt="" className='-top-20 right-5 absolute z-10' />
            <div className='relative h-1/2 w-full'>
              <img src={TopImage} alt="" className='relative h-full w-full object-cover' />
              <div className='absolute inset-0 bg-primary opacity-40'></div>
            </div>
            <div className='relative h-1/2 w-full'>
              <img src={BottomImage} alt="" className='relative h-full w-full object-cover' />
              <div className='absolute inset-0 bg-primary opacity-40'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;