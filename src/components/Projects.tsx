import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Project Portfolio Management Dashboard",
    description:
      "A comprehensive portfolio management dashboard designed to provide executives with full visibility over project lifecycles. The dashboard tracks project approvals, execution progress, budget utilization, and schedule performance, enabling proactive portfolio-level decision-making.",
    kpis: [
      "Schedule Performance Index (SPI)",
      "Cost Performance Index (CPI)",
      "Budget Utilization %",
      "Project Status Distribution",
      "Operational Readiness Level",
    ],
    image: "/project-manager.png",
    route: "/projects/Project_Manager",
    tags: ["Power BI", "Portfolio Management", "KPIs"],
  },
  {
    title: "Sales & Revenue Analytics Dashboard",
    description:
      "An interactive sales analytics dashboard built to evaluate revenue performance across time, products, and customer segments. It enables stakeholders to identify growth drivers, monitor profitability, and assess sales efficiency trends.",
    kpis: [
      "Total Revenue",
      "Gross Profit Margin",
      "Orders Count",
      "Return Rate %",
      "Month-over-Month Growth",
    ],
    image: "/adventure-works.png",
    route: "/projects/Adventure_Works",
    tags: ["Power BI", "Sales Analytics", "DAX"],
  },
  {
    title: "Retail Market Performance Dashboard",
    description:
      "A retail intelligence solution focused on analyzing transaction volume, geographic performance, and profitability. The dashboard supports both operational monitoring and strategic planning through comparative and trend-based insights.",
    kpis: [
      "Revenue vs Target",
      "Average Transaction Value",
      "Profit Margin %",
      "Return Rate",
      "Top Performing Regions",
    ],
    image: "/maven-market.png",
    route: "/projects/Maven_Market",
    tags: ["Power BI", "Retail Analytics", "Data Visualization"],
  },
  {
    title: "CRM & Leads Conversion Dashboard",
    description:
      "A CRM analytics dashboard designed to assess lead generation effectiveness and sales pipeline health. It provides insights into conversion efficiency, deal progression, and overall sales performance trends.",
    kpis: [
      "Leads Count",
      "Conversion Rate %",
      "Average Deal Value",
      "Pipeline Value",
      "Closed-Won Deals",
    ],
    image: "/business.png",
    route: "/projects/Business_Project",
    tags: ["Power BI", "CRM Analytics", "Business Intelligence"],
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="py-28 relative"
      style={{
        background: "linear-gradient(90deg, #0E1C26, #2A454B, #294861)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gray-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of real-world business intelligence dashboards focused
            on performance monitoring, analytical insights, and decision support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => navigate(project.route)}
              className="group cursor-pointer
                         bg-[#16252F] rounded-xl overflow-hidden
                         shadow-lg shadow-black/40
                         hover:shadow-black/70
                         transition-all duration-300
                         hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 bg-black/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4
                             transform group-hover:scale-105
                             transition-transform duration-500"
                />

                <div
                  className="absolute inset-0 bg-black/70 opacity-0
                             group-hover:opacity-100
                             transition-opacity duration-300
                             flex items-center justify-center"
                >
                  <ExternalLink className="text-gray-100" size={32} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* KPIs */}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                    Key KPIs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.kpis.map((kpi, i) => (
                      <span
                        key={i}
                        className="px-3 py-1
                                   bg-gray-700/60 text-gray-200
                                   text-xs rounded-full"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1
                                 bg-gray-600/40 text-gray-200
                                 text-xs rounded-full"
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