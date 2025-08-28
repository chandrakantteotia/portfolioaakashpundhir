import { Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Students Management System",
    technology: "Python",
    icon: Users,
    description: "A comprehensive desktop application designed to manage student data efficiently. This system allows institutions to store, retrieve, and manipulate student information as per requirements, replacing traditional paper-based management methods.",
    tags: ["Desktop App", "Data Management"],
    tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800"],
    bgColor: "bg-blue-50",
    iconBg: "bg-primary",
    buttonColor: "text-primary hover:text-blue-800"
  },
  {
    title: "Super Workers",
    technology: "Java, JSP, HTML, CSS",
    icon: Shield,
    description: "An intelligent face recognition system that registers members with or without masks. When a person appears in front of the camera, the system recognizes them and provides real-time feedback about mask compliance.",
    tags: ["Face Recognition", "AI/ML"],
    tagColors: ["bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"],
    bgColor: "bg-green-50",
    iconBg: "bg-green-600",
    buttonColor: "text-green-600 hover:text-green-800"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`${project.bgColor} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${project.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center mt-1">
                    <div className="w-3 h-3 bg-current rounded-full mr-2 opacity-60"></div>
                    <span className="text-sm text-muted">{project.technology}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`${project.tagColors[tagIndex]} px-2 py-1 rounded text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className={`${project.buttonColor} font-medium p-0 h-auto`}
                  data-testid={`button-project-${index}`}
                >
                  View Details 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
