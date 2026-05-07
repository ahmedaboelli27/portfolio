import {
  BarChart3,
  BrainCircuit,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Languages,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type CardItem = {
  title: string;
  icon: any;
  description: string;
};

const leftItems: CardItem[] = [
  {
    title: "Dashboards & BI",
    icon: BarChart3,
    description:
      "Building clear Power BI dashboards that turn business questions into simple, actionable visuals and KPIs.",
  },
  {
    title: "SQL & Data Prep",
    icon: Database,
    description:
      "Cleaning, joining, and preparing raw data so it becomes reliable and ready for analysis or reporting.",
  },
  {
    title: "Excel Workflows",
    icon: FileSpreadsheet,
    description:
      "Using Excel for validation, pivot analysis, calculations, and structured reporting before final delivery.",
  },
];

const rightItems: CardItem[] = [
  {
    title: "Business Analysis",
    icon: TrendingUp,
    description:
      "Looking beyond numbers to explain results, identify patterns, and connect findings to business decisions.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Bachelor of Law (LL.B) — Mansoura University, a background that strengthened structured thinking and attention to detail.",
  },
  {
    title: "Languages",
    icon: Languages,
    description:
      "Arabic: Native | English: Conversational — clear communication is an important part of analytical work.",
  },
];

const tools = [
  "Power BI",
  "DAX",
  "Power Query",
  "SQL",
  "Python",
  "Excel",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "ETL",
  "KPI Reporting",
  "Data Modeling",
];

function RectCard({ item }: { item: CardItem }) {
  const Icon = item.icon;
  return (
    <div className="relative w-full max-w-[276px] mx-auto">
      <div className="relative bg-[rgba(15,30,40,0.78)] rounded-xl border border-white/10 shadow-[inset_0_0_8px_rgba(255,255,255,0.15),0_12px_25px_rgba(0,0,0,0.25)] p-6 transition-transform duration-500 hover:-translate-y-1.5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center shadow-[inset_0_0_6px_rgba(255,255,255,0.15)]">
            <Icon size={26} className="text-cyan-300 animate-float-icon" />
          </div>
          <span className="text-lg md:text-xl font-semibold text-gray-100">
            {item.title}
          </span>
        </div>
        <p className="text-[13px] md:text-[15px] text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden isolate bg-transparent backdrop-blur-sm"
    >
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#07151d]/10"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.06),transparent_28%)]"></div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[16%] w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow"></div>
        <div className="absolute right-[8%] bottom-[12%] w-72 h-72 rounded-full bg-blue-400/10 blur-3xl animate-float-reverse"></div>
        <div className="absolute left-1/2 top-1/2 w-[28rem] h-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/5 blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/20 bg-white/5 backdrop-blur-md text-cyan-200 text-sm mb-5 shadow-sm">
            <Sparkles size={16} className="animate-spin-slow" />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Professional Snapshot
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto"></div>
        </div>

        {/* Layout */}
        <div className="relative grid grid-cols-1 xl:grid-cols-[276px_minmax(0,1fr)_276px] gap-10 xl:gap-4 items-center">
          {/* Left Rect Cards */}
          <div className="flex flex-col gap-5 xl:gap-6">
            {leftItems.map((item) => (
              <RectCard key={item.title} item={item} />
            ))}
          </div>

          {/* Center Content */}
          <div className="relative">
            <div className="relative max-w-3xl mx-auto">
              {/* Center Badge */}
              <div className="flex justify-center mb-5">
                <div
                  className="relative w-[110px] h-[110px] bg-[rgba(0,0,0,0.75)]
                               border border-cyan-200/10 shadow-[0_16px_32px_rgba(0,0,0,0.28)]
                               backdrop-blur-xl flex items-center justify-center rounded-xl"
                >
                  <BrainCircuit size={34} className="text-cyan-300 animate-float-icon" />
                </div>
              </div>

              {/* Bio Card */}
              <div className="relative rounded-[30px] border border-cyan-200/10 bg-[rgba(0,0,0,0.75)] backdrop-blur-sm shadow-[0_24px_50px_rgba(0,0,0,0.32)] p-7 md:p-10">
                <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_42%)] pointer-events-none"></div>

                <div className="relative text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
                    Ahmed Atief Abo-Ellil
                  </h3>

                  <p className="text-cyan-200/90 text-sm md:text-base font-medium mb-6">
                    Data Analyst • Business Intelligence Specialist
                  </p>

                  <div className="space-y-5 text-gray-300 text-[15px] md:text-[18px] leading-8 text-left">
                    <p>
                      I am a data analyst who enjoys turning raw data into clear, practical insights
                      that people can actually use. What I like most about this field is the process itself:
                      organizing data carefully and shaping it into actionable dashboards and reports.
                    </p>

                    <p>
                      My work focuses on Power BI, Excel, SQL, and Python. I prioritize clarity and logic
                      to ensure outputs are understandable and actionable.
                    </p>

                    <p>
                      My academic background in law has strengthened my structured thinking, attention to
                      detail, and ability to handle information clearly, supporting my analytical approach.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <span className="px-4 py-2 rounded-full bg-white/6 border border-white/10 text-gray-200 text-sm">
                      Practical Insights
                    </span>
                    <span className="px-4 py-2 rounded-full bg-white/6 border border-white/10 text-gray-200 text-sm">
                      Clear Dashboards
                    </span>
                    <span className="px-4 py-2 rounded-full bg-white/6 border border-white/10 text-gray-200 text-sm">
                      Business-Focused Analysis
                    </span>
                  </div>
                </div>
              </div>

              {/* Tools strip */}
              <div className="mt-6 rounded-[22px] border border-cyan-200/10 bg-[rgba(15,30,40,0.00)] backdrop-blur-sm shadow-[0_18px_40px_rgba(0,0,0,0.25)] p-5">
                <h4 className="text-center text-gray-100 font-semibold mb-4">Tools & Technologies</h4>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {tools.map((tool, index) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-full bg-white/6 border border-white/10 text-xs md:text-sm text-gray-200 animate-float-chip"
                      style={{ animationDelay: `${index * 0.12}s` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Rect Cards */}
          <div className="flex flex-col gap-5 xl:gap-6">
            {rightItems.map((item) => (
              <RectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float-slow {0%,100%{transform:translateY(0px);}50%{transform:translateY(-14px);}}
          @keyframes float-reverse {0%,100%{transform:translateY(0px);}50%{transform:translateY(12px);}}
          @keyframes float-icon {0%,100%{transform:translateY(0px);}50%{transform:translateY(-4px);}}
          @keyframes pulse-soft {0%,100%{opacity:0.45;transform:scale(1);}50%{opacity:0.95;transform:scale(1.03);}}
          @keyframes spin-slow {from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
          @keyframes line-glow {0%,100%{opacity:0.45;filter:drop-shadow(0 0 0px rgba(103,232,249,0.1));}50%{opacity:1;filter:drop-shadow(0 0 8px rgba(103,232,249,0.45));}}
          @keyframes float-chip {0%,100%{transform:translateY(0px);}50%{transform:translateY(-3px);}}
          .animate-float-slow {animation: float-slow 8s ease-in-out infinite;}
          .animate-float-reverse {animation: float-reverse 9s ease-in-out infinite;}
          .animate-float-icon {animation: float-icon 3.8s ease-in-out infinite;}
          .animate-pulse-soft {animation: pulse-soft 4.8s ease-in-out infinite;}
          .animate-spin-slow {animation: spin-slow 14s linear infinite;}
          .animate-line-glow {animation: line-glow 4s ease-in-out infinite;}
          .animate-float-chip {animation: float-chip 4.2s ease-in-out infinite;}
        `}
      </style>
    </section>
  );
}