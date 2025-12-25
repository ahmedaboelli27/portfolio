import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Maven_Market() {
    return (
        <main
            className="min-h-screen relative"
            style={{ background: 'linear-gradient(90deg, #243748, #4B749F)' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45 pointer-events-none"></div>

            <div className="relative z-10 py-12">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Back */}
                    <Link
                        to="/#projects"
                        className="
                            inline-flex items-center gap-2
                            px-4 py-2
                            rounded-lg
                             bg-white/10 backdrop-blur-md
                            border border-white/20
                             text-gray-200 font-medium
                            shadow-md
                         hover:bg-white/20 hover:text-white
                            hover:shadow-lg
                            transition-all duration-300
                            group
                             mb-8
                             mt-8
                            "
                    >
                        <ArrowLeft
                            size={18}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        <span className="tracking-wide">Back to Projects</span>
                    </Link>


                    {/* Header */}
                    <h1 className="text-4xl font-bold text-gray-100 mb-4">
                        Maven Market – Retail Performance Dashboard
                    </h1>

                    <p className="text-lg text-gray-300 mb-10 max-w-3xl">
                        This retail analytics dashboard focuses on transaction performance,
                        profit margins, return rates, and geographic sales distribution.
                        It helps decision-makers evaluate store and product performance,
                        monitor customer behavior, and assess revenue against business targets.
                    </p>

                    {/* Dashboard */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
                        <div
                            className="relative w-full overflow-hidden rounded-lg"
                            style={{ paddingTop: '56.25%' }}
                        >
                            <iframe
                                title="MavenMarket_Product"
                                src="https://app.powerbi.com/view?r=eyJrIjoiMWVlZWZjZTEtZjM0Yy00YWVlLWI3YzQtNGZmNDI2MDk4YTIyIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen
                            />
                        </div>
                    </div>

                </div>

                <section className="mt-20 max-w-6xl mx-auto px-4 space-y-24">

                    {/* ================= Overview ================= */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                Project Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Maven Market dashboard is a comprehensive retail analytics
                                solution designed to monitor transactional performance, revenue
                                growth, profitability, and return behavior across multiple markets
                                and product brands. It provides decision-makers with a unified view
                                of operational efficiency, geographic performance, and customer
                                purchasing patterns.
                            </p>
                        </div>

                        <img
                            src="/P_MavenMarket/overview-summary.png"
                            alt="Maven Market Overview"
                            className="w-full rounded-xl shadow-lg border border-white/20"
                        />
                    </div>

                    {/* ================= KPIs ================= */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                        <h2 className="text-2xl font-bold text-gray-100 mb-6">
                            Key Performance Indicators (KPIs)
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* KPIs unchanged */}
                            <div className="bg-white/10 rounded-lg shadow p-5 border border-white/20">
                                <h3 className="text-sm text-gray-400 mb-1">Current Month Orders</h3>
                                <p className="text-3xl font-bold text-gray-100">18,325</p>
                                <p className="text-sm text-gray-300 mt-2">
                                    +5.69% compared to previous month (17,339)
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-lg shadow p-5 border border-white/20">
                                <h3 className="text-sm text-gray-400 mb-1">Current Month Profit</h3>
                                <p className="text-3xl font-bold text-gray-100">$59.67K</p>
                                <p className="text-sm text-gray-300 mt-2">
                                    +5.62% vs previous month ($56.49K)
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-lg shadow p-5 border border-white/20">
                                <h3 className="text-sm text-gray-400 mb-1">Current Month Returns</h3>
                                <p className="text-3xl font-bold text-gray-100">496</p>
                                <p className="text-sm text-gray-300 mt-2">
                                    +2.9% increase compared to previous month
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-lg shadow p-5 border border-white/20">
                                <h3 className="text-sm text-gray-400 mb-1">Revenue Target</h3>
                                <p className="text-3xl font-bold text-gray-100">$1.59M</p>
                                <p className="text-sm text-gray-300 mt-2">
                                    Exceeded target of $1.55M
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= Measures & DAX ================= */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                        <h2 className="text-2xl font-bold text-gray-100 mb-6">
                            Core Measures & DAX Logic
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    The dashboard is powered by a robust set of DAX measures designed
                                    to calculate transactional metrics, profitability indicators, and
                                    performance comparisons across time periods.
                                </p>
                            </div>

                            <img
                                src="/P_MavenMarket/core-measures-dax.png"
                                alt="Measures and DAX"
                                className="w-full max-h-[420px] object-contain rounded-lg border border-white/20"
                            />
                        </div>
                    </div>

                    {/* ================= Brand Performance ================= */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img
                            src="/P_MavenMarket/brand-performance.png"
                            alt="Brand Performance"
                            className="w-full max-h-[500px] object-contain rounded-lg "
                        />

                        <div>
                            <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                Brand-Level Performance Analysis
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                This section analyzes performance across product brands by measuring
                                total orders, total profit, profit margin, and return rate.
                            </p>
                        </div>
                    </div>

                    {/* ================= Geographic Analysis ================= */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                Geographic Distribution of Orders
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                The dashboard provides geographic insights into transaction volume
                                by country.
                            </p>
                        </div>

                        <img
                            src="/P_MavenMarket/geographic-distribution.png"
                            alt="Geographic Distribution"
                            className="w-full max-h-[420px] object-contain rounded-lg border border-white/20"
                        />
                    </div>

                    {/* ================= Revenue Trend ================= */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img
                            src="/P_MavenMarket/weekly-revenue-trend.png"
                            alt="Weekly Revenue Trend"
                            className="w-full max-h-[360px] object-contain rounded-lg border border-white/20"
                        />

                        <div>
                            <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                Weekly Revenue Trend Analysis
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Weekly revenue trends reveal consistent growth over time with
                                seasonal fluctuations.
                            </p>
                        </div>
                    </div>

                    {/* ================= Business Value ================= */}
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 p-8 rounded-xl border border-white/20">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                Business Value & Use Cases
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                This dashboard supports retail executives, sales managers, and
                                operations teams.
                            </p>
                        </div>

                        <img
                            src="/P_MavenMarket/business-value-use-cases.png"
                            alt="Business Value"
                            className="w-full max-h-[380px] object-contain rounded-lg border border-white/20"
                        />
                    </div>

                </section>

            </div>
        </main>
    );
}
