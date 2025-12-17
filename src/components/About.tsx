import { BarChart3, Database, TrendingUp, FileSpreadsheet } from 'lucide-react';

const skills = [
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Creating compelling visual stories from complex datasets using modern tools',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Expert in SQL and database optimization for efficient data retrieval',
  },
  {
    icon: TrendingUp,
    title: 'Statistical Analysis',
    description: 'Advanced statistical methods to uncover patterns and predict trends',
  },
  {
    icon: FileSpreadsheet,
    title: 'Business Intelligence',
    description: 'Transforming raw data into actionable business insights and reports',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Data Analyst with expertise in transforming complex data into clear,
            actionable insights. I specialize in data visualization, statistical analysis,
            and business intelligence to help organizations make data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
