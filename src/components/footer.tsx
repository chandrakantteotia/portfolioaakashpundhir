import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aakash Pundhir</h3>
          <p className="text-gray-400 mb-6">Assistant Professor | Technology Expert | Student Mentor</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:akashpundhir57@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+919368958474" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
              data-testid="footer-linkedin"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Aakash Pundhir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
