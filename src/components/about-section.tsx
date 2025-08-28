import { GraduationCap, Code, Users } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Teaching Excellence",
    description: "Experienced in delivering technology-driven curriculum with focus on practical applications and student engagement.",
    bgColor: "bg-blue-50",
    iconColor: "bg-primary",
  },
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Proficient in multiple programming languages including Java, Python, C, and web technologies with Spring Boot specialization.",
    bgColor: "bg-green-50",
    iconColor: "bg-green-600",
  },
  {
    icon: Users,
    title: "Student Mentorship",
    description: "Dedicated to providing support outside classrooms and fostering academic growth for struggling students.",
    bgColor: "bg-purple-50",
    iconColor: "bg-purple-600",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bgColor} rounded-xl p-8 text-center`}>
              <div className={`w-16 h-16 ${feature.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
