import React from "react";
import { FaChalkboardTeacher, FaBook, FaLaptopCode, FaUserTie, FaQuoteLeft } from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">eLearning</h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#courses" className="hover:text-blue-600">Courses</a></li>
            <li><a href="#team" className="hover:text-blue-600">Team</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-100 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Learn From The Best</h2>
            <p className="text-gray-600 mb-6">Join thousands of learners and gain new skills to improve your career. Interactive lessons, expert teachers, and real-world projects.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get Started</button>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=826&t=st=1710652051~exp=1710652651~hmac=c1f3fd8a7280c1e3c587b53c79f5c1771322e9c0d012ee4c7ff69f3b4308a11c"
              alt="Hero"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 mb-8">High-quality courses, interactive content, and top instructors.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 shadow rounded hover:shadow-lg transition">
              <FaBook className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extensive Library</h3>
              <p className="text-gray-600">Thousands of courses covering a wide range of subjects.</p>
            </div>
            <div className="p-6 shadow rounded hover:shadow-lg transition">
              <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals and subject experts.</p>
            </div>
            <div className="p-6 shadow rounded hover:shadow-lg transition">
              <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
              <p className="text-gray-600">Apply your skills through projects and quizzes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Popular Courses</h2>
          <p className="text-gray-600 mb-8">Trending courses loved by our students.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {["web", "python", "marketing"].map((course, idx) => (
              <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition">
                <img
                  src={`https://img.freepik.com/free-vector/${course}-development-banner_33099-1687.jpg?w=826`}
                  alt={course}
                  className="w-full h-52 object-cover rounded-t"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold mb-2 capitalize">{course} Course</h3>
                  <p className="text-gray-600">Comprehensive and beginner-friendly course.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">Qualified and experienced teaching professionals.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center shadow p-4 rounded hover:shadow-lg transition">
                <img
                  src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                  alt="Team"
                  className="w-28 h-28 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold">John Doe {i}</h4>
                <p className="text-sm text-gray-500">Instructor</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
          <div className="bg-white p-8 rounded shadow-lg relative">
            <FaQuoteLeft className="text-blue-600 text-3xl absolute top-6 left-6" />
            <p className="text-gray-700 italic mb-4 mt-6">"This platform has changed my life. The quality of teaching is top-notch, and I was able to land a job thanks to the skills I learned here."</p>
            <h4 className="font-bold">Priya Sharma</h4>
            <p className="text-sm text-gray-500">Web Developer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 eLearning. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
