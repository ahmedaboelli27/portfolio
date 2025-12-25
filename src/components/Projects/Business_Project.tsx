import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Business_Project() {
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
            Business & CRM Performance Dashboard
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-3xl">
            This CRM dashboard analyzes leads, meetings, deal conversions, and
            overall sales performance. It provides insights into customer
            acquisition efficiency, conversion rates, and monthly trends to
            support data-driven sales and business decisions.
          </p>

          {/* Dashboard */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                title="ST_GROUP"
                src="https://app.powerbi.com/view?r=eyJrIjoiODYzYmY5NDgtZTA0NS00MzAxLTg1MGItMGViYjIyMmEyMDFhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        <section className="mt-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= Overview ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Business & Marketing Performance Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This project represents a business-driven analytical solution that
                integrates marketing performance, sales operations, and financial
                income statements into a unified decision-support dashboard.
                The focus is not only on reporting metrics, but on evaluating
                profitability, efficiency, and strategic resource allocation
                across marketing channels, companies, and sales teams.
              </p>
            </div>

            <img
              src="/Marketing-Performance/overview-summary.png"
              alt="Business Overview"
              className="rounded-xl shadow-lg border border-white/20 w-full object-contain"
            />
          </div>

          {/* ================= KPIs ================= */}
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-10">
              Key Performance Indicators (KPIs)
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Total Revenue', value: '826.52K SAR', desc: 'Overall revenue generated across all companies and channels.' },
                { title: 'Total Expenses', value: '630.06K SAR', desc: 'Combined operational, marketing, and administrative expenses.' },
                { title: 'Net Profit', value: '196.46K SAR', desc: 'Net business profit after deducting all expenses.' },
                { title: 'Net Profit Margin', value: '23.77%', desc: 'Profitability ratio indicating financial efficiency.' },
                { title: 'ROI', value: '31.18%', desc: 'Return on investment across marketing and sales activities.' },
                { title: 'ROAS', value: '0.69', desc: 'Return on advertising spend highlighting marketing efficiency.' },
              ].map((kpi, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-sm backdrop-blur-md"
                >
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">
                    {kpi.title}
                  </h3>
                  <p className="text-2xl font-bold text-white mb-2">
                    {kpi.value}
                  </p>
                  <p className="text-sm text-gray-300">
                    {kpi.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= Marketing Performance ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/Marketing-Performance/marketing-roi-analysis.png"
              alt="ROAS Analysis"
              className="rounded-xl shadow-lg border border-white/20 w-full object-contain"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Marketing Performance & ROAS Analysis
              </h2>
              <p className="text-gray-300 leading-relaxed">
                ROAS (Return on Ad Spend) is calculated as Total Revenue divided by
                Total Advertising Cost. Any channel with a ROAS value below 1 is
                considered loss-making, indicating that advertising costs exceeded
                generated revenue.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                The analysis reveals that <strong>Cold</strong>, <strong>Hunt</strong>,
                and <strong>Landing Page</strong> channels underperformed, generating
                a combined revenue of <strong>6.47K SAR</strong> against an advertising
                cost of <strong>14.63K SAR</strong>, resulting in a
                <strong> 44.24% loss rate</strong>.
              </p>
            </div>
          </div>

          {/* ================= Strategic Recommendations ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 p-10 rounded-xl border border-white/20 backdrop-blur-md">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Strategic Business Recommendations
              </h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed list-disc list-inside">
                <li>
                  Reducing or eliminating spend on underperforming channels could
                  save <strong>14.63K SAR</strong>, representing nearly
                  <strong> 16% of total advertising expenditure</strong>.
                </li>
                <li>
                  Applying a <strong>50% spend reduction</strong> on loss-making
                  channels would save <strong>7.3K SAR</strong>, which could be
                  reallocated to high-performing platforms.
                </li>
                <li>
                  TikTok demonstrated a strong advertising profit rate of
                  <strong> 194.63%</strong>, making it the primary candidate for
                  reinvestment.
                </li>
              </ul>
            </div>

            <img
              src="/Marketing-Performance/expense-breakdown-analysis.png"
              alt="Strategic Insights"
              className="rounded-xl shadow-lg border border-white/20 w-full object-contain"
            />
          </div>

          {/* ================= Sales & Conversion Analysis ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/Marketing-Performance/sales-funnel-performance.png"
              alt="Sales Funnel"
              className="rounded-xl shadow-lg border border-white/20 w-full object-contain"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Sales Funnel & Conversion Performance
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The sales analysis tracks the full customer journey from leads to
                closed deals. The project recorded <strong>7,656 leads</strong>,
                <strong>3,133 meetings</strong>, and <strong>196 deals</strong>,
                resulting in a deal conversion rate of <strong>6.26%</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Monitoring conversion metrics at each stage enables management to
                identify drop-off points, optimize sales strategies, and improve
                revenue efficiency.
              </p>
            </div>
          </div>

          {/* ================= Notes & Executive Insights ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white/10 p-10 rounded-xl border border-white/20 backdrop-blur-md">
            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Executive Notes & Business Insights
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The notes section translates analytical findings into actionable
                executive insights. It quantifies losses, highlights inefficiencies,
                and presents realistic optimization scenarios rather than theoretical
                assumptions.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                The analysis also identifies <strong>Camel</strong> as a critical
                risk area, with a ROAS of <strong>0.48</strong>, indicating that
                <strong> 52.46% of advertising value is being lost</strong>. A
                recommendation was made to reduce advertising spend by
                <strong> 70%</strong> or temporarily suspend campaigns until root
                causes are resolved.
              </p>
            </div>

            <img
              src="/Marketing-Performance/financial-trend-analysis.png"
              alt="Executive Notes"
              className="rounded-xl shadow-lg border border-white/20 w-full object-contain"
            />
          </div>

          {/* ================= Business Value ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/Marketing-Performance/executive-kpis-summary.png"
              alt="Business Value"
              className="rounded-xl shadow-lg border border-white/20 w-full object-contain"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Business Value & Decision Impact
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This project demonstrates how data analytics can directly influence
                financial outcomes. By combining marketing efficiency, sales
                performance, and income statement analysis, decision-makers gain a
                clear roadmap for cost reduction, profit maximization, and
                sustainable growth.
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
