"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Upload, FileText, CheckCircle } from 'lucide-react';

export default function ContactCompOne() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadError, setUploadError] = useState('');

   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadError('');

    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setUploadError('Please upload a PDF or Word document');
        e.target.value = '';
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setUploadError('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setFormData(prev => ({
        ...prev,
        resume: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.resume) {
      setUploadError('Please select a resume file');
      return;
    }

    setIsSubmitting(true);
    setUploadError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('resume', formData.resume);
      
      // Only append name and email if they are provided
      if (formData.name.trim()) {
        formDataToSend.append('name', formData.name);
      }
      if (formData.email.trim()) {
        formDataToSend.append('email', formData.email);
      }

      const response = await fetch(`${API_URL}/api/resumes/upload`, {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          resume: null
        });
        // Reset file input
        document.getElementById('resume-upload').value = '';
        
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setUploadError(data.message || 'Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['hirefuljobs1@gmail.com'],
      color: 'blue'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91-9289867204',  'Mon-Fri, 9AM-6PM EST'],
      color: 'green'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['B-112 Sector-4', ' Rohini, Delhi 110085'],
      color: 'purple'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Weekend: Closed'],
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Contact Info Cards */}
      <section className="py-16 px-4 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${colorClasses[info.color]} rounded-lg flex items-center justify-center mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-teal-600 mb-2">Submit Your Resume</h2>
              <p className="text-gray-600 mb-6">Upload your resume and we'll get back to you soon.</p>

              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-800">Resume uploaded successfully!</p>
                    <p className="text-sm text-green-700 mt-1">We've received your application.</p>
                  </div>
                </div>
              )}

              {uploadError && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  <p className="font-medium">{uploadError}</p>
                </div>
              )}

              <div>
                {/* Name */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Resume Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Resume *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {formData.resume && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                        <FileText className="w-4 h-4" />
                        <span className="font-medium">{formData.resume.name}</span>
                        <span className="text-gray-400">({(formData.resume.size / 1024).toFixed(2)} KB)</span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.resume}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Resume
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
                    alt="Office location"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Our Office</p>
                    <p className="text-sm">Delhi, India</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">How quickly will I get a response?</h4>
                    <p className="text-gray-600 text-sm">We typically respond within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Do you offer phone support?</h4>
                    <p className="text-gray-600 text-sm">Yes! Call us at +91- 9289867204 during business hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Can I schedule a demo?</h4>
                    <p className="text-gray-600 text-sm">Absolutely! Mention it in your message and we'll arrange a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}