import {
  BarChart3,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Languages,
  TrendingUp,
} from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Data Visualization & BI",
    description:
      "Designing interactive dashboards and KPI-driven reports using Power BI, DAX, Power Query, and Power Pivot to communicate insights clearly.",
  },
  {
    icon: Database,
    title: "Databases & SQL",
    description:
      "Strong knowledge of SQL including joins, aggregations, CTEs, and query optimization to efficiently retrieve and analyze data.",
  },
  {
    icon: TrendingUp,
    title: "Analytical & Statistical Thinking",
    description:
      "Applying analytical techniques to identify trends, measure performance, analyze profitability, and support forecasting decisions.",
  },
  {
    icon: FileSpreadsheet,
    title: "Data Analysis & Excel",
    description:
      "Advanced Excel skills for data cleaning, transformation, modeling, and building structured analytical workflows.",
  },
];

const tools = [
  "Power BI",
  "DAX",
  "Power Query",
  "Power Pivot",
  "SQL",
  "Python",
  "Excel",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "ETL",
  "Data Modeling",
  "KPI Reporting",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #0E1C26, #2A454B, #294861)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entry-level Data Analyst with strong hands-on experience in building
            interactive dashboards and extracting actionable business insights.
            I specialize in transforming raw data into meaningful KPIs using
            Power BI, Excel, SQL, and Python, with a solid understanding of data
            modeling, ETL workflows, and business performance metrics.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#16252F] p-6 rounded-xl
                         shadow-lg shadow-black/40
                         hover:shadow-black/60
                         transition-all duration-300
                         hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gray-700 rounded-lg
                              flex items-center justify-center mb-5">
                <skill.icon className="text-gray-200" size={28} />
              </div>

              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                {skill.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools – Animated Marquee */}
        <div className="mb-28">
          <h3 className="text-2xl font-semibold text-center text-gray-100 mb-10">
            Tools & Technologies
          </h3>

          <div className="relative w-full overflow-hidden">
            {/* Gradient fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0E1C26] to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#294861] to-transparent z-10"></div>

            {/* Marquee */}
            <div className="flex gap-4 w-max animate-marquee">
              {[...tools, ...tools].map((tool, index) => (
                <span
                  key={index}
                  className="px-5 py-2 text-sm font-medium
                             bg-[#16252F] text-gray-200
                             rounded-full shadow
                             whitespace-nowrap
                             hover:bg-gray-200 hover:text-gray-900
                             transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Education */}
          <div className="bg-[#16252F] p-6 rounded-xl shadow-lg shadow-black/40">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-gray-200" />
              <h3 className="text-xl font-semibold text-gray-100">
                Education
              </h3>
            </div>
            <p className="text-gray-200 font-medium">
              Bachelor of Law (LL.B)
            </p>
            <p className="text-gray-400 text-sm">
              Mansoura University – Mansoura, Egypt
            </p>
          </div>

          {/* Languages */}
          <div className="bg-[#16252F] p-6 rounded-xl shadow-lg shadow-black/40">
            <div className="flex items-center gap-3 mb-4">
              <Languages className="text-gray-200" />
              <h3 className="text-xl font-semibold text-gray-100">
                Languages
              </h3>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <span className="font-medium text-gray-100">Arabic:</span> Native
              </li>
              <li>
                <span className="font-medium text-gray-100">English:</span> Conversational
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
