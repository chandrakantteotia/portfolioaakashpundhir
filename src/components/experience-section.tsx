import { CheckCircle, Star, Trophy } from "lucide-react";

const experiences = [
  {
    title: "Assistant Professor",
    company: "Sunder Deep Engineering College, Ghaziabad",
    period: "September 2023 - Present",
    status: "Current",
    statusColor: "bg-green-100 text-green-800",
    borderColor: "border-primary",
    responsibilities: [
      "Created materials and exercises to illustrate application of course concepts",
      "Provided support to struggling students outside classrooms",
      "Contributed to campus activities to promote positive university image",
      "Revised course objectives, course materials, instructional and assessment strategies for C courses"
    ],
    roles: [
      "ERP Coordinator (Okie Dokie)",
      "Exam Coordinator", 
      "Admission Counselor",
      "Awarded by VC for 25+ Admissions"
    ]
  },
  {
    title: "Java Trainee",
    company: "Stellar Informatics Pvt Ltd, Noida Sec-62",
    period: "March 2023 - September 2023",
    borderColor: "border-gray-400",
    responsibilities: [
      "Participated in structured training program for Java programming, Angular, and MySQL",
      "Collaborated with senior developers on real-world projects",
      "Created and maintained documentation for code and processes"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-l-4 ${experience.borderColor}`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{experience.title}</h3>
                  <p className="text-lg text-primary font-medium">{experience.company}</p>
                </div>
                <div className="text-right">
                  {experience.status && (
                    <span className={`${experience.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                      {experience.status}
                    </span>
                  )}
                  <p className="text-muted mt-1">{experience.period}</p>
                </div>
              </div>
              
              <div className={experience.roles ? "grid md:grid-cols-2 gap-6" : ""}>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2 text-muted">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {experience.roles && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Additional Roles:</h4>
                    <ul className="space-y-2 text-muted">
                      {experience.roles.map((role, idx) => (
                        <li key={idx} className="flex items-start">
                          {idx === experience.roles!.length - 1 ? (
                            <Trophy className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          ) : (
                            <Star className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          )}
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
