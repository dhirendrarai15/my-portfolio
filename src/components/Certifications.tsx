import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    issueDate: 'June 2023',
    credentialId: 'AWS-SA-12345',
    credentialURL: 'https://www.credly.com/aws-cert',
    description: 'Expertise in designing distributed systems and deploying applications on AWS.',
    skills: ['Cloud Architecture', 'AWS Services', 'Distributed Systems']
  },
  {
    name: 'MongoDB Developer Certification',
    organization: 'MongoDB University',
    issueDate: 'March 2023',
    credentialId: 'MDB-DEV-789',
    credentialURL: 'https://university.mongodb.com/certification',
    description: 'Advanced knowledge in building applications with MongoDB.',
    skills: ['NoSQL', 'Database Design', 'Data Modeling']
  },
  {
    name: 'React Developer Certification',
    organization: 'Meta',
    issueDate: 'January 2023',
    credentialId: 'META-REACT-456',
    credentialURL: 'https://www.coursera.org/meta-react-cert',
    description: 'Proficiency in building scalable applications with React.',
    skills: ['React.js', 'Frontend Development', 'State Management']
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  <p className="text-gray-600">{cert.organization}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{cert.description}</p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Issued:</span>
                  <span className="ml-2">{cert.issueDate}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Credential ID:</span>
                  <span className="ml-2">{cert.credentialId}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mt-4"
                >
                  <span className="mr-2">View Credential</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
