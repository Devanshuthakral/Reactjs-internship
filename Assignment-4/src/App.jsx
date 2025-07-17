import React from "react";
import {
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
  FaProjectDiagram,
  FaQuoteLeft,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">eLearning</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#courses" className="hover:text-blue-300">Courses</a>
            <a href="#team" className="hover:text-blue-300">Team</a>
            <a href="#testimonials" className="hover:text-blue-300">Testimonials</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="bg-cover bg-center min-h-screen flex items-center justify-center pt-20" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/young-smiling-student-wearing-backpack-holding-notebooks-showing-thumb-up-standing-yellow-background_141793-125379.jpg")' }}>
        <div className="text-center bg-white bg-opacity-90 p-10 rounded-xl shadow-xl">
          <h2 className="text-4xl font-bold mb-4">Learn from the Best</h2>
          <p className="text-gray-700 mb-6">Explore our expertly crafted courses to enhance your skills.</p>
          <a href="#courses" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Explore Courses</a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div><FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-2" /><h3 className="font-semibold">Expert Mentors</h3></div>
          <div><FaBook className="text-5xl text-blue-600 mx-auto mb-2" /><h3 className="font-semibold">Structured Learning</h3></div>
          <div><FaLaptopCode className="text-5xl text-blue-600 mx-auto mb-2" /><h3 className="font-semibold">Practical Projects</h3></div>
          <div><FaProjectDiagram className="text-5xl text-blue-600 mx-auto mb-2" /><h3 className="font-semibold">Career Growth</h3></div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700">eLearning is a platform dedicated to delivering top-notch educational content for students and professionals. Our mission is to make learning accessible, flexible, and effective for everyone.</p>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://img.freepik.com/free-photo/teacher-classroom-teaching-young-children_53876-143838.jpg" alt="Course 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-600">Learn HTML, CSS, JS, and frameworks like React.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://img.freepik.com/free-photo/hand-pointing-chart-laptop-screen_23-2147887473.jpg" alt="Course 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Data Science</h3>
            <p className="text-gray-600">Explore Python, Machine Learning, and AI tools.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://img.freepik.com/free-photo/young-african-american-woman-sitting-table-with-laptop_1303-17443.jpg" alt="Course 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Digital Marketing</h3>
            <p className="text-gray-600">Master SEO, social media marketing, and analytics.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><img src="https://img.freepik.com/free-photo/portrait-smiling-businessman_23-2148851466.jpg" alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4" /><h3 className="font-semibold">John Doe</h3><p className="text-gray-500">Lead Instructor</p></div>
          <div><img src="https://img.freepik.com/free-photo/portrait-smiling-businesswoman_23-2148851467.jpg" alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4" /><h3 className="font-semibold">Jane Smith</h3><p className="text-gray-500">Content Head</p></div>
          <div><img src="https://img.freepik.com/free-photo/handsome-man-with-arms-crossed_23-2147634942.jpg" alt="Team Member" className="w-40 h-40 mx-auto rounded-full mb-4" /><h3 className="font-semibold">Bob Martin</h3><p className="text-gray-500">Marketing Lead</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FaQuoteLeft className="text-blue-600 text-3xl mb-4 mx-auto" />
            <p className="text-gray-700 italic mb-4">"The platform helped me improve my skills and land my dream job. The courses are well-structured and the instructors are great."</p>
            <h3 className="font-semibold">Aarav Sharma</h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">Feel free to reach out to us for any queries or collaboration.</p>
        <a href="mailto:info@elearning.com" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Email Us</a>
      </section>

      {/* Footer Section (New One Based on Your Screenshot) */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="flex items-center gap-2"><FaChevronRight /> About Us</a></li>
              <li><a href="#contact" className="flex items-center gap-2"><FaChevronRight /> Contact Us</a></li>
              <li><a href="#" className="flex items-center gap-2"><FaChevronRight /> Privacy Policy</a></li>
              <li><a href="#" className="flex items-center gap-2"><FaChevronRight /> Terms & Condition</a></li>
              <li><a href="#" className="flex items-center gap-2"><FaChevronRight /> FAQs & Help</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Street, New York, USA</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +012 345 67890</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@example.com</p>
            <div className="flex space-x-4 mt-4">
<a href="https://x.com/home" target="_blank"> 
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
</a>
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
<a href="https://www.linkedin.com/in/devanshuthakral/" target="_blank"> 
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <img key={i} src="https://img.freepik.com/free-photo/young-smiling-student-wearing-backpack-holding-notebooks-showing-thumb-up-standing-yellow-background_141793-125379.jpg" alt="Gallery" className="w-20 h-16 object-cover rounded" />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">This is a Newsletter</p>
            <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded mb-2 text-black" />
            <button className="w-full bg-cyan-400 text-white py-2 rounded">SignUp</button>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>&copy; Your Site Name, All Right Reserved. Designed By HTML Codex</p>
          <p>Distributed By ThemeWagon</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
