export default function ProfessionalDevelopment() {
    const certifications = [
        {
            title: "Data Analysis for Beginners",
            provider: "Udemy",
            instructor: "Ahmed Nasef",
            points: [
                "Built a solid foundation in data analysis concepts and terminology",
                "Covered data types, basic workflows, and analytical thinking",
                "Applied fundamentals through introductory datasets and exercises",
            ],
        },
        {
            title: "Data Analysis for Professionals – From A to Z",
            provider: "Udemy",
            instructor: "Ahmed Nasef",
            points: [
                "End-to-end data analysis process from data preparation to insights",
                "Worked with real-world datasets and practical business scenarios",
                "Strengthened analytical logic and insight-driven interpretation",
            ],
        },
        {
            title: "Pro Frontend Engineer – React, TypeScript & Redux",
            provider: "Udemy",
            instructor: "Muhammad Naga (Codeawy)",
            points: [
                "Built modern frontend applications using React and TypeScript",
                "Implemented state management using Redux",
                "Developed scalable, component-based UI architecture",
            ],
        },
    ];

    return (
        <section
            id="development"
            className="py-28 relative"
            style={{
                background:
                    "linear-gradient(90deg, #0E1C26, #2A454B, #294861)",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-100 mb-4">
                        Professional Development & Training
                    </h2>
                    <div className="w-20 h-1 bg-gray-400 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                        Continuous learning through structured training programs that
                        support my practical, project-based experience.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-10 md:grid-cols-2">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-[#111827] border border-gray-700 rounded-xl p-8 hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                {cert.title}
                            </h3>

                            <p className="text-sm text-gray-400 mb-6">
                                {cert.provider} • Instructor: {cert.instructor}
                            </p>

                            <ul className="space-y-3 text-gray-300">
                                {cert.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-gray-400"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                <p className="text-center text-gray-400 text-sm mt-16">
                    These courses complement the hands-on projects showcased in this
                    portfolio.
                </p>
            </div>
        </section>
    );
}
