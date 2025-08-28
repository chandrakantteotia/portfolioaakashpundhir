import { FaPython, FaJava } from "react-icons/fa";
import { Palette } from "lucide-react";

const certifications = [
  {
    name: "Python Certification",
    provider: "All Soft Solution",
    icon: FaPython,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    name: "Java Certification", 
    provider: "NPTEL",
    icon: FaJava,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    name: "Web Designing",
    provider: "Agile Pvt. Ltd.",
    icon: Palette,
    bgColor: "bg-purple-100", 
    iconColor: "text-purple-600"
  }
];

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`w-16 h-16 ${cert.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <cert.icon className={`text-3xl ${cert.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-muted text-sm">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
