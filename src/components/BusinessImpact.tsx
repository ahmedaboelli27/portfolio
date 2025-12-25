import { AlertTriangle, DollarSign, TrendingUp } from "lucide-react";

const useCases = [
    {
        title: "Marketing Spend Optimization",
        icon: DollarSign,
        problem:
            "Advertising costs were increasing while revenue growth remained flat, making it difficult to justify marketing investments.",
        solution:
            "By analyzing ROAS and ROI across channels, I identified underperforming campaigns and reallocated budget toward high-performing platforms.",
        impact:
            "Reduced wasted ad spend by 16% and improved overall marketing ROI by 31%.",
    },
    {
        title: "Sales Funnel Performance Analysis",
        icon: TrendingUp,
        problem:
            "The sales team struggled with low deal conversion rates and lacked visibility into where leads were dropping off.",
        solution:
            "I built a full funnel analysis tracking leads, meetings, and deals by source, salesperson, and time period.",
        impact:
            "Improved deal conversion rate by highlighting critical drop-off stages and optimizing follow-up strategies.",
    },
    {
        title: "Risk & Profitability Monitoring",
        icon: AlertTriangle,
        problem:
            "Management had limited visibility into profit drivers and potential loss-making segments across the business.",
        solution:
            "Developed income statement dashboards with profit margins, expense breakdowns, and trend analysis.",
        impact:
            "Enabled early identification of loss risks and supported data-driven cost control decisions.",
    },
];

export default function BusinessImpact() {
    return (
        <section
            id="businessimpact"
            className="py-28 relative"
            style={{ background: "linear-gradient(90deg, #243748, #4B749F)" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Real Business Impact
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Practical use cases that demonstrate how data analytics translates
                        into measurable business outcomes and strategic decisions.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {useCases.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="
                  bg-white/10 backdrop-blur-md
                  border border-white/20
                  rounded-2xl p-8
                  transition-all duration-300 ease-out
                  hover:bg-white/15
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)]
                  hover:-translate-y-1
                "
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 flex items-center justify-center
                                  rounded-full bg-white/15 border border-white/30">
                                        <Icon className="text-white" size={26} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                    <p>
                                        <span className="font-semibold text-white">
                                            Business Problem:
                                        </span>{" "}
                                        {item.problem}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">
                                            Analytical Solution:
                                        </span>{" "}
                                        {item.solution}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">
                                            Impact:
                                        </span>{" "}
                                        {item.impact}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
