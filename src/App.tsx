import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import glenImage from "./assets/glen.png";
import lboroImage from "./assets/lboro.png";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-gray-100 text-gray-800">
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 3 }}
          >
            <div className="absolute -top-40 -left-40 w-[140%] h-[140%] bg-gradient-to-r from-orange-100 via-rose-100 to-transparent rounded-full blur-3xl animate-pulse" />
          </motion.div>

          <div className="relative z-10 px-6 py-20 max-w-2xl mx-auto space-y-8">
            <header className="space-y-1 border-b border-gray-200 pb-6">
              <p className="font-semibold">Dom Parsons</p>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Quantitative Engineer · Computer Science Student
                </p>
                <p className="text-gray-600">
                  A developer and problem solver with a background in financial technology, automation, and analytics
                </p>
                <p className="text-gray-600">
                  Currently finishing a placement year at a global financial firm where I’ve worked on high-impact tools
                  used across trading and analytics desks.
                </p>
              </div>
            </header>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">Experience</h2>
              <div className="space-y-2">
                <WorkItem
                  title="Quant Engineering Intern"
                  company="Glencore UK"
                  image={glenImage}
                  date="Jul 2024 – Jul 2025"
                  description="Built and maintained internal tools for trading and analytics teams. Delivered Python automations saving hours daily."
                />
                <WorkItem
                  title="BSc Computer Science"
                  company="Loughborough University"
                  image={lboroImage}
                  date="2022 - 2026"
                  description="Focused on systems engineering, with coursework in neural networks and modules in Machine Learning, Data Mining, and Distributed Systems."
                />
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">Projects</h2>
              <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-none">
                <a
                  href="https://portfolio.domparsons.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[250px] bg-white shadow-md rounded-md p-4 border border-gray-200 block hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Porta</h3>
                  <p className="text-gray-700 text-sm">
                    Full-stack finance tool with backtesting, and natural language support.
                  </p>
                </a>

                <a
                  href="https://github.com/domparsons/artificial-neural-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[250px] bg-white shadow-md rounded-md p-4 border border-gray-200 block hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">Artificial Neural Network</h3>
                  <p className="text-gray-700 text-sm">
                    University project predicting flood index from hydrological data using a configurable ANN with
                    Plotly visualisations.
                  </p>
                </a>

                <div className="min-w-[250px] bg-white shadow-md rounded-md p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900  mb-1">Workflow Automation</h3>
                  <p className="text-gray-700 text-sm">
                    Python scripts automating manual trading desk workflows.
                  </p>
                </div>

                <div className="min-w-[250px] bg-white shadow-md rounded-md p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900  mb-1">Analytics Add-in</h3>
                  <p className="text-gray-700 text-sm">
                    OfficeJS add-in with integrated auth.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">Tech</h2>
              <p className="text-sm text-gray-700">
                Python, TypeScript, React, FastAPI, Pandas, Tailwind CSS, SQL, Git, Kubernetes, Azure
              </p>
            </section>

            <footer className="pt-4 border-t border-gray-200 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                <a
                  href="https://www.linkedin.com/in/domparsons/"
                  target={"_blank"}
                  className="hover:bg-gray-200 p-1 rounded-sm"
                >
                  LinkedIn
                </a>
              </p>
              <p className="text-sm text-gray-600">
                <a
                  href="https://github.com/domparsons"
                  target={"_blank"}
                  className="hover:bg-gray-200 p-1 rounded-sm"
                >
                  GitHub
                </a>
              </p>
            </footer>
          </div>
        </div>

        <Analytics />
      </ThemeProvider>
    </Router>
  );
}

const WorkItem = ({
  title,
  company,
  image,
  date,
  description,
}: {
  title: string;
  company: string;
  image: string;
  date: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-pointer rounded-xl px-3 py-2 transition ${isOpen ? "bg-gray-200" : "hover:bg-gray-200"}`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <img src={image} alt="Glen" className="h-6 w-6" />
          <div>
            <p className="text-gray-900 font-medium">{title}</p>
            <p className="text-gray-600 text-sm">{company}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm whitespace-nowrap">{date}</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 mt-3">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
