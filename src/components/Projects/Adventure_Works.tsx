import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Adventure_Works() {
    return (
        <main
            className="min-h-screen relative"
            style={{ background: 'linear-gradient(90deg, #243748, #4B749F)' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

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
                        Adventure Works – Sales & Revenue Analytics Dashboard
                    </h1>

                    <p className="text-lg text-gray-300 mb-10 max-w-3xl">
                        This dashboard provides a comprehensive analysis of Adventure Works’
                        sales performance, revenue trends, profitability, and product demand.
                        It enables stakeholders to monitor key financial metrics, identify
                        growth opportunities, and evaluate business performance across time
                        periods and product categories.
                    </p>

                    {/* Dashboard */}
                    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
                        <div
                            className="relative w-full overflow-hidden rounded-lg"
                            style={{ paddingTop: '56.25%' }}
                        >
                            <iframe
                                title="AdventureWorks Report_FINAL"
                                src="https://app.powerbi.com/reportEmbed?reportId=31bd6d1d-f25f-43ea-8060-c0f27252cd36&autoAuth=true&ctid=2bb6e5bc-c109-47fb-9433-c1c6f4fa33ff"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <section className="mt-20 space-y-24">

                        {/* Overview */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    Project Overview
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    This dashboard provides an executive-level overview of Adventure
                                    Works’ sales performance, highlighting key financial indicators such
                                    as total revenue, profit, order volume, and return rate. It enables
                                    stakeholders to quickly assess overall business health and growth
                                    trends.
                                </p>
                            </div>

                            <img
                                src="/P_AventureWorks/AW_Project_Overview.png"
                                alt="Adventure Works Overview"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />
                        </div>

                        {/* Revenue & Orders */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <img
                                src="/P_AventureWorks/AW_Revenue_Orders_Analysis.png"
                                alt="Revenue and Orders Analysis"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    Revenue & Orders Analysis
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Revenue trends are analyzed over time to identify seasonality,
                                    growth patterns, and performance shifts. Order distribution by
                                    product category highlights customer demand and supports
                                    data-driven inventory and pricing decisions.
                                </p>
                            </div>
                        </div>

                        {/* Geography */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    Geographic Performance
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Geographic analysis visualizes sales distribution across regions,
                                    allowing comparison between markets and identification of high- and
                                    low-performing territories.
                                </p>
                            </div>

                            <img
                                src="/P_AventureWorks/AW_Geographic_Performance.png"
                                alt="Geographic Performance"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />
                        </div>

                        {/* Products */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <img
                                src="/P_AventureWorks/AW_Product_Performance.png"
                                alt="Product Performance"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    Product Performance Analysis
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    The dashboard highlights top-performing products based on orders,
                                    revenue, and return rates, helping identify best sellers, risk
                                    products, and optimization opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Customers */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    Customer Analytics
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Customer insights focus on unique customers, revenue per customer,
                                    and high-value segments, supporting targeted marketing and customer
                                    retention strategies.
                                </p>
                            </div>

                            <img
                                src="/P_AventureWorks/AW_Customer_Analytics.png"
                                alt="Customer Analytics"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />
                        </div>

                        {/* Drill Through */}
                        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 p-8 rounded-xl border border-white/20">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    Drill Through & Decomposition Analysis
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Drill Through functionality enables users to navigate from summary
                                    insights to detailed product-level analysis. Decomposition trees
                                    allow dynamic exploration of sales drivers across categories,
                                    subcategories, and products.
                                </p>
                            </div>

                            <img
                                src="/P_AventureWorks/AW_Drill_Through_Decomposition.png"
                                alt="Drill Through Analysis"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />
                        </div>

                        {/* AI Insights */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <img
                                src="/P_AventureWorks/AW_AI_Insights_Key_Influencers.png"
                                alt="AI Insights"
                                className="w-full h-auto rounded-xl shadow-lg border border-white/20 object-contain"
                            />

                            <div>
                                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                                    AI-Powered Insights (Key Influencers)
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    AI visuals such as Key Influencers and Top Segments identify the
                                    factors driving changes in pricing and customer behavior, enabling
                                    deeper understanding and predictive insights.
                                </p>
                            </div>
                        </div>
                        {/* KPIs & Measures */}
                        <div className="space-y-10">

                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-100 mb-4">
                                    Key Performance Indicators (KPIs)
                                </h2>
                                <p className="text-gray-300 max-w-3xl mx-auto">
                                    This section highlights the core performance indicators used to evaluate
                                    sales efficiency, profitability, customer behavior, and operational
                                    outcomes within the Adventure Works business.
                                </p>
                            </div>

                            {/* KPI Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                                    <p className="text-sm text-gray-400 mb-1">Total Revenue</p>
                                    <p className="text-3xl font-bold text-gray-100">$24.9M</p>
                                    <p className="text-sm text-green-400 mt-2">
                                        Represents total sales value across all products and regions.
                                    </p>
                                </div>

                                <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                                    <p className="text-sm text-gray-400 mb-1">Total Profit</p>
                                    <p className="text-3xl font-bold text-gray-100">$10.5M</p>
                                    <p className="text-sm text-green-400 mt-2">
                                        Indicates overall business profitability after cost deductions.
                                    </p>
                                </div>

                                <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                                    <p className="text-sm text-gray-400 mb-1">Total Orders</p>
                                    <p className="text-3xl font-bold text-gray-100">25.2K</p>
                                    <p className="text-sm text-gray-300 mt-2">
                                        Total number of customer orders processed during the period.
                                    </p>
                                </div>

                                <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                                    <p className="text-sm text-gray-400 mb-1">Return Rate</p>
                                    <p className="text-3xl font-bold text-gray-100">2.2%</p>
                                    <p className="text-sm text-red-400 mt-2">
                                        Percentage of returned items relative to total orders.
                                    </p>
                                </div>

                            </div>

                            {/* Measures Explanation */}
                            <div className="grid md:grid-cols-2 gap-12 items-start mt-12">

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-100 mb-4">
                                        Core Analytical Measures
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        The dashboard relies on a set of calculated measures to transform raw
                                        transactional data into meaningful insights. These measures enable
                                        performance comparison, trend evaluation, and strategic decision-making.
                                    </p>

                                    <ul className="space-y-3 text-gray-300">
                                        <li>
                                            <strong>Total Revenue:</strong> Aggregated sales amount across all
                                            orders.
                                        </li>
                                        <li>
                                            <strong>Total Profit:</strong> Revenue minus total product cost.
                                        </li>
                                        <li>
                                            <strong>Orders Count:</strong> Total number of completed transactions.
                                        </li>
                                        <li>
                                            <strong>Return Rate:</strong> Returned orders divided by total orders.
                                        </li>
                                        <li>
                                            <strong>Revenue per Customer:</strong> Average revenue generated per
                                            unique customer.
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                                    <h4 className="text-xl font-semibold text-gray-100 mb-4">
                                        Key Numerical Highlights
                                    </h4>

                                    <ul className="space-y-3 text-gray-300">
                                        <li>
                                            <strong>Unique Customers:</strong> 17.4K customers contributed to total
                                            sales.
                                        </li>
                                        <li>
                                            <strong>Revenue per Customer:</strong> $1,431 average value.
                                        </li>
                                        <li>
                                            <strong>Monthly Revenue:</strong> $1.83M with a positive growth trend.
                                        </li>
                                        <li>
                                            <strong>Monthly Orders:</strong> 2,146 orders processed.
                                        </li>
                                        <li>
                                            <strong>Monthly Returns:</strong> 166 returned items.
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}



