import {
    Award,
    BarChart3,
    BookOpenCheck,
    CheckCircle2,
    Code2,
    Database,
    ExternalLink,
    FileSpreadsheet,
    LineChart,
    Settings2,
} from "lucide-react";

export default function ProfessionalDevelopment() {
    const dataAnalysisSkills = [
        {
            icon: Database,
            title: "Data Cleaning & Preparation",
            description:
                "Cleaning raw datasets, handling missing values, fixing inconsistent formats, removing duplicates, and preparing reliable data for analysis.",
        },
        {
            icon: BarChart3,
            title: "Dashboard Building",
            description:
                "Designing Power BI dashboards that present KPIs, trends, comparisons, and business performance in a clear and practical way.",
        },
        {
            icon: LineChart,
            title: "Business Performance Analysis",
            description:
                "Analyzing sales, profitability, customer behavior, product performance, and operational results to understand what is improving and what needs attention.",
        },
        {
            icon: FileSpreadsheet,
            title: "Excel & Reporting Workflows",
            description:
                "Using Excel for pivot tables, formulas, data validation, structured analysis, and preparing clean reports before moving into final dashboards.",
        },
        {
            icon: Settings2,
            title: "Power Query, DAX & Data Modeling",
            description:
                "Building relationships between tables, creating calculated measures, shaping data with Power Query, and developing useful KPIs with DAX.",
        },
        {
            icon: BookOpenCheck,
            title: "Insight Communication",
            description:
                "Turning analysis results into simple explanations, business observations, and recommendations that non-technical people can understand.",
        },
    ];

    const supportingSkills = [
        "React",
        "TypeScript",
        "Redux",
        "Component-Based UI",
        "Frontend Structure",
        "Interactive Presentation",
    ];

    return (
        <section
            id="development"
            className="py-28 relative overflow-hidden isolate"
            style={{
                background: "rgba(0,0,0,0.4)", // تم تعديل الخلفية إلى سوداء شفافة 40%
            }}
        >
            {/* Fully isolated background */}
            <div className=" inset-0 bg-[#0E1C26] -z-20 pointer-events-none"></div>

            {/* Overlay */}
            <div className="inset-0 bg-black/45 -z-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-white/10 border border-white/10 text-gray-200
                       text-sm font-medium mb-5"
                    >
                        <Award size={18} />
                        Continuous Learning
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                        Professional Development & Training
                    </h2>

                    <div className="w-24 h-1 bg-gray-400 mx-auto mb-6"></div>

                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        I continuously improve my analytical skills through practical
                        learning, real business scenarios, and hands-on projects focused on
                        dashboards, reporting, and data-driven decision making.
                    </p>
                </div>

                {/* Featured Certificate */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24
                     bg-white/5 backdrop-blur-md border border-white/10
                     rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/40"
                >
                    {/* Certificate Image */}
                    <div className="relative group">
                        <div
                            className="relative overflow-hidden rounded-2xl
                         border border-white/20
                         shadow-2xl shadow-black/50"
                        >
                            <img
                                src="/certificate.png"
                                alt="Data Analysis Diploma Certificate"
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                         bg-cyan-400/10 text-cyan-100 border border-cyan-300/20
                         text-sm font-medium mb-5"
                        >
                            <CheckCircle2 size={18} />
                            Featured Diploma
                        </span>

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                            Data Analysis Diploma
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            A practical diploma focused on the full data analysis workflow —
                            starting from understanding business requirements and preparing
                            data, all the way to building dashboards, analyzing KPIs, and
                            presenting insights that support decision-making.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                            <div className="bg-[#16252F]/80 border border-white/10 rounded-2xl p-4">
                                <p className="text-gray-400 text-sm mb-1">Provider</p>
                                <p className="text-gray-100 font-semibold">EraaSoft Academy</p>
                            </div>

                            <div className="bg-[#16252F]/80 border border-white/10 rounded-2xl p-4">
                                <p className="text-gray-400 text-sm mb-1">Main Focus</p>
                                <p className="text-gray-100 font-semibold">
                                    Data Analysis & BI
                                </p>
                            </div>

                            <div className="bg-[#16252F]/80 border border-white/10 rounded-2xl p-4">
                                <p className="text-gray-400 text-sm mb-1">Certificate Date</p>
                                <p className="text-gray-100 font-semibold">15 / 3 / 2026</p>
                            </div>

                            <div className="bg-[#16252F]/80 border border-white/10 rounded-2xl p-4">
                                <p className="text-gray-400 text-sm mb-1">Learning Style</p>
                                <p className="text-gray-100 font-semibold">Project-Based</p>
                            </div>
                        </div>

                        <a
                            href="/certificate.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-gray-100 text-gray-900 font-medium
                         hover:bg-white transition-all duration-300
                         hover:-translate-y-1"
                        >
                            View Certificate
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                {/* Main Skills */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-gray-100 mb-3">
                            Data Analysis Skills Developed
                        </h3>

                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            The following skills were developed through practical training,
                            project-based learning, and real analytical workflows.
                        </p>
                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {dataAnalysisSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-[#111827]/90 border border-white/10
                               rounded-2xl p-7
                               shadow-lg shadow-black/30
                               hover:shadow-black/60 hover:-translate-y-2
                               transition-all duration-300"
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl bg-white/10
                                   border border-white/10
                                   flex items-center justify-center mb-5
                                   group-hover:bg-gray-100
                                   transition-colors duration-300"
                                >
                                    <skill.icon
                                        className="text-gray-200 group-hover:text-gray-900 transition-colors duration-300"
                                        size={27}
                                    />
                                </div>

                                <h4 className="text-xl font-semibold text-gray-100 mb-3">
                                    {skill.title}
                                </h4>

                                <p className="text-gray-300 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Secondary Skills */}
                <div
                    className="bg-white/5 backdrop-blur-md border border-white/10
                     rounded-3xl p-6 md:p-8 shadow-xl shadow-black/30"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 text-sm text-gray-300 mb-3">
                                <Code2 size={18} />
                                Supporting Technical Skills
                            </span>

                            <h3 className="text-2xl font-bold text-gray-100 mb-3">
                                Frontend Development as a Supporting Skill
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                I also studied frontend development to better present analytical
                                projects and dashboards through cleaner interfaces and more
                                interactive user experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 lg:justify-end">
                            {supportingSkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-[#16252F]
                                   border border-white/10 text-gray-200 text-sm
                                   hover:bg-gray-100 hover:text-gray-900
                                   transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                    <p
                        className="inline-block text-gray-300 text-sm
                       bg-white/5 border border-white/10
                       rounded-full px-6 py-3"
                    >
                        These programs support the hands-on projects showcased in this
                        portfolio and reflect my focus on practical, job-ready analytical
                        skills.
                    </p>
                </div>
            </div>
        </section>
    );
}