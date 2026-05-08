import {
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Database,
  Lightbulb,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Project Portfolio Management Dashboard",
    category: "Executive Project Analytics",
    description:
      "A management dashboard designed to monitor multiple projects in one place, with a clear focus on progress, budget usage, schedule performance, status distribution, and operational readiness.",
    goal: "Help managers identify delayed, over-budget, or high-risk projects before they affect delivery.",
    outcome:
      "Created a clearer portfolio-level view that supports faster project comparison and better follow-up decisions.",
    source: "Project portfolio and operational tracking data",
    kpis: [
      "Schedule Performance",
      "Cost Performance",
      "Budget Utilization",
      "Project Status",
    ],
    image: "/project-manager.png",
    route: "/projects/Project_Manager",
    tools: ["Power BI", "DAX", "Project KPIs"],
  },
  {
    title: "Sales & Revenue Analytics Dashboard",
    category: "Sales Performance Analysis",
    description:
      "An interactive sales dashboard focused on revenue, gross profit, order volume, return rate, and monthly growth trends to understand how business performance changes over time.",
    goal: "Track sales performance, identify growth drivers, and highlight weak areas that need attention.",
    outcome:
      "Turned sales data into a practical view of revenue performance, profitability, and customer purchasing patterns.",
    source: "AdventureWorks sales and returns data",
    kpis: ["Total Revenue", "Gross Profit", "Orders", "Return Rate"],
    image: "/adventure-works.png",
    route: "/projects/Adventure_Works",
    tools: ["Power BI", "DAX", "Sales Analytics"],
  },
  {
    title: "Retail Market Performance Dashboard",
    category: "Retail & Regional Insights",
    description:
      "A retail dashboard built to analyze transactions, revenue against target, profit margin, returns, and regional results using a clean visual reporting approach.",
    goal: "Compare retail performance across regions, products, and targets in a simple decision-friendly layout.",
    outcome:
      "Made it easier to identify strong regions, underperforming areas, and gaps between actual results and targets.",
    source: "Maven Market retail transaction data",
    kpis: ["Revenue vs Target", "Profit Margin", "Return Rate", "Top Regions"],
    image: "/maven-market.png",
    route: "/projects/Maven_Market",
    tools: ["Power BI", "Retail Analytics", "Data Modeling"],
  },
  {
    title: "CRM & Leads Conversion Dashboard",
    category: "CRM Pipeline Analytics",
    description:
      "A CRM analytics dashboard created to track lead generation, conversion rate, average deal value, pipeline value, and closed-won opportunities across the sales process.",
    goal: "Understand how leads move through the pipeline and where conversion performance can be improved.",
    outcome:
      "Provided a cleaner view of pipeline health, conversion efficiency, and deal performance for sales follow-up.",
    source: "CRM leads, opportunities, and deal tracking data",
    kpis: ["Leads Count", "Conversion Rate", "Pipeline Value", "Closed-Won"],
    image: "/business.png",
    route: "/projects/Business_Project",
    tools: ["Power BI", "CRM Analytics", "Pipeline Analysis"],
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const details = [
    {
      icon: Lightbulb,
      label: "Project Focus",
      value: activeProject.description,
    },
    {
      icon: Target,
      label: "Business Goal",
      value: activeProject.goal,
    },
    {
      icon: TrendingUp,
      label: "Outcome",
      value: activeProject.outcome,
    },
    {
      icon: Database,
      label: "Data Source",
      value: activeProject.source,
    },
    {
      icon: Wrench,
      label: "Tools Used",
      value: activeProject.tools.join(" • "),
    },
  ];

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-[0.5px]"
        style={{
          backgroundImage: "url('/project_background.jpeg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#07131C]/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#0E1C26]/70 to-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-white/10 border border-white/15 text-gray-200
                       text-sm font-medium mb-5 backdrop-blur-md"
          >
            <BarChart3 size={18} />
            Interactive Dashboard Case Studies
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>

          <div className="w-24 h-1 bg-blue-300 mx-auto mb-6"></div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore each dashboard as a practical business case study, with its
            focus, KPIs, tools, and outcome presented in an interactive visual
            layout.
          </p>
        </div>

        {/* Interactive Infographic Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* Main Circle */}
          <div className="relative flex justify-center">
            <button
              onClick={previousProject}
              className="absolute -top-8 left-1/2 -translate-x-1/2 z-30
                         w-14 h-14 rounded-full bg-white text-gray-900
                         flex items-center justify-center
                         shadow-xl shadow-black/40
                         hover:scale-110 transition-transform duration-300"
              aria-label="Previous project"
            >
              <ChevronUp size={30} />
            </button>

            <div
              key={activeProject.title}
              className="relative w-[340px] h-[340px]
                         sm:w-[460px] sm:h-[460px]
                         lg:w-[560px] lg:h-[560px]
                         rounded-full border border-blue-200/40
                         bg-white/5 backdrop-blur-xl
                         shadow-[0_0_60px_rgba(80,150,255,0.25)]
                         flex items-center justify-center
                         animate-project-switch"
            >
              {/* Outer rings */}
              <div className="absolute inset-4 rounded-full border border-white/10"></div>
              <div className="absolute inset-10 rounded-full border border-blue-300/20"></div>

              {/* Project number */}
              <div
                className="absolute top-12 left-1/2 -translate-x-1/2
                           px-5 py-2 rounded-full bg-black/35
                           border border-white/15 text-blue-100 text-sm
                           backdrop-blur-md"
              >
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="relative z-10 w-[82%] text-center">
                <p className="text-blue-100/80 text-sm font-medium mb-2">
                  {activeProject.category}
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeProject.title}
                </h3>

                <div
                  className="relative rounded-2xl overflow-hidden
                             bg-black/40 border border-white/15
                             shadow-2xl shadow-black/50 mb-5"
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-[150px] sm:h-[210px] object-contain p-4"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0
                               bg-black/65 backdrop-blur-md
                               border-t border-white/10
                               px-3 py-3"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {activeProject.kpis.map((kpi, index) => (
                        <div key={index} className="text-center">
                          <p className="text-[10px] sm:text-xs text-gray-300 leading-tight">
                            {kpi}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate(activeProject.route)}
                  className="inline-flex items-center gap-2 px-6 py-3
                             rounded-full bg-blue-500/90 text-white
                             font-medium shadow-lg shadow-blue-900/40
                             hover:bg-blue-400 hover:gap-4
                             transition-all duration-300"
                >
                  View Full Project
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            <button
              onClick={nextProject}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30
                         w-14 h-14 rounded-full bg-white text-gray-900
                         flex items-center justify-center
                         shadow-xl shadow-black/40
                         hover:scale-110 transition-transform duration-300"
              aria-label="Next project"
            >
              <ChevronDown size={30} />
            </button>
          </div>

          {/* Branch Details */}
          <div
            key={`${activeProject.title}-details`}
            className="relative animate-details-switch"
          >
            <div className="hidden xl:block absolute left-[-80px] top-10 bottom-10 w-px bg-white/25"></div>

            <div className="space-y-6">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-5 group"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {/* Connector */}
                  <div className="hidden xl:block absolute -left-[80px] top-8 w-20 h-px bg-white/25"></div>
                  <div className="hidden xl:block absolute -left-[85px] top-[27px] w-3 h-3 rounded-full bg-white border border-blue-200"></div>

                  {/* Circle Icon */}
                  <div
                    className="w-16 h-16 min-w-16 rounded-full
                               bg-white/10 backdrop-blur-lg
                               border border-white/20
                               flex items-center justify-center
                               shadow-lg shadow-black/30
                               group-hover:bg-white group-hover:scale-110
                               transition-all duration-300"
                  >
                    <item.icon
                      className="text-gray-100 group-hover:text-gray-900 transition-colors duration-300"
                      size={28}
                    />
                  </div>

                  {/* Detail Card */}
                  <div
                    className="flex-1 bg-black/35 backdrop-blur-md
                               border border-white/10 rounded-2xl
                               p-5 shadow-lg shadow-black/30
                               group-hover:bg-white/10
                               transition-all duration-300"
                  >
                    <p className="text-white font-semibold mb-2">
                      {item.label}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.value}
                    </p>
                    <div className="w-10 h-0.5 bg-blue-300 mt-4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Selector */}
        <div
          className="mt-20 bg-black/35 backdrop-blur-xl border border-white/10
                     rounded-3xl p-5 shadow-2xl shadow-black/40"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left rounded-2xl p-3 border transition-all duration-300 ${activeIndex === index
                  ? "bg-white/15 border-blue-300 shadow-lg shadow-blue-900/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-24 object-contain rounded-xl bg-black/30 p-2 mb-3"
                />

                <div className="flex items-start gap-3">
                  <span className="text-blue-300 font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-200 text-sm font-medium leading-snug">
                    {project.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes projectSwitch {
            0% {
              opacity: 0;
              transform: scale(0.92) rotate(-2deg);
              filter: blur(8px);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0deg);
              filter: blur(0);
            }
          }

          @keyframes detailsSwitch {
            0% {
              opacity: 0;
              transform: translateX(35px);
              filter: blur(6px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }

          .animate-project-switch {
            animation: projectSwitch 0.55s ease both;
          }

          .animate-details-switch {
            animation: detailsSwitch 0.55s ease both;
          }
        `}
      </style>
    </section>
  );
}