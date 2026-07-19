import { BarChart3, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a detail-oriented Data Analyst based in Hyderabad, India, with a passion for
              uncovering meaningful insights from complex datasets. My journey in data analytics
              combines strong academic foundations in mathematics and computer science with
              hands-on experience in modern analytics tools.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With expertise in SQL, Power BI, and Excel, I specialize in transforming
              raw data into compelling visualizations and actionable recommendations. I've successfully
              analyzed datasets containing 50K+ records, developed interactive dashboards tracking
              15+ KPIs, and reduced manual reporting efforts by 30% through automation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
             My approach combines technical proficiency with business understanding 
             to transform data into meaningful insights, build effective dashboards, and support data-driven decision-making.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <BarChart3 className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Excellence</h3>
              <p className="text-gray-700">
                Maintaining &gt;98% data accuracy while processing and analyzing large-scale datasets
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Target className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Business Impact</h3>
              <p className="text-gray-700">
                Delivering insights that improve efficiency by 40% and support strategic decision-making
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <TrendingUp className="text-orange-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Growth</h3>
              <p className="text-gray-700">
                Google and IRA Skills certified with ongoing commitment to learning advanced analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
