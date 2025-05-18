import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen  flex flex-col gap-10 p-8">
      {/* Page Title */}
      <h1 className="self-center text-5xl font-bold text-gray-800">Experience</h1>

      {/* Experience List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8">

        {/* Experience 1: MERN Intern */}
        <div className="bg-yellow-100 shadow-lg rounded-lg p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-800">MERN Intern</h2>
          <p className="text-lg text-gray-600">Edunet Foundation | Feb 10, 2025 – March 21, 2025</p>
          <h3 className="text-xl font-medium text-gray-700">Worked On:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Developed full-stack auction platform using MERN stack</li>
            <li>Implemented secure user authentication using JWT tokens</li>
            <li>Built features for posting auctions, placing bids, and tracking wins</li>
            <li>Integrated responsive UI with React Router for smooth navigation</li>
          </ul>
          <h3 className="text-xl font-medium text-gray-700">Skills Gained:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">MongoDB</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Express.js</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">React.js</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Node.js</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Bootstrap</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">JWT</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Bcrypt</span>
          </div>
        </div>

        {/* Experience 2: AI Intern */}
        <div className="bg-green-100 shadow-lg rounded-lg p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-800">AI Intern</h2>
          <p className="text-lg text-gray-600">Edunet Foundation | Jan, 2025 – Feb, 2025</p>
          <h3 className="text-xl font-medium text-gray-700">Worked On:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Data Analysis using Pandas and Numpy</li>
            <li>Model Training using different ML Models(Used scikit learn)</li>
            <li>Developed Outbreak Sense</li>
            <li>Deployment on Streamlit CLoud</li>
          </ul>
          <h3 className="text-xl font-medium text-gray-700">Skills Gained:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Pandas</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Numpy</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Jupyter</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Data Analysis</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Scikit Learn</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Basic ML Models</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Model Training</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Deployment</span>
          </div>
        </div>

        {/* Experience 3: AI/Cloud Intern */}
        <div className="bg-blue-100 shadow-lg rounded-lg p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-gray-800">AI/Cloud Intern</h2>
          <p className="text-lg text-gray-600">Edunet Foundation | July 8, 2024 – Aug 5, 2024</p>
          <h3 className="text-xl font-medium text-gray-700">Worked On:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Developed AI models for predictive analysis</li>
            <li>Performed Data analysis</li>
            <li>Developed Chatbot for GATE2025</li>
          </ul>
          <h3 className="text-xl font-medium text-gray-700">Skills Gained:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Cloud Computing through IBM cloud</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Data analysis</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">IBM Watson</span>
            <span className="bg-yellow-300 px-3 py-1 rounded-full text-gray-800 text-sm">Chatbot Development</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
