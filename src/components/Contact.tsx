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
    <div className='flex flex-col lg:flex-row justify-center min-h-[85vh] lg:h-[85vh] basic-font my-4 sm:my-6 lg:my-8 min-w-full'>
      {/* Left Content Section */}
      <div className='relative flex flex-col bg-white w-full lg:w-1/2 items-center justify-center px-4 sm:px-6 lg:px-0 py-8 lg:py-0'>
        <div className='flex flex-col gap-3 w-full sm:w-5/6 lg:w-3/4'>
          <h1 className='text-primary main-font text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold w-full lg:w-1/2'>
            Book a free design <span style={{textDecoration: 'underline', textDecorationColor:'#ffd700'}}>consultation</span>
          </h1>
          <p className='text-base sm:text-lg lg:text-[1.1rem] font-light basic-font w-full lg:w-3/4 mt-4 lg:mt-6'>
            Whether you're looking for living, replica or preserved planting for your workspace, our experts are on hand to help.
          </p>
          <sub className='text-xs hover:text-yellow-500'>Request a consultation session using the form {window.innerWidth < 1024 ? 'below' : 'opposite'}.</sub>
        </div>
      </div>
      
      {/* Right Form Section */}
      <div className='flex flex-col lg:flex-row w-full lg:w-1/2 py-8 lg:py-14'>
        <div className='flex flex-col lg:flex-row w-full lg:w-2/3 bg-yellow'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-4 sm:p-6 lg:p-8 w-full lg:w-1/2'>
            <label htmlFor="name" className='text-sm sm:text-base font-medium'>Your name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className='border-b-2 py-2 sm:py-3 focus:outline-none focus:border-primary text-sm sm:text-base' 
              placeholder='Enter your full name'
              required
            />
            
            <label htmlFor="company" className='text-sm sm:text-base font-medium'>Company</label>
            <input 
              type="text" 
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className='border-b-2 py-2 sm:py-3 focus:outline-none focus:border-primary text-sm sm:text-base' 
              placeholder='Company name' 
            />
            
            <label htmlFor="email" className='text-sm sm:text-base font-medium'>Email address</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className='border-b-2 py-2 sm:py-3 focus:outline-none focus:border-primary text-sm sm:text-base' 
              placeholder='your.email@example.com'
              required
            />
            
            <label htmlFor="phone" className='text-sm sm:text-base font-medium'>Phone number</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleInputChange}
              className='border-b-2 py-2 sm:py-3 focus:outline-none focus:border-primary text-sm sm:text-base' 
              placeholder='Your phone number'
              required
            />
            
            <label htmlFor="attendees" className='text-sm sm:text-base font-medium'>Number of attendees</label>
            <input 
              type="number" 
              id="attendees"
              name="attendees"
              value={formData.attendees}
              onChange={handleInputChange}
              min="1"
              className='border-b-2 py-2 sm:py-3 focus:outline-none focus:border-primary text-sm sm:text-base' 
              placeholder='How many people will attend?'
              required
            />
            
            <label htmlFor="preferredDate" className='text-sm sm:text-base font-medium'>Preferred consultation date</label>
            <input 
              type="date" 
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate.toISOString().split('T')[0]}
              onChange={handleInputChange}
              className='border-b-2 py-2 sm:py-3 focus:outline-none focus:border-primary text-sm sm:text-base'
              required
            />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 sm:mt-6 py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors text-sm sm:text-base ${
                isSubmitting 
                  ? 'bg-primary cursor-not-allowed' 
                  : 'border-2 border-[#00322d] text-primary font-semibold hover:bg-[#00322d] hover:text-white'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit a Request'}
            </button>
            
            {/* Status messages */}
            {submitStatus === 'success' && (
              <p className="text-green-600 mt-2 text-sm sm:text-base">Consultation request submitted successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 mt-2 text-sm sm:text-base">Failed to submit request. Please try again.</p>
            )}
          </form>
          
          {/* Image Section */}
          <div className='flex flex-col w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-auto'>
            <img src={HangingLeaf} alt="" className='-top-8 sm:-top-12 lg:-top-20 right-2 sm:right-5 absolute z-10 w-12 sm:w-16 lg:w-auto' />
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