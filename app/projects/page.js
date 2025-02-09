import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col gap-10 p-8">
            {/* Page Title */}
            <h1 className="self-center text-5xl font-bold text-gray-800">Projects</h1>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Project 1: Emerald Courier Service System */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
                    <img src="courier.png" alt="Emerald Courier Service" className="rounded-md w-full h-48 object-cover" />
                    <h2 className="text-2xl font-semibold text-gray-800">Emerald Courier Service System</h2>
                    <p className="text-gray-600">
                        The Emerald Courier Service System is a robust and efficient
                        application developed using Python and MySQL connectivity.
                        This system is designed to streamline and automate the
                        processes associated with a courier service, ensuring a smooth
                        experience for both customers and staff members. The helpdesk
                        features a secure login system, distinct sections for customers
                        and staff, and a variety of functionalities tailored to the needs of
                        each user group
                    </p>
                    <a href="#" className="text-blue-600 hover:underline">View Project</a>
                </div>

                {/* Project 2: Chatbot for GATE 2025 */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
                    <img src="chatbot.png" alt="GATE Chatbot" className="rounded-md w-full h-48 object-cover" />
                    <h2 className="text-2xl font-semibold text-gray-800">Chatbot for GATE2025 Webiste</h2>
                    <p className="text-gray-600">
                        Developed a chatbot using IBM Watson Assistant on IBM cloud
                        during my internship with Edunet Foundation to enhance the user
                        experience on the GATE website. The chatbot provides
                        predefined options for users to select, ensuring easy access to
                        exam schedules, application procedures, eligibility criteria,
                        syllabus details, results etc. Integrated seamlessly with the
                        website for improved navigation and information retrieval.
                    </p>
                    <a href="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fau-syd.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-97e3a9bd-efac-4ce8-b29a-5ec7ddc8ebbf%3A%3A73ddfd22-8704-4eb9-a382-6f73c779e7e6&integrationID=ed827e0e-4db9-4d64-bbd8-e7f7753dbebb&region=au-syd&serviceInstanceID=97e3a9bd-efac-4ce8-b29a-5ec7ddc8ebbf" className="text-blue-600 hover:underline">View Project</a>
                </div>

                {/* Project 3: Outbreak Sense */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
                    <img src="outbreak.png" alt="Outbreak Sense" className="rounded-md w-full h-48 object-cover" />
                    <h2 className="text-2xl font-semibold text-gray-800">OutbreakSense - Machine Learning-Based Disease & Outbreak Detection System
                    </h2>
                    <p className="text-gray-600">
                        Developed a ML-powered web application
                        that predicts Diabetes, Parkinson’s, and Heart's Disease based
                        on user inputs. The system also determines whether a disease
                        outbreak is occurring in a given region based on user-provided
                        data. Implemented Random Forest, Logistic Regression, and
                        Decision Trees for accurate classification. Built an interactive
                        Streamlit-based web interface and deployed the solution on
                        Streamlit Cloud for real-time accessibility.                    </p>
                    <a href="https://outbreaksense-diseasepredictor.streamlit.app/" className="text-blue-600 hover:underline">View Project</a>
                </div>

                {/* Project 4: LockVault - Password Manager */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4">
                    <img src="lockvault.png" alt="LockVault" className="rounded-md w-full h-48 object-cover" />
                    <h2 className="text-2xl font-semibold text-gray-800">LockVault - Password Manager</h2>
                    <p className="text-gray-600">
                        LockVault is a secure and efficient password manager that helps users store, manage, and retrieve their passwords and usernames for different websites. With MongoDB as the backend, it ensures safe and organized storage of credentials, allowing users to access their login details effortlessly. Designed for convenience and security, LockVault eliminates the hassle of remembering multiple passwords while keeping data protected.
                    </p>
                    <a href="#" className="text-blue-600 hover:underline">View Project</a>
                </div>
            </div>
        </div>
    )
}

export default page
