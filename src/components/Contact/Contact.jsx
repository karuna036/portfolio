import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { profileData } from '../../data/profile';
import { validateEmail, copyToClipboard } from '../../utils/helpers';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  AlertCircle, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedKey, setCopiedKey] = useState(null); // 'email' | 'phone' | null

  const handleCopy = async (key, text) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const isRealWeb3FormsKey =
      web3FormsKey &&
      web3FormsKey.trim() !== '' &&
      !web3FormsKey.includes('YOUR_WEB3FORMS_ACCESS_KEY');

    const contactEndpoint =
      import.meta.env.VITE_CONTACT_ENDPOINT ||
      (isRealWeb3FormsKey ? 'https://api.web3forms.com/submit' : null);

    try {
      if (isRealWeb3FormsKey || contactEndpoint) {
        const endpoint = contactEndpoint || 'https://api.web3forms.com/submit';
        const payload = isRealWeb3FormsKey
          ? {
              access_key: web3FormsKey.trim(),
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: `[Portfolio Inquiry] ${formData.subject.trim()}`,
              message: formData.message.trim(),
              from_name: `${formData.name.trim()} (Portfolio Visitor)`,
            }
          : formData;

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok || (data && data.success === false)) {
          throw new Error(data?.message || 'Failed to send message via email service.');
        }
      } else {
        // Fallback simulation when VITE_WEB3FORMS_ACCESS_KEY is not yet added in .env
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err?.message || '');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Looking for a Full Stack Developer or discussing an engineering opportunity? Send a message or connect directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-luminous p-6 sm:p-8 rounded-2xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Ready to respond to inquiries regarding full-time roles, contracts, and projects.
                </p>
              </div>

              {/* Contact list items */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="p-2.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </span>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${profileData.contact.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block"
                      >
                        {profileData.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', profileData.contact.email)}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedKey === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <span className="p-2.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </span>
                    <div className="truncate">
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block">
                        Phone
                      </span>
                      <a
                        href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 truncate block"
                      >
                        {profileData.contact.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('phone', profileData.contact.phone)}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedKey === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-center gap-3">
                  <span className="p-2.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 block">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {profileData.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-3">
                  Connect Online
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-xs font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                  Status: <strong>Immediately Available</strong> for full-time Full Stack Developer roles.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form with rigorous validation */}
          <div className="lg:col-span-7">
            <div className="card-luminous p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {/* Success Alert Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5 leading-relaxed">
                      Thank you for reaching out. I have received your message and will review it shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Alert Banner */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-rose-900 dark:text-rose-200">
                      Failed to send message
                    </h4>
                    <p className="text-xs text-rose-700 dark:text-rose-300 mt-0.5 leading-relaxed">
                      {errorMessage ? `${errorMessage} ` : ''}Please try again or contact me directly via <a href={`mailto:${profileData.contact.email}`} className="underline font-semibold">{profileData.contact.email}</a>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-500'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-500'
                      } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-500'
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or project requirements here..."
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-cyan-500'
                    } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-y`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/30 transition-all disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
