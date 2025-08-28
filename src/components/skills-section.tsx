import { Code, Terminal, BarChart3, BookOpen } from "lucide-react";

const programmingSkills = [
  { name: "Java (Spring Boot)", percentage: 90, color: "bg-primary" },
  { name: "Python", percentage: 85, color: "bg-green-500" },
  { name: "C Programming", percentage: 80, color: "bg-blue-500" },
  { name: "HTML/CSS", percentage: 75, color: "bg-orange-500" },
];

const tools = [
  { name: "NetBeans", icon: Code },
  { name: "Turbo C++", icon: Terminal },
  { name: "Pentaho", icon: BarChart3 },
  { name: "Jupyter Notebook", icon: BookOpen },
];

const subjects = [
  { name: "PPA (Principles of Programming & Algorithm)", color: "bg-primary" },
  { name: "C Programming", color: "bg-green-600" },
  { name: "Java", color: "bg-blue-600" },
  { name: "FCET", color: "bg-purple-600" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Programming Languages</h3>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-muted">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${skill.color} h-2 rounded-full skill-bar transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Development Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex items-center">
                    <tool.icon className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-700">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Teaching Subjects</h3>
              <div className="space-y-3">
                {subjects.map((subject, index) => (
                  <span 
                    key={index}
                    className={`inline-block ${subject.color} text-white px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                  >
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
