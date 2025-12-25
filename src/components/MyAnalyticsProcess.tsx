import {
    BarChart3,
    Brain,
    Database,
    LineChart,
    Target,
} from "lucide-react";
import { useEffect, useRef } from "react";
import "./css/scrollAnimations.css";

type Step = {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    icon: React.ElementType;
};

const steps: Step[] = [
    {
        title: "Business Understanding & Problem Framing",
        subtitle: "Defining the right questions before touching the data",
        description:
            "I start by understanding the business context, objectives, and decision-makers' expectations. This phase focuses on translating high-level business questions into precise analytical objectives that can be measured and validated.",
        details: [
            "Identify key stakeholders and success criteria",
            "Define KPIs aligned with business goals",
            "Clarify scope, assumptions, and constraints",
        ],
        icon: Brain,
    },
    {
        title: "Data Collection, Cleaning & Validation",
        subtitle: "Ensuring data quality and analytical reliability",
        description:
            "Raw data is rarely analysis-ready. I consolidate data from multiple sources and apply systematic cleaning, validation, and transformation processes to ensure accuracy, consistency, and completeness.",
        details: [
            "Handle missing values, duplicates, and outliers",
            "Standardize metrics and dimensions",
            "Validate data integrity across sources",
        ],
        icon: Database,
    },
    {
        title: "Analytical Modeling & Metric Design",
        subtitle: "Building logic that reflects real business performance",
        description:
            "I design analytical models and DAX measures that represent business reality, not just technical calculations. The focus is on creating reusable, scalable, and transparent metrics.",
        details: [
            "Design fact and dimension relationships",
            "Build advanced DAX measures",
            "Ensure consistency across reports",
        ],
        icon: BarChart3,
    },
    {
        title: "Visualization & Data Storytelling",
        subtitle: "Turning insights into clear narratives",
        description:
            "Insights only matter when they are understood. I design dashboards that guide users through the data, highlight key drivers, and support exploration without overwhelming the viewer.",
        details: [
            "Design intuitive layouts and hierarchies",
            "Highlight trends, drivers, and anomalies",
            "Enable drill-through and interactive analysis",
        ],
        icon: LineChart,
    },
    {
        title: "Decision Support & Business Impact",
        subtitle: "From insights to actionable outcomes",
        description:
            "The final step is converting insights into decisions. I translate analytical findings into clear recommendations that help businesses reduce costs, improve performance, and manage risks.",
        details: [
            "Quantify impact and opportunity size",
            "Provide scenario-based recommendations",
            "Support confident, data-driven decisions",
        ],
        icon: Target,
    },
];

export default function MyAnalyticsProcess() {
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            id="process"
            className="relative py-32"
            style={{ background: "linear-gradient(90deg, #243748, #4B749F)" }}
        >
            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-28">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        My Analytics Workflow
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        A structured, business-driven analytics methodology designed to
                        transform raw data into reliable insights and measurable business
                        impact.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-20">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                                className="scroll-reveal"
                            >
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:shadow-[0_30px_70px_rgba(0,0,0,0.45)] hover:border-white/30 transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15 border border-white/30">
                                            <Icon className="text-white" size={22} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {step.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                                        {step.details.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
