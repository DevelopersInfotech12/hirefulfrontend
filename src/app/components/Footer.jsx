"use client";

import React, { useState } from 'react';
import { Facebook, Linkedin, Globe, Twitter, Dribbble, Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    const handleSubscribe = async () => {
        // Reset states
        setError('');
        setSuccess(false);

        // Validate email
        if (!email) {
            setError('Please enter your email address');
            return;
        }

        // Basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/subscribers/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Subscription failed');
            }

            setSuccess(true);
            setEmail('');

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);

        } catch (err) {
            setError(err.message || 'Failed to subscribe. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !loading && email) {
            handleSubscribe();
        }
    };

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact Us', href: '/contact' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacypolicy' },
            { name: 'Terms & Conditions', href: '/termsandcondition' },
            { name: 'Disclaimer', href: '/disclaimer' },
        ]
    };

    return (
        <div>
            {/* Main Footer */}
            <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-teal-700 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-600 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-700 rounded-full opacity-5"></div>
                <div className="absolute top-10 right-1/3 w-20 h-20 bg-teal-600 rounded-full opacity-5"></div>

                <div className="max-w-7xl mx-auto py-16 relative z-10">
                    {/* Top Section: Logo + Newsletter + Stats */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 pb-12 border-b border-teal-700/30">
                        {/* Left: Logo and Address */}
                        <div className="flex-shrink-0">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                                    <span className="text-white text-2xl font-bold">H</span>
                                </div>
                                <span className="text-3xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">HIREFUL</span>
                            </div>
                            <p className="text-teal-200 text-base leading-relaxed max-w-xs mb-6">
                                B-112, Sector-4 Rohini<br />
                                New Delhi, India - 110085
                            </p>

                            {/* Social Icons */}
                            {/* <div className="flex gap-4">
                                {[
                                    { Icon: Facebook, href: 'https://facebook.com/yourpage' },
                                    { Icon: Linkedin, href: 'https://linkedin.com/company/yourcompany' },
                                    { Icon: Globe, href: 'https://yourwebsite.com' },
                                    { Icon: Twitter, href: 'https://twitter.com/yourhandle' },
                                    { Icon: Dribbble, href: 'https://hireful.in/' }
                                ].map(({ Icon, href }, index) => (
                                    <a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-teal-700/50 backdrop-blur-sm hover:bg-teal-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 border border-teal-600/30"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div> */}


                        </div>

                        {/* Center: Newsletter with Dynamic Subscribe */}
                        <div className="flex-1 max-w-xl">
                            <h3 className="text-3xl font-bold text-white mb-3">Stay Updated</h3>
                            <p className="text-teal-200 mb-6">Subscribe to get latest job opportunities and career tips</p>

                            <div className="space-y-3">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                    <div className="relative flex bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-300/20">
                                        <div className="flex items-center pl-6 text-gray-400">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Enter your email address"
                                            className="flex-1 px-4 py-4 text-gray-700 outline-none bg-transparent"
                                            disabled={loading}
                                        />
                                        <button
                                            onClick={handleSubscribe}
                                            disabled={loading || !email}
                                            className="bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 font-semibold transition-all flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    <span>Subscribing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Subscribe</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Success Message */}
                                {success && (
                                    <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-3 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                                        <p className="text-green-100 text-sm font-medium">
                                            Successfully subscribed! Thank you.
                                        </p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-3 flex items-center gap-2">
                                        <AlertCircle className="w-5 h-5 text-red-300 flex-shrink-0" />
                                        <p className="text-red-100 text-sm">{error}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Stats Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { title: 'Verified Job Listings', label: 'Across Tech & Non-Tech Roles' },
                                { title: 'Career Opportunities', label: 'Updated Regularly' },
                                { title: 'Job Seekers Network', label: 'Freshers & Experienced' },
                                { title: 'Hiring Companies', label: 'Startups to Enterprises' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="text-center transform hover:scale-105 transition-transform"
                                >
                                    <div className="text-xl font-bold text-white mb-2">
                                        {item.title}
                                    </div>
                                    <div className="text-teal-300 text-xs font-semibold tracking-widest uppercase">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Footer Links Navigation */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-2 border-b border-teal-700/30">
                        {/* Company Links */}
                        <div>
                            {/* <h4 className="text-white font-bold text-lg mb-4">Company</h4> */}
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-teal-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-0.5 bg-teal-400 group-hover:w-3 transition-all duration-200"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div className="md:col-span-3">
                            {/* <h4 className="text-white font-bold text-lg mb-4">Legal</h4> */}
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-teal-200 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-0.5 bg-teal-400 group-hover:w-3 transition-all duration-200"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-teal-200 text-base">
                            © 2026 Hireful. All rights reserved.
                            <span className="mx-2">|</span>
                            <a
                                href="https://developersinfotech.in/"
                                className="text-white hover:text-teal-300 transition-colors font-semibold ml-1"
                            >
                                Developed By developersinfotech.in
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;