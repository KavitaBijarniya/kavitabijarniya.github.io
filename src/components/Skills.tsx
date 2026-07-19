import { Database, Code, BarChart2, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Analysis & Tools',
      icon: Database,
      color: 'blue',
      skills: [
        'MS SQL Server (SELECT, WHERE, JOIN, GROUP BY, Window Functions)',
        'Google Sheets',
        'Excel (Pivot Tables, VLOOKUP, XLOOKUP)',
        'Power BI',
        'Power Query',
        
      ],
    },
    // {
    //   title: 'Programming',
    //   icon: Code,
    //   color: 'green',
    //   skills: ['Python', 'Pandas', 'NumPy'],
    // },
    {
      title: 'Analytics Skills',
      icon: BarChart2,
      color: 'orange',
      skills: [
        'Data Cleaning',
        'Data Validation',
        'KPI Monitoring',
        'Exploratory Data Analysis',
        'Data Modeling',
        'Statistical Analysis',
      ],
    },
    {
      title: 'Additional Skills',
      icon: Wrench,
      color: 'purple',
      skills: [
        'Power BI Dashboards & Reports',
        'DAX Measures',
        'ChatGPT for Data Analysis',
        'Problem Solving',
        'Prompting for Data Analysis',
      
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      purple: { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into actionable business insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                    <Icon className={colors.text} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
