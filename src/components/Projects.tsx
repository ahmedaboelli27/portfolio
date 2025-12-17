import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sales Performance Dashboard',
    description: 'Interactive dashboard analyzing sales trends across multiple regions with real-time data visualization and predictive analytics.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Tableau', 'SQL'],
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Machine learning model to segment customers based on behavior patterns, improving marketing campaign effectiveness by 40%.',
    image: 'https://images.pexels.com/photos/7735675/pexels-photo-7735675.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Machine Learning', 'Clustering'],
  },
  {
    title: 'Financial Forecasting Model',
    description: 'Time series analysis and forecasting model for revenue prediction with 95% accuracy, supporting strategic planning.',
    image: 'https://images.pexels.com/photos/7947661/pexels-photo-7947661.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['R', 'Time Series', 'Statistics'],
  },
  {
    title: 'Market Research Analytics',
    description: 'Comprehensive market analysis combining survey data, social media sentiment, and competitor intelligence.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Excel', 'Power BI', 'Data Mining'],
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Data-driven approach to optimize inventory levels and reduce costs, resulting in 25% efficiency improvement.',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Optimization', 'Analytics'],
  },
  {
    title: 'Healthcare Data Analysis',
    description: 'Patient data analysis to identify treatment patterns and improve healthcare outcomes through predictive modeling.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SQL', 'Visualization', 'Healthcare'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a selection of my recent data analysis projects showcasing various
            techniques and tools in the field of data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
