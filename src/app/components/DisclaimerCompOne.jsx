"use client"

import React, { useState } from 'react';
import { AlertTriangle, Shield, Info, FileWarning, ExternalLink, UserCheck, TrendingUp, MessageSquare } from 'lucide-react';

export default function DisclaimerCompOne() {
  const [activeSection, setActiveSection] = useState('general');

  const tableOfContents = [
    { id: 'general', label: 'General Disclaimer', icon: <Info className="w-4 h-4" /> },
    { id: 'accuracy', label: 'Information Accuracy', icon: <FileWarning className="w-4 h-4" /> },
    { id: 'employment', label: 'Employment Disclaimer', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'third-party', label: 'Third-Party Links', icon: <ExternalLink className="w-4 h-4" /> },
    { id: 'professional-advice', label: 'Professional Advice', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'results', label: 'No Guarantee of Results', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'liability', label: 'Limitation of Liability', icon: <Shield className="w-4 h-4" /> },
    { id: 'changes', label: 'Changes to Disclaimer', icon: <AlertTriangle className="w-4 h-4" /> }
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
      {/* Important Notice Banner */}
      <section className="py-6 px-4 -mt-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-yellow-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Please Read Carefully</h3>
                <p className="text-gray-700">
                  This disclaimer governs your use of our website. By using our website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, you must not use our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                        activeSection === item.id
                          ? 'bg-orange-600 text-white font-semibold'
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
                
                {/* General Disclaimer */}
                <section id="general">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Info className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">General Disclaimer</h2>
                      <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The information contained on this job board platform is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website for any purpose.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Any reliance you place on such information is strictly at your own risk. We will not be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                  </p>
                </section>

                {/* Information Accuracy */}
                <section id="accuracy">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileWarning className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Information Accuracy</h2>
                      <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We strive to maintain accurate and up-to-date information on our platform. However, please be aware of the following:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Job Listings</h4>
                      <p className="text-sm text-gray-600">
                        Job listings are provided by third-party employers. We do not verify the accuracy, legality, or quality of job postings. Job details, requirements, and availability may change without notice.
                      </p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Company Information</h4>
                      <p className="text-sm text-gray-600">
                        Information about companies is sourced from various channels and may not always be current or complete. We recommend conducting your own research before applying to any position.
                      </p>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Salary Information</h4>
                      <p className="text-sm text-gray-600">
                        Salary ranges and compensation details are provided by employers and may vary based on experience, location, and other factors. Actual compensation may differ from posted amounts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Employment Disclaimer */}
                <section id="employment">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Employment Disclaimer</h2>
                      <div className="w-20 h-1 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-green-600" />
                      Important Notice
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span>We are not an employment agency and do not hire on behalf of any employer.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span>We do not guarantee job placements, interviews, or employment outcomes.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span>The relationship is solely between the job seeker and the employer.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-1">•</span>
                        <span>We are not responsible for hiring decisions, employment contracts, or workplace disputes.</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-5">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      Scam Warning
                    </h4>
                    <p className="text-sm text-gray-700">
                      Be cautious of fraudulent job postings. Legitimate employers will never ask you to pay fees for job applications or require sensitive financial information upfront. Report any suspicious activity to our support team immediately.
                    </p>
                  </div>
                </section>

                {/* Third-Party Links */}
                <section id="third-party">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Third-Party Links and Content</h2>
                      <div className="w-20 h-1 bg-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our website may contain links to external websites and third-party content that are not provided or maintained by us. Please note:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-indigo-200 rounded-lg p-5">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                        <ExternalLink className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">No Endorsement</h4>
                      <p className="text-sm text-gray-600">
                        We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites.
                      </p>
                    </div>
                    <div className="border border-indigo-200 rounded-lg p-5">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                        <Shield className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Use at Your Own Risk</h4>
                      <p className="text-sm text-gray-600">
                        You access external links at your own risk. We recommend reviewing their terms and privacy policies.
                      </p>
                    </div>
                    <div className="border border-indigo-200 rounded-lg p-5">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                        <AlertTriangle className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">No Control</h4>
                      <p className="text-sm text-gray-600">
                        We have no control over the nature, content, or availability of external sites and resources.
                      </p>
                    </div>
                    <div className="border border-indigo-200 rounded-lg p-5">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                        <Info className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Updates & Changes</h4>
                      <p className="text-sm text-gray-600">
                        Third-party websites may change or remove content without notice, affecting the relevance of links.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Professional Advice */}
                <section id="professional-advice">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Advice Disclaimer</h2>
                      <div className="w-20 h-1 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The information provided on our platform is not intended to be professional advice. Please consider the following:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-5 bg-orange-50 rounded-lg">
                      <div className="w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Career Advice</h4>
                        <p className="text-sm text-gray-600">
                          Any career guidance, tips, or suggestions provided are for informational purposes only and should not replace professional career counseling.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-5 bg-orange-50 rounded-lg">
                      <div className="w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Legal Advice</h4>
                        <p className="text-sm text-gray-600">
                          We do not provide legal advice regarding employment law, contracts, or workplace issues. Consult a qualified attorney for legal matters.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-5 bg-orange-50 rounded-lg">
                      <div className="w-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Financial Advice</h4>
                        <p className="text-sm text-gray-600">
                          Salary information and financial guidance are general in nature. Consult a financial advisor for personalized advice.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* No Guarantee of Results */}
                <section id="results">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">No Guarantee of Results</h2>
                      <div className="w-20 h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3 mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h3>
                        <p className="text-gray-700 mb-3">
                          Using our platform does not guarantee any specific outcomes, including but not limited to:
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-700 ml-9">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">×</span>
                        <span>Job offers or employment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">×</span>
                        <span>Interview invitations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">×</span>
                        <span>Specific salary or compensation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">×</span>
                        <span>Career advancement or success</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">×</span>
                        <span>Response time from employers</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Your success in finding employment depends on many factors including your qualifications, experience, market conditions, and individual employer requirements. Results will vary for each user.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section id="liability">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-slate-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Limitation of Liability</h2>
                      <div className="w-20 h-1 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                    <p className="text-gray-700 font-medium">
                      To the fullest extent permitted by applicable law:
                    </p>
                    <div className="space-y-3 text-gray-600">
                      <p>
                        We shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from your use of our platform, including but not limited to:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="text-slate-600 mt-1.5">•</span>
                          <span>Loss of employment opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-600 mt-1.5">•</span>
                          <span>Financial losses or lost income</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-600 mt-1.5">•</span>
                          <span>Damages from employer-employee relationships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-600 mt-1.5">•</span>
                          <span>Errors or omissions in job listings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-600 mt-1.5">•</span>
                          <span>Unauthorized access to your account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-600 mt-1.5">•</span>
                          <span>Service interruptions or technical issues</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Changes to Disclaimer */}
                <section id="changes">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Changes to This Disclaimer</h2>
                      <div className="w-20 h-1 bg-yellow-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We reserve the right to update or modify this disclaimer at any time without prior notice.
                  </p>
                  
                  <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Stay Informed</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Changes will be effective immediately upon posting on this page. The "Last Updated" date at the top of this page indicates when the disclaimer was last revised.
                    </p>
                    <p className="text-sm text-gray-600">
                      Your continued use of the website following any changes constitutes acceptance of the updated disclaimer. We encourage you to review this page periodically.
                    </p>
                  </div>
                </section>

                {/* Contact Section */}
                <section className="border-t-2 border-gray-200 pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h3>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about this disclaimer or need clarification on any point, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <MessageSquare className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email Support</p>
                          <p className="font-semibold text-gray-900">support@jobboard.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <Info className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Help Center</p>
                          <p className="font-semibold text-gray-900">help.jobboard.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}