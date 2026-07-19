import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Analyst Intern</h3>
                <div className="flex items-center text-blue-600 font-semibold mb-2">
                  <Briefcase size={18} className="mr-2" />
                  Unified Mentor Private Limited
                </div>
              </div>
              <div className="mt-4 md:mt-0 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-2" />
                  Sep 2025 - Dec 2025
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={18} className="mr-2" />
                  Remote
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Collected, cleaned, and organized datasets containing <strong>50K+ records</strong> from
                  SQL sources using Power Query, ensuring <strong>&gt;98% data accuracy</strong>
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Analyzed datasets using SQL joins and aggregations to identify <strong>10+ key trends
                  and anomalies</strong> supporting business decision-making
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Developed <strong>3+ interactive Power BI dashboards</strong> with <strong>15+ KPIs</strong> to
                  support sales, supplier, and customer performance tracking
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Built advanced DAX measures that reduced manual reporting effort by <strong>30%</strong> and
                  improved reporting turnaround time
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-green-600 mt-1 mr-3 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  Analyzed business datasets using SQL queries, joins, 
                  and aggregations to identify trends and generate insights for dashboard reporting
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-bold text-gray-900">Postgraduate Diploma in Data Analytics</h4>
                <p className="text-gray-700">St. Ann's College for Women</p>
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <Calendar size={16} className="mr-2" />
                  Sep 2022 - Sep 2023
                  <MapPin size={16} className="ml-4 mr-2" />
                  Hyderabad, India
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-bold text-gray-900">Bachelor of Science</h4>
                <p className="text-gray-700">Mathematics, Physics and Computer Science</p>
                <p className="text-gray-700">Maitreyi Degree College for Women</p>
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <Calendar size={16} className="mr-2" />
                  Aug 2019 - Jul 2022
                  <MapPin size={16} className="ml-4 mr-2" />
                  Hyderabad, India
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="text-green-600 mr-3" size={20} />
                <span><strong>Google Data Analytics Professional Certificate</strong> - Coursera (Nov 2023)</span>
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="text-green-600 mr-3" size={20} />
                <span><strong>Advanced Certification in Data Analytics</strong> - IRA Skills (Jun 2025)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
