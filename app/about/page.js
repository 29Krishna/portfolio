import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col gap-10 p-8">
            {/* Heading */}
            <h1 className="self-center text-5xl font-bold text-gray-800">About Me</h1>

            {/* Description */}
            <div className="desc max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
                I am Krishna, a passionate Web Developer, AI Enthusiast, and Team Player who loves building creative and impactful digital solutions. With a strong interest in Full-Stack Development and Machine Learning, I enjoy working on interactive, user-friendly applications using technologies like React, Next.js, and Python. I thrive in collaborative environments, enjoy interacting with new people, and believe that teamwork drives innovation.
                <br />
                Beyond coding, I have a keen interest in traveling, sports, and extracurricular activities, which help me stay active, creative, and well-rounded. Exploring new places and meeting diverse people fuel my curiosity and broaden my perspective. Always eager to learn and take on new challenges, I am on a journey to explore the limitless possibilities of technology, teamwork, and new experiences.
            </div>

            {/* Education Section */}
            <div className="education max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-4 border-yellow-400 inline-block">Education</h2>
                <div className="flex flex-col gap-6">
                    {/* Senior Secondary */}
                    <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
                        <img src="school.jpg" alt="School" className="w-24 h-24 object-cover rounded-lg border" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-700">Senior Secondary</h3>
                            <p className="text-lg text-gray-600">Navy Children School, 2022</p>
                        </div>
                    </div>

                    {/* Bachelor's Degree */}
                    <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
                        <img src="cllg.jpg" alt="College" className="w-24 h-24 object-cover rounded-lg border" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-700">B.Tech in Information Technology</h3>
                            <p className="text-lg text-gray-600">Maharaja Agrasen Institute of Technology, 2022 - Present</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skills max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 border-b-4 border-yellow-400 inline-block">Skills</h2>
                <table className="w-full border-collapse border border-gray-300 text-lg">
                    <thead>
                        <tr className="bg-yellow-300">
                            <th className="border border-gray-400 px-4 py-2">Programming</th>
                            <th className="border border-gray-400 px-4 py-2">Web Development</th>
                            <th className="border border-gray-400 px-4 py-2">Tools</th>
                            <th className="border border-gray-400 px-4 py-2">Database Management</th>
                            <th className="border border-gray-400 px-4 py-2">Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center bg-white">
                            <td className="border border-gray-400 px-4 py-2">C, C++, Python, Java</td>
                            <td className="border border-gray-400 px-4 py-2">HTML, CSS, JavaScript, React.js, Next.js, Tailwind, Express.js, Node.js</td>
                            <td className="border border-gray-400 px-4 py-2">Github, VScode, IBM Cloud, Streamlit Cloud</td>
                            <td className="border border-gray-400 px-4 py-2">MySQL, MongoDB</td>
                            <td className="border border-gray-400 px-4 py-2">Artificial Intelligence, DSA, Basic ML and DL(Scikit & Tensorflow Python), Data Analysis and Pre-processing</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page
