import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center text-center p-8">
      {/* Name & Title (Properly Positioned Below Navbar) */}
      <div> {/* Adjust margin to push below navbar */}
        <h1 className="text-6xl font-extrabold text-gray-900">Krishna</h1>
        <h2 className="text-3xl text-yellow-600 font-semibold mt-2">Web Developer | AI Enthusiast | Coder</h2>
      </div>

      {/* Profile Picture in Center */}
      <div className="w-64 h-64 md:w-72 md:h-72 border-8 border-yellow-400 rounded-full overflow-hidden shadow-xl mt-12">
        <img className="w-full h-full object-cover" src="dp.png" alt="Profile" />
      </div>

      {/* Catchy Tech Enthusiast Phrase Below */}
      <p className="mt-8 max-w-3xl text-2xl text-gray-700 leading-relaxed font-medium">
        Coding my way through AI, Web Dev, and everything in between! Passion for tech fuels me.  
      </p>
    </div>
  );
}
