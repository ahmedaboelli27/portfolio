import { motion } from "framer-motion";
import { AlertTriangle, DollarSign, TrendingUp } from "lucide-react";

const useCases = [
    {
        title: "Marketing Spend Optimization",
        icon: DollarSign,
        problem:
            "Advertising budgets were rising while revenue growth remained stagnant, making it challenging to justify marketing expenditures.",
        solution:
            "Analyzed ROAS and ROI across multiple channels, identified underperforming campaigns, and reallocated budget toward high-performing platforms to maximize impact.",
        impact:
            "Reduced wasted ad spend by 16% and improved overall marketing ROI by 31%, ensuring resources are optimally used.",
    },
    {
        title: "Sales Funnel Performance Analysis",
        icon: TrendingUp,
        problem:
            "The sales team faced low conversion rates and lacked visibility on where prospects were dropping off within the funnel.",
        solution:
            "Built a comprehensive funnel analysis tracking leads, meetings, and deals by source, salesperson, and time period, identifying bottlenecks in the process.",
        impact:
            "Improved conversion rates by highlighting critical drop-off stages and optimizing follow-up strategies, leading to more predictable sales outcomes.",
    },
    {
        title: "Risk & Profitability Monitoring",
        icon: AlertTriangle,
        problem:
            "Management had limited insights into profit drivers and potential loss-making areas across the business units.",
        solution:
            "Developed interactive income statement dashboards highlighting profit margins, expense breakdowns, and trend analysis to support informed decision-making.",
        impact:
            "Enabled early identification of risks, supported data-driven cost control decisions, and improved financial performance visibility across departments.",
    },
];

export default function BusinessImpact() {
    return (
        <section
            id="businessimpact"
            className="py-28 relative"
            style={{ background: "rgba(0,0,0,0.4)" }}
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
                        Practical use cases demonstrating how actionable insights from data analytics
                        directly translate into measurable business results and informed strategic decisions.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {useCases.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
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
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                </div>

                                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                    <p>
                                        <span className="font-semibold text-white">Business Problem:</span>{" "}
                                        {item.problem}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Analytical Solution:</span>{" "}
                                        {item.solution}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Impact:</span>{" "}
                                        {item.impact}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}