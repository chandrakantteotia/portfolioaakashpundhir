const educationData = [
  {
    degree: "Master of Technology (CSE)",
    institution: "Vishveshwarya Group of Institutions, Dadri",
    affiliation: "Affiliated with AKTU University, Lucknow",
    status: "Pursuing",
    statusColor: "bg-yellow-100 text-yellow-800",
    bgColor: "bg-blue-50",
    borderColor: "border-primary"
  },
  {
    degree: "Master in Computer Application (MCA)",
    institution: "ABES Engineering College, Ghaziabad",
    affiliation: "Affiliated with AKTU University, Lucknow",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    bgColor: "bg-green-50",
    borderColor: "border-green-500"
  },
  {
    degree: "Bachelor in Computer Application (BCA)",
    institution: "IPEM College, Ghaziabad",
    affiliation: "Affiliated with CCSU University, Meerut",
    status: "Completed",
    statusColor: "bg-purple-100 text-purple-800",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-500"
  }
];

const schoolEducation = [
  {
    level: "12th Grade",
    board: "CBSE Board (2018)"
  },
  {
    level: "10th Grade", 
    board: "CBSE Board (2016)"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div key={index} className={`${education.bgColor} rounded-xl p-8 border-l-4 ${education.borderColor}`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{education.degree}</h3>
                  <p className="text-gray-700 font-medium">{education.institution}</p>
                  <p className="text-muted text-sm">{education.affiliation}</p>
                </div>
                <span className={`${education.statusColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {education.status}
                </span>
              </div>
            </div>
          ))}
          
          <div className="grid md:grid-cols-2 gap-6">
            {schoolEducation.map((school, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-500">
                <h3 className="font-bold text-gray-900">{school.level}</h3>
                <p className="text-gray-700">{school.board}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
