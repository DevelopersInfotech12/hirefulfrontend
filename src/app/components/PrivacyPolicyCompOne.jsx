"use client"

import React, { useState } from 'react';
import { Shield, Lock, Eye, UserCheck, Database, FileText, Bell, Globe } from 'lucide-react';

export default function PrivacyPolicyCompOne() {
  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', label: 'Introduction', icon: <FileText className="w-4 h-4" /> },
    { id: 'information-collection', label: 'Information We Collect', icon: <Database className="w-4 h-4" /> },
    { id: 'how-we-use', label: 'How We Use Your Data', icon: <Eye className="w-4 h-4" /> },
    { id: 'data-sharing', label: 'Data Sharing', icon: <Globe className="w-4 h-4" /> },
    { id: 'data-security', label: 'Data Security', icon: <Lock className="w-4 h-4" /> },
    { id: 'your-rights', label: 'Your Rights', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'cookies', label: 'Cookies Policy', icon: <Bell className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact Us', icon: <Shield className="w-4 h-4" /> }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${activeSection === item.id
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-12">

                {/* Introduction */}
                <section id="introduction">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Introduction</h2>
                      <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to our Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you use our job board platform. We are committed to protecting your privacy and ensuring you have a positive experience on our website.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </section>

                {/* Information We Collect */}
                <section id="information-collection">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Information We Collect</h2>
                      <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We collect several types of information from and about users of our platform:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Name, email address, phone number, and postal address</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Resume, CV, cover letter, and work history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Education credentials and professional certifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Payment information for premium services</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>IP address, browser type, and device information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Usage data, including pages visited and features used</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Cookies and similar tracking technologies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Data */}
                <section id="how-we-use">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">How We Use Your Data</h2>
                      <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We use the information we collect for various purposes, including:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                      <p className="text-sm text-gray-600">To provide, maintain, and improve our job board services and match candidates with opportunities.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                      <p className="text-sm text-gray-600">To send you updates, newsletters, and relevant job opportunities based on your preferences.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics</h4>
                      <p className="text-sm text-gray-600">To analyze usage patterns and improve user experience across our platform.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                      <p className="text-sm text-gray-600">To detect, prevent, and address technical issues and fraudulent activity.</p>
                    </div>
                  </div>
                </section>

                {/* Data Sharing */}
                <section id="data-sharing">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Sharing and Disclosure</h2>
                      <div className="w-20 h-1 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We may share your information in the following circumstances:
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4 p-5 bg-blue-50 rounded-lg">
                      <div className="w-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">With Employers</h4>
                        <p className="text-sm text-gray-600">When you apply for jobs, your profile and application materials are shared with potential employers.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-5 bg-blue-50 rounded-lg">
                      <div className="w-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Service Providers</h4>
                        <p className="text-sm text-gray-600">With third-party vendors who perform services on our behalf, such as payment processing and data analytics.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-5 bg-blue-50 rounded-lg">
                      <div className="w-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Legal Requirements</h4>
                        <p className="text-sm text-gray-600">When required by law or to protect our rights, property, or safety, or that of our users.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Data Security */}
                <section id="data-security">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Security</h2>
                      <div className="w-20 h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-gray-700">SSL/TLS encryption for data transmission</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-gray-700">Secure servers with regular security audits</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-gray-700">Access controls and authentication measures</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-gray-700">Regular data backups and disaster recovery plans</p>
                    </div>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Privacy Rights</h2>
                      <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You have certain rights regarding your personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Access & Portability</h4>
                      <p className="text-sm text-gray-600">Request access to your personal data and receive a copy in a portable format.</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Correction</h4>
                      <p className="text-sm text-gray-600">Update or correct inaccurate or incomplete personal information.</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
                      <p className="text-sm text-gray-600">Request deletion of your personal data, subject to legal obligations.</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Opt-Out</h4>
                      <p className="text-sm text-gray-600">Unsubscribe from marketing communications at any time.</p>
                    </div>
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Cookies Policy</h2>
                      <div className="w-20 h-1 bg-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us understand how you use our services and improve functionality.
                  </p>

                  <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Cookie Management</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our services.
                    </p>
                    <button className="text-blue-600 font-medium text-sm hover:underline">
                      Manage Cookie Preferences →
                    </button>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
                      <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold text-gray-900">privacy@jobboard.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Mailing Address</p>
                          <p className="font-semibold text-gray-900">123 Business Ave, New York, NY 10001</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

              {/* Footer Note */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Your Privacy Matters</h3>
                <p className="text-gray-600 text-sm">
                  We are committed to protecting your privacy and handling your data responsibly. This policy is reviewed regularly to ensure compliance with current regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}