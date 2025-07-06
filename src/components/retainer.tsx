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
    <div className='flex flex-row w-full items-center justify-center h-[40vh] bg-gradient-to-r from-yellow-400 to-yellow-200 px-26'>
      <div className='flex flex-col w-1/2 justify-center px-15 gap-8'>
        <div className=''>
          <h2 className='text-5xl font-bold text-primary leading-18 tracking-normal'>Freshly updated.</h2>
          <p className='mt-4'>Don't let the grass grow under your feet! Keep abreast of growing trends, new ideas and all things biophilic by signing up to our email newsletter.</p>
        </div>
        <p className='text-[1.1rem] text-[#8b8b16]'>
          By subscribing, you agree to our <span className='underline'>Ts & Cs.</span> Unsubscribe any time
        </p>
      </div>
      
      <div className='flex flex-row w-1/2 justify-center px-15 gap-8'>
        <div className='flex flex-row gap-2'>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='border-b-2 py-3 focus:outline-none focus:border-primary bg-transparent' 
            placeholder='your.email@example.com'
            required
          />
          <button 
            type="button" 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`ml-6 py-5 px-9 rounded-full transition-colors uppercase font-medium ${
              isSubmitting 
                ? 'bg-primary text-white cursor-not-allowed' 
                : 'border-2 border-primary text-primary hover:text-white hover:bg-primary'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </div>
        
        {submitStatus === 'success' && (
          <p className='text-green-600 mt-2'>Successfully subscribed!</p>
        )}
        {submitStatus === 'error' && (
          <p className='text-red-600 mt-2'>Please enter a valid email address.</p>
        )}
      </div>
    </div>
  );
};

export default Subscription;