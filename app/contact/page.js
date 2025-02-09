import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaLocationArrow, FaSearchLocation, FaAddressCard } from "react-icons/fa"

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col gap-12 p-8">
            {/* Page Title */}
            <h1 className="text-center text-5xl font-bold text-gray-800">Contact Me</h1>

            {/* Contact Details Section - Now Much Wider */}
            <div className="max-w-7xl mx-auto bg-white p-14 rounded-xl shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column - Contact Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-yellow-400 inline-block pb-2">Get in Touch</h2>
                        <p className="flex items-center gap-3 text-xl text-gray-700">
                            <FaPhone className="text-yellow-500" /> +91 9268706808
                        </p>
                        <p className="flex items-center gap-3 text-xl text-gray-700">
                            <FaEnvelope className="text-yellow-500" />
                            <a href="mailto:29krishna2004@gmail.com" className="hover:text-yellow-500 transition">
                                29krishna2004@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-3 text-xl text-gray-700">
                            <FaLocationArrow className="text-yellow-500" /> Delhi
                        </p>

                        {/* Social Media Links */}
                        <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-yellow-400 inline-block pb-2">Follow Me</h2>
                        <div className="flex gap-8 text-4xl">
                            <a href="https://www.linkedin.com/in/krishnagupta29/" target="_blank" className="text-gray-700 hover:text-yellow-500 transition">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/29Krishna" target="_blank" className="text-gray-700 hover:text-yellow-500 transition">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/krishnaa_guptaaa/" target="_blank" className="text-gray-700 hover:text-yellow-500 transition">
                                <FaInstagram />
                            </a>
                        </div>

                        {/* Coding Profiles */}
                        <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-yellow-400 inline-block pb-2">Coding Profiles</h2>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://leetcode.com/u/KrishnaDev04/" target="_blank" className="bg-yellow-300 px-8 py-3 rounded-full text-gray-800 text-lg hover:bg-yellow-400 transition">
                                LeetCode
                            </a>
                            <a href="https://www.geeksforgeeks.org/user/krishnadev04/" target="_blank" className="bg-yellow-300 px-8 py-3 rounded-full text-gray-800 text-lg hover:bg-yellow-400 transition">
                                GeeksforGeeks
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 border-b-4 border-yellow-400 inline-block pb-2">Send a Message</h2>
                        <form className="flex flex-col gap-6 mt-4">
                            <input type="text" placeholder="Your Name" className="p-4 border rounded-lg w-full text-lg focus:outline-yellow-400" />
                            <input type="email" placeholder="Your Email" className="p-4 border rounded-lg w-full text-lg focus:outline-yellow-400" />
                            <textarea placeholder="Your Message" rows="5" className="p-4 border rounded-lg w-full text-lg focus:outline-yellow-400"></textarea>
                            <button type="submit" className="bg-yellow-500 text-white text-lg px-8 py-3 rounded-lg hover:bg-yellow-600 transition">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
