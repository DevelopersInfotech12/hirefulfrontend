"use client"

import React, { useState } from 'react';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, UserX, CreditCard, RefreshCw, Gavel } from 'lucide-react';

export default function TermsandConditionCompOne() {
  const [activeSection, setActiveSection] = useState('acceptance');

  const tableOfContents = [
    { id: 'acceptance', label: 'Acceptance of Terms', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'eligibility', label: 'Eligibility', icon: <UserX className="w-4 h-4" /> },
    { id: 'user-accounts', label: 'User Accounts', icon: <FileText className="w-4 h-4" /> },
    { id: 'services', label: 'Services Provided', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'user-conduct', label: 'User Conduct', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'payment', label: 'Payment Terms', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'intellectual-property', label: 'Intellectual Property', icon: <Scale className="w-4 h-4" /> },
    { id: 'termination', label: 'Termination', icon: <XCircle className="w-4 h-4" /> },
    { id: 'liability', label: 'Limitation of Liability', icon: <Gavel className="w-4 h-4" /> },
    { id: 'changes', label: 'Changes to Terms', icon: <RefreshCw className="w-4 h-4" /> }
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
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                        activeSection === item.id
                          ? 'bg-slate-700 text-white font-semibold'
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
                
                {/* Acceptance of Terms */}
                <section id="acceptance">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Acceptance of Terms</h2>
                      <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By accessing and using our job board platform (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use our Service.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    These terms apply to all visitors, users, and others who access or use the Service. Your continued use of the Service constitutes your acceptance of any changes or modifications to these terms.
                  </p>
                </section>

                {/* Eligibility */}
                <section id="eligibility">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserX className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Eligibility</h2>
                      <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To use our Service, you must meet the following eligibility requirements:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">You must be at least 18 years of age or the age of legal majority in your jurisdiction.</p>
                    </div>
                    <div className="flex gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">You must have the legal capacity to enter into a binding agreement.</p>
                    </div>
                    <div className="flex gap-3 p-4 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">You must not be prohibited from using our Service under any applicable laws.</p>
                    </div>
                  </div>
                </section>

                {/* User Accounts */}
                <section id="user-accounts">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">User Accounts</h2>
                      <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    When you create an account with us, you agree to the following:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-purple-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Accurate Information</h4>
                      <p className="text-sm text-gray-600">You must provide accurate, current, and complete information during registration and keep it updated.</p>
                    </div>
                    <div className="border border-purple-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Account Security</h4>
                      <p className="text-sm text-gray-600">You are responsible for maintaining the confidentiality of your account credentials.</p>
                    </div>
                    <div className="border border-purple-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Single Account</h4>
                      <p className="text-sm text-gray-600">You may not create multiple accounts or allow others to use your account.</p>
                    </div>
                    <div className="border border-purple-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Notification</h4>
                      <p className="text-sm text-gray-600">You must notify us immediately of any unauthorized access to your account.</p>
                    </div>
                  </div>
                </section>

                {/* Services Provided */}
                <section id="services">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Services Provided</h2>
                      <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our platform provides the following services:
                  </p>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Job Listings</h4>
                        <p className="text-sm text-gray-600">Access to job postings from various employers and industries.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Job Applications</h4>
                        <p className="text-sm text-gray-600">Ability to apply for jobs and track application status.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Profile Management</h4>
                        <p className="text-sm text-gray-600">Tools to create and manage your professional profile and resume.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Employer Services</h4>
                        <p className="text-sm text-gray-600">For employers: job posting, candidate search, and applicant management tools.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* User Conduct */}
                <section id="user-conduct">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">User Conduct</h2>
                      <div className="w-20 h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3 p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Fraudulent Activity</h4>
                        <p className="text-sm text-gray-600">Posting false information, creating fake profiles, or misrepresenting your identity.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Harassment</h4>
                        <p className="text-sm text-gray-600">Harassing, abusing, or threatening other users or employers.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Spam or Solicitation</h4>
                        <p className="text-sm text-gray-600">Sending unsolicited messages, advertisements, or promotional materials.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">System Interference</h4>
                        <p className="text-sm text-gray-600">Attempting to interfere with, compromise, or disrupt the Service or servers.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Payment Terms */}
                <section id="payment">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Terms</h2>
                      <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    For premium services and employer accounts:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">All fees are quoted in USD and are non-refundable unless otherwise stated.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Payment is due immediately upon purchase or at the start of the billing cycle.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">We reserve the right to change our pricing at any time with 30 days notice.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Subscription services will automatically renew unless cancelled before the renewal date.</p>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Intellectual Property Rights</h2>
                      <div className="w-20 h-1 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The Service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  
                  <div className="border-2 border-orange-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-orange-600" />
                      User Content License
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      By posting content on our Service (including resumes, profiles, and job listings), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display that content for the purpose of providing and promoting the Service.
                    </p>
                    <p className="text-gray-600 text-sm">
                      You retain all rights to your content and may remove it at any time.
                    </p>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Termination</h2>
                      <div className="w-20 h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We reserve the right to terminate or suspend your account and access to the Service:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Immediate Termination</h4>
                      <p className="text-sm text-gray-600">Without prior notice for violations of these Terms or illegal activities.</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">User Termination</h4>
                      <p className="text-sm text-gray-600">You may terminate your account at any time through account settings.</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Upon termination, your right to use the Service will immediately cease. All provisions that should survive termination will remain in effect.
                    </p>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section id="liability">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gavel className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Limitation of Liability</h2>
                      <div className="w-20 h-1 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    To the maximum extent permitted by law:
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                    <p className="text-gray-700">
                      We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.
                    </p>
                    <p className="text-gray-700">
                      We do not guarantee job placements or hiring outcomes. We are a platform that connects job seekers with employers.
                    </p>
                    <p className="text-gray-700">
                      We are not responsible for the conduct of users or the accuracy of job listings posted by employers.
                    </p>
                    <p className="text-gray-700">
                      Our total liability shall not exceed the amount you paid us in the last 12 months, or $100, whichever is greater.
                    </p>
                  </div>
                </section>

                {/* Changes to Terms */}
                <section id="changes">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Changes to Terms</h2>
                      <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We reserve the right to modify or replace these Terms at any time at our sole discretion.
                  </p>
                  
                  <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Notification of Changes</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      We will provide notice of material changes by posting the new Terms on this page and updating the "Effective Date" at the top. We may also notify you via email or through the Service.
                    </p>
                    <p className="text-sm text-gray-600">
                      Your continued use of the Service after any changes constitute acceptance of those changes. We encourage you to review these Terms periodically.
                    </p>
                  </div>
                </section>

                {/* Contact Section */}
                <section className="border-t-2 border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <FileText className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold text-gray-900">legal@jobboard.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <FileText className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Address</p>
                          <p className="font-semibold text-gray-900">123 Business Ave, NY 10001</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>

              {/* Footer Note */}
              <div className="mt-8 bg-slate-700 text-white rounded-xl p-6 text-center">
                <Scale className="w-12 h-12 mx-auto mb-3 opacity-80" />
                <h3 className="text-lg font-bold mb-2">Legal Agreement</h3>
                <p className="text-slate-200 text-sm">
                  These Terms and Conditions constitute a legally binding agreement between you and our platform. Please read them carefully and contact us if you have any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}