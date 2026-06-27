import React, { useState, FormEvent } from 'react';
import { Mail, Phone, Handshake, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    
    // Validation
    const newErrors: Record<string, boolean> = {};
    let hasError = false;
    ['firstName', 'organization', 'email', 'phone', 'inquiryType', 'message'].forEach(field => {
      if (!data[field] || data[field].trim() === '') {
        newErrors[field] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    
    const subject = encodeURIComponent(`PRAHARI Inquiry – ${data.organization}`);
    const body = encodeURIComponent(`Name: ${data.firstName}
Organization: ${data.organization}
Work Email: ${data.email}
Phone: ${data.phone}
Inquiry Type: ${data.inquiryType}

Message:
${data.message}`);

    window.location.href = `mailto:vasudeepkohli@gmail.com?subject=${subject}&body=${body}`;
    setFormStatus('submitted');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: false }));
    }
  };

  return (
    <section id="contact" className="bg-white py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-6 mt-4">Deploy PRAHARI in Your City.</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                We partner with municipalities, transit authorities, and institutional campuses to modernize urban infrastructure.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="mailto:vasudeepkohli@gmail.com" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl border border-gray-100 transition-colors group block">
                  <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-500 text-sm">Direct access to our team.</p>
                </a>
                
                <a href="tel:+917780987246" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl border border-gray-100 transition-colors group block">
                  <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-500 text-sm">Call us directly.</p>
                </a>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group">
                  <div className="bg-purple-50 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Partnerships</h3>
                  <p className="text-gray-500 text-sm">Government & pilot inquiries.</p>
                </div>

                <a href="#" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-2xl border border-gray-100 transition-colors group block cursor-not-allowed">
                  <div className="bg-orange-50 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Company Brochure</h3>
                  <p className="text-gray-500 text-sm">Available upon request.</p>
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/40">
              {formStatus === 'submitted' ? (
                <div className="h-full min-h-[450px] flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Inquiry Submitted</h3>
                  <p className="text-gray-600 max-w-sm mb-6">
                    Thank you for reaching out. We will review your request and get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      id="firstName" name="firstName" type="text"
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-gray-50 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                        errors.firstName ? "border-red-500" : "border-gray-200"
                      )} 
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">First Name is required.</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                    <input 
                      id="organization" name="organization" type="text"
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-gray-50 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                        errors.organization ? "border-red-500" : "border-gray-200"
                      )} 
                    />
                    {errors.organization && <p className="text-red-500 text-xs mt-1">Organization is required.</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                      <input 
                        id="email" name="email" type="email"
                        onChange={handleInputChange}
                        className={cn(
                          "w-full bg-gray-50 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                          errors.email ? "border-red-500" : "border-gray-200"
                        )} 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">Work Email is required.</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input 
                        id="phone" name="phone" type="tel"
                        onChange={handleInputChange}
                        className={cn(
                          "w-full bg-gray-50 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                          errors.phone ? "border-red-500" : "border-gray-200"
                        )} 
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">Phone is required.</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                    <select 
                      id="inquiryType" name="inquiryType" defaultValue=""
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-gray-50 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-gray-700",
                        errors.inquiryType ? "border-red-500" : "border-gray-200"
                      )}
                    >
                      <option value="" disabled>Select Inquiry Type...</option>
                      <option value="Deployment Information">Deployment Information</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Investment">Investment</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.inquiryType && <p className="text-red-500 text-xs mt-1">Inquiry Type is required.</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" name="message" rows={4}
                      onChange={handleInputChange}
                      className={cn(
                        "w-full bg-gray-50 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none",
                        errors.message ? "border-red-500" : "border-gray-200"
                      )}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">Message is required.</p>}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl py-4 transition-colors flex justify-center items-center gap-2">
                      Submit Inquiry
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <a href="mailto:vasudeepkohli@gmail.com?subject=General Inquiry - PRAHARI" className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl py-4 transition-colors border border-gray-200 flex justify-center items-center">
                      Email Us Directly
                    </a>
                  </div>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
