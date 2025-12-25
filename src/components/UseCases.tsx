import {
    Banknote,
    BarChart3,
    ShieldCheck,
    Target,
    TrendingDown,
    Users,
} from "lucide-react";

const useCases = [
    {
        icon: TrendingDown,
        title: "Revenue Drop & Root-Cause Analysis",
        problem:
            "When revenue suddenly declines, teams often spend weeks debating assumptions without evidence.",
        approach:
            "I break down revenue by time, region, product, and customer segment to isolate the real driver (volume vs price vs mix).",
        kpis: ["Revenue Trend", "Units Sold", "Average Selling Price (ASP)", "Category Mix %"],
        outcome:
            "Delivers a clear explanation of the drop and prioritizes the exact levers to fix (best-selling categories, regions, or customer cohorts).",
    },
    {
        icon: Target,
        title: "Marketing Efficiency & ROAS Optimization",
        problem:
            "Marketing spend grows, but profitability doesn’t — because weak channels keep consuming budget.",
        approach:
            "I compare revenue vs ad cost per channel and campaign, then identify loss-making segments where ROAS < 1.",
        kpis: ["ROAS", "ROI", "CPA/CAC", "Revenue per Channel", "Spend Share %"],
        outcome:
            "Highlights where to cut waste and where to reinvest — with a measurable impact on profitability and budget allocation.",
    },
    {
        icon: Banknote,
        title: "Cost Control & Profitability Improvement",
        problem:
            "Expenses expand silently across departments until the income statement becomes hard to control.",
        approach:
            "I build a cost structure view (fixed vs variable) and track deviations over time to spot overspending early.",
        kpis: ["Total Expenses", "Expense by Category", "Profit Margin %", "Variance vs Budget"],
        outcome:
            "Enables fast decision-making (reduce non-essential costs, optimize operations) and protects profit margin.",
    },
    {
        icon: BarChart3,
        title: "Executive KPI Dashboards for Decision Support",
        problem:
            "Executives need answers in seconds — not spreadsheets or raw tables.",
        approach:
            "I design clean KPI dashboards with drill-through and tooltips to move from summary to details instantly.",
        kpis: ["Revenue", "Profit", "Growth %", "Performance vs Target", "Top/Bottom Drivers"],
        outcome:
            "Transforms reporting into a decision tool that supports meetings, planning, and performance reviews.",
    },
    {
        icon: Users,
        title: "Sales Funnel & Conversion Performance",
        problem:
            "Teams generate leads, but conversions stay low because the drop-off stage isn’t visible.",
        approach:
            "I map the funnel stages and quantify drop-offs, then track conversion trends by team, source, and time.",
        kpis: ["Leads", "Meetings", "Deals", "Conversion Rate %", "Win Rate %"],
        outcome:
            "Pinpoints where performance breaks down and provides data-driven actions to improve closing efficiency.",
    },
    {
        icon: ShieldCheck,
        title: "Data Quality & Reporting Reliability",
        problem:
            "Dashboards lose trust when numbers don’t match, or when data quality is inconsistent.",
        approach:
            "I validate datasets, define metric logic, and apply consistent calculations across all reports.",
        kpis: ["Data Completeness %", "Duplicate Rate", "Refresh Reliability", "Metric Consistency"],
        outcome:
            "Ensures stakeholders trust the reporting layer and reduces confusion during decision-making.",
    },
];

export default function UseCases() {
    return (
        <section
            id="usecases"
            className="relative py-24 overflow-hidden"
            style={{ background: "linear-gradient(90deg, #243748, #4B749F)" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Soft glow accents */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-100 mb-4">
                        What I Solve with Data
                    </h2>
                    <div className="w-20 h-1 bg-white/30 mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I don’t just build dashboards — I help teams answer business questions,
                        measure performance clearly, and turn data into decisions. Below are the
                        most common business use cases I deliver across marketing, sales, and finance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {useCases.map((c, idx) => (
                        <div
                            key={idx}
                            className="
                group rounded-2xl p-7
                bg-white/10 backdrop-blur-md
                border border-white/15
                shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                hover:bg-white/14 hover:border-white/25
                transition-all duration-300
                hover:-translate-y-1
              "
                        >
                            {/* Icon */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="
                    h-12 w-12 rounded-xl
                    bg-white/10 border border-white/20
                    flex items-center justify-center
                    shadow-md
                    group-hover:bg-white/15
                    transition-all duration-300
                  "
                                >
                                    <c.icon className="text-gray-100" size={22} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-100 leading-snug">
                                    {c.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                                        Business Need
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">{c.problem}</p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                                        My Approach
                                    </p>
                                    <p className="text-gray-300 leading-relaxed">{c.approach}</p>
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                                        Key Metrics
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {c.kpis.map((kpi, i) => (
                                            <span
                                                key={i}
                                                className="
                          text-xs font-medium
                          px-3 py-1 rounded-full
                          bg-black/25 border border-white/10
                          text-gray-200
                          whitespace-nowrap
                        "
                                            >
                                                {kpi}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                                        Outcome
                                    </p>
                                    <p className="text-gray-200 leading-relaxed">
                                        {c.outcome}
                                    </p>
                                </div>
                            </div>

                            {/* Hover accent line */}
                            <div className="mt-6 h-[2px] w-0 bg-white/30 rounded-full group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
