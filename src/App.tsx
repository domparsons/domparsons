import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import engineImage from "./assets/engine.png";
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
                <p className="text-gray-600">Computer Science Student</p>
                <p className="text-gray-600">
                  A developer and problem solver with a background in financial
                  technology, automation, and analytics.
                </p>
                <p className="text-gray-600">
                  Currently finishing my Computer Science BSc.
                </p>
              </div>
            </header>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Experience
              </h2>
              <div className="space-y-2">
                <WorkItem
                  title="Software Engineering Graduate"
                  company="Engine by Starling"
                  image={engineImage}
                  date="Starting Sep 2026"
                  // description="Built and maintained internal tools for trading and analytics teams. Delivered Python automations saving hours daily."
                />
                <WorkItem
                  title="Quant/Software Engineering Intern"
                  company="Glencore UK"
                  image={glenImage}
                  date="Jul 2024 - Jul 2025"
                  description="Built and maintained internal tools for trading and analytics teams. Delivered Python automations saving hours daily."
                />
                <WorkItem
                  title="BSc Computer Science"
                  company="Loughborough University"
                  image={lboroImage}
                  date="Sep 2022 - Jun 2026"
                  description="Focused on systems engineering, with coursework in neural networks and modules in Machine Learning, Data Mining, and Distributed Systems."
                />
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Projects
              </h2>
              <div className="space-y-2">
                <ProjectItem
                  name="Porta"
                  description="Full-stack finance tool with backtesting and natural language support."
                  href="https://portfolio.domparsons.com"
                  year="2026"
                  tags={["Python", "FastAPI", "React"]}
                />
                <ProjectItem
                  name="Fraud Detection"
                  description="Comparing PyTorch neural network approaches for credit card fraud detection under extreme class imbalance."
                  href="https://github.com/domparsons/fraud-detection-neural-networks"
                  year="2026"
                  tags={["Python", "PyTorch"]}
                />
                <ProjectItem
                  name="Artificial Neural Network"
                  description="Predicting flood index from hydrological data using a configurable ANN with Plotly visualisations."
                  href="https://github.com/domparsons/artificial-neural-network"
                  year="2024"
                  tags={["Python", "Plotly"]}
                />
              </div>
            </section>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Experiments
              </h2>
              <div className="space-y-2">
                <ProjectItem
                  name="Ephemeral"
                  description="Native macOS journaling app where entries automatically delete after 7 days."
                  href="https://github.com/domparsons/Ephemeral"
                  year="2026"
                  tags={["Swift", "SwiftUI"]}
                />
                <ProjectItem
                  name="Digest"
                  description="CLI tool that fetches RSS feeds and ranks articles into a digest using a local LLM."
                  href="https://github.com/domparsons/digest"
                  year="2026"
                  tags={["Python", "MLX"]}
                />
              </div>
            </section>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Tech
              </h2>
              <p className="text-sm text-gray-700">
                Python, TypeScript, React, FastAPI, Pandas, Tailwind CSS, SQL,
                Git, Kubernetes, Azure
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
  description?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => description && setIsOpen(!isOpen)}
      className={`rounded-xl px-3 py-2 -mx-3 transition ${description ? "cursor-pointer" : ""} ${isOpen ? "bg-gray-200" : description ? "hover:bg-gray-200" : ""}`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <img src={image} alt={company} className="h-6 w-6" />
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

const ProjectItem = ({
  name,
  description,
  href,
  year,
  tags,
}: {
  name: string;
  description: string;
  href: string;
  year: string;
  tags: string[];
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-between items-start rounded-xl px-3 py-2 -mx-3 hover:bg-gray-200 transition"
  >
    <div>
      <p className="text-gray-900 font-medium">{name}</p>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-400 text-xs mt-0.5">{tags.join(" · ")}</p>
    </div>
    <p className="text-gray-500 text-sm whitespace-nowrap ml-4">{year}</p>
  </a>
);

export default App;
