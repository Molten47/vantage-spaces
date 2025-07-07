import React, { useState } from 'react';

const Subscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email.trim()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Your EmailJS or API call would go here
      // For now, simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '' });
      
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='flex flex-col lg:flex-row w-full items-center justify-center min-h-[40vh] lg:h-[40vh] bg-gradient-to-r from-yellow-400 to-yellow-200 px-4 lg:px-26 py-8 lg:py-0'>
      {/* Content Section */}
      <div className='flex flex-col w-full lg:w-1/2 justify-center px-4 lg:px-15 gap-4 lg:gap-8 mb-8 lg:mb-0'>
        <div className=''>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight lg:leading-18 tracking-normal'>
            Freshly updated.
          </h2>
          <p className='mt-3 lg:mt-4 text-sm md:text-base'>
            Don't let the grass grow under your feet! Keep abreast of growing trends, new ideas and all things biophilic by signing up to our email newsletter.
          </p>
        </div>
        <p className='text-sm md:text-[1.1rem] text-[#8b8b16]'>
          By subscribing, you agree to our <span className='underline'>Ts & Cs.</span> Unsubscribe any time
        </p>
      </div>
      
      {/* Form Section */}
      <div className='flex flex-col w-full lg:w-1/2 justify-center px-4 lg:px-15 gap-4 lg:gap-8'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-2'>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='border-b-2 py-3 focus:outline-none focus:border-primary bg-transparent flex-1 text-sm md:text-base' 
            placeholder='your.email@example.com'
            required
          />
          <button 
            type="button" 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`md:ml-6 py-3 md:py-5 px-6 md:px-9 rounded-full transition-colors uppercase font-medium text-sm md:text-base w-full md:w-auto ${
              isSubmitting 
                ? 'bg-primary text-white cursor-not-allowed' 
                : 'border-2 border-primary text-primary hover:text-white hover:bg-primary'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </div>
        
        {/* Status Messages */}
        <div className='min-h-[1.5rem]'>
          {submitStatus === 'success' && (
            <p className='text-green-600 text-sm md:text-base'>Successfully subscribed!</p>
          )}
          {submitStatus === 'error' && (
            <p className='text-red-600 text-sm md:text-base'>Please enter a valid email address.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscription;