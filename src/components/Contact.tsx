import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setResult("Sending...");

  const formData = new FormData(e.target);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Message sent successfully ✅");
    e.target.reset();
  } else {
    setResult("Something went wrong ❌");
  }
};
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or data analytics challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <a
              href="mailto:ckavita619@gmail.com"
              className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
            >
              <div className="bg-blue-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-700">ckavita619@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919177032834"
              className="flex items-start p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
            >
              <div className="bg-green-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-700">+91-9177032834</p>
              </div>
            </a>

            <div className="flex items-start p-4 bg-orange-50 rounded-lg">
              <div className="bg-orange-600 p-3 rounded-lg mr-4">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-700">Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kavita-bijarniya-249b58260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/KavitaBijarniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

            <form 
              onSubmit={handleSubmit} className="space-y-4"
            >
              <input type="checkbox" name="botcheck" style={{display:"none"}} />
              <input type="hidden" name="access_key" value="ec8faef1-3e33-4c7f-b5cc-210c4667a885" />
              <input type="hidden" name="subject" value="New Message from Portfolio" />
              <input type="hidden" name="from_name" value="Kavita Portfolio" />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
              <p className="text-sm text-gray-700 mt-2">{result}</p>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;