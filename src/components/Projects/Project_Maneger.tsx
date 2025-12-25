
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Project_Manager() {
  return (
    <main
      className="min-h-screen relative"
      style={{ background: 'linear-gradient(90deg, #243748, #4B749F)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Project Portfolio Management Dashboard
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-3xl">
            This dashboard provides a centralized view of project portfolio
            performance, tracking approvals, execution stages, CPI/SPI indicators,
            and operational readiness to support strategic planning.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
            <div
              className="relative w-full overflow-hidden rounded-lg"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe
                title="Project Manager"
                src="https://app.powerbi.com/view?r=eyJrIjoiYzBjNjYyYWItYjhkOS00MzA2LWIxNjMtODdhNWY0YWE3M2M3IiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

            {/* Overview */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  This dashboard is designed as a centralized Project Portfolio
                  Management (PPM) solution that provides a holistic view of all
                  projects across the organization. It enables PMO teams and senior
                  management to monitor portfolio health, cost performance, schedule
                  adherence, risks, and operational readiness through a unified
                  analytical interface.
                </p>
              </div>

              <img
                src="/P_Project-Maneger/PV-EV-SV-Matrics.png"
                alt="Project Overview"
                className="rounded-lg shadow-md border border-white/20"
              />
            </div>

            {/* Portfolio Summary */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src="/P_Project-Maneger/EV.png"
                alt="Portfolio KPIs"
                className="rounded-lg shadow-md border border-white/20"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Portfolio Summary & Key Metrics
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  At the portfolio level, the dashboard presents high-level KPIs that
                  summarize the overall project landscape, including total project
                  count, approval status, activation rate, completion progress, and
                  transition to operations. These indicators provide immediate
                  visibility into portfolio maturity and execution efficiency.
                </p>
              </div>
            </div>

            {/* Lifecycle Analysis */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Project Lifecycle & Status Analysis
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Projects are analyzed across different lifecycle stages such as
                  initiation, planning, execution and monitoring, and closure. This
                  segmentation helps identify bottlenecks and delays within the
                  delivery pipeline and supports better prioritization of resources.
                </p>
              </div>

              <img
                src="/P_Project-Maneger/Project_life_Cycle.png"
                alt="Lifecycle Analysis"
                className="rounded-lg shadow-md border border-white/20"
              />
            </div>

            {/* EVM */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src="/P_Project-Maneger/PV-EV-SV-SPI.png"
                alt="EVM Metrics"
                className="rounded-lg shadow-md border border-white/20"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Portfolio Health & Earned Value Management (EVM)
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The dashboard applies Earned Value Management metrics such as
                  Planned Value (PV), Earned Value (EV), Actual Cost (AC), Cost
                  Variance (CV), Schedule Variance (SV), Cost Performance Index
                  (CPI), and Schedule Performance Index (SPI) to evaluate cost and
                  schedule performance at both portfolio and project levels.
                </p>
              </div>
            </div>

            {/* Cost Control */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Cost Control & Budget Deviation Analysis
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Projects are grouped into performance bands based on their
                  deviation from baseline cost. This approach enables early
                  identification of budget overruns and supports proactive
                  financial control and escalation.
                </p>
              </div>

              <img
                src="/P_Project-Maneger/Cost_Variance.png"
                alt="Cost Control"
                className="rounded-lg shadow-md border border-white/20"
              />
            </div>

            {/* Schedule Performance */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src="/P_Project-Maneger/CPI-SPI-Completion(%).png"
                alt="Schedule Performance"
                className="rounded-lg shadow-md border border-white/20"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Schedule Performance Analysis
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Schedule performance is evaluated by comparing planned value and
                  earned value. Variance indicators and performance indices
                  highlight delayed, on-track, and ahead-of-schedule projects,
                  supporting timely corrective actions.
                </p>
              </div>
            </div>

            {/* CR & Issues */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Change Requests & Issues Management
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The dashboard tracks change requests and issues by status,
                  priority, and responsible project manager, strengthening
                  governance and ensuring controlled change management across the
                  portfolio.
                </p>
              </div>

              <img
                src="/P_Project-Maneger/Change_Request.png"
                alt="Change Requests & Issues"
                className="rounded-lg shadow-md border border-white/20"
              />
            </div>

            {/* Drill Through */}
            <div className="grid md:grid-cols-2 gap-10 items-center bg-white/10 p-6 rounded-lg border border-white/20">
              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Drill Through Capability
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  The dashboard supports Drill Through functionality, allowing
                  users to navigate from portfolio-level insights directly to a
                  detailed project-level view.
                </p>
              </div>

              <img
                src="/P_Project-Maneger/Drill_Through.png"
                alt="Drill Through"
                className="rounded-lg shadow-md border border-white/20"
              />
            </div>

            {/* Business Value */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src="/P_Project-Maneger/Issues.png"
                alt="Business Value"
                className="rounded-lg shadow-md border border-white/20"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-100 mb-4">
                  Business Value & Use Cases
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  This dashboard supports executive reporting, PMO governance,
                  risk identification, cost and schedule control, and data-driven
                  decision making.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* KPIs & Measures */}
      <div className="space-y-10 mt-20">

        <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

            {/* Section Header */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Key Performance Indicators (KPIs)
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                This section presents the core KPIs used to evaluate portfolio health,
                project execution efficiency, financial performance, and governance
                effectiveness across the organization.
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                <p className="text-sm text-gray-400 mb-1">Total Projects</p>
                <p className="text-3xl font-bold text-gray-100">218</p>
                <p className="text-sm text-gray-300 mt-2">
                  Total number of projects within the portfolio.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                <p className="text-sm text-gray-400 mb-1">Approved Projects</p>
                <p className="text-3xl font-bold text-gray-100">134</p>
                <p className="text-sm text-green-400 mt-2">
                  Represents 61.47% of the total portfolio.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                <p className="text-sm text-gray-400 mb-1">Activated Projects</p>
                <p className="text-3xl font-bold text-gray-100">108</p>
                <p className="text-sm text-blue-400 mt-2">
                  Projects currently in execution (49.54%).
                </p>
              </div>

              <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                <p className="text-sm text-gray-400 mb-1">Completed Projects</p>
                <p className="text-3xl font-bold text-gray-100">34</p>
                <p className="text-sm text-gray-300 mt-2">
                  Successfully completed projects (15.6%).
                </p>
              </div>

              <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                <p className="text-sm text-gray-400 mb-1">Baseline Cost (BAC)</p>
                <p className="text-3xl font-bold text-gray-100">1B SAR</p>
                <p className="text-sm text-gray-300 mt-2">
                  Approved total budget for the portfolio.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl shadow-md p-6 border border-white/20">
                <p className="text-sm text-gray-400 mb-1">Actual Cost (AC)</p>
                <p className="text-3xl font-bold text-gray-100">523M SAR</p>
                <p className="text-sm text-red-400 mt-2">
                  Actual expenditure incurred to date.
                </p>
              </div>

            </div>

            {/* Measures Explanation */}
            <div className="grid md:grid-cols-2 gap-12 items-start pt-10 border-t border-white/20">

              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Core Portfolio Measures
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The dashboard applies a comprehensive set of portfolio and Earned Value
                  Management (EVM) measures to evaluate cost efficiency, schedule
                  performance, and execution maturity at both portfolio and project
                  levels.
                </p>

                <ul className="space-y-3 text-gray-300">
                  <li><strong>BAC:</strong> 1B SAR approved portfolio budget.</li>
                  <li><strong>AC:</strong> 523M SAR actual spending.</li>
                  <li><strong>CV:</strong> -273.39M SAR cost variance.</li>
                  <li><strong>PV:</strong> 259.01M SAR planned value.</li>
                  <li><strong>EV:</strong> 249.69M SAR earned value.</li>
                  <li><strong>SV:</strong> -9.31M SAR schedule variance.</li>
                </ul>
              </div>

              <div className="bg-black/20 border border-white/20 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-100 mb-4">
                  Governance & Control Indicators
                </h4>

                <ul className="space-y-3 text-gray-300">
                  <li><strong>Total Change Requests:</strong> 680</li>
                  <li><strong>Active Change Requests:</strong> 364</li>
                  <li><strong>Active Issues:</strong> 150</li>
                  <li><strong>Moved to Operation:</strong> 9 projects</li>
                </ul>
              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
