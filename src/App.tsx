import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import React from "react";
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
              <p className="text-gray-600">
                Previously quant intern at Glencore. Joining Engine by Starling
                in 2026.
              </p>
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
                />
                <WorkItem
                  title="Quant Engineering Intern"
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
                  description="Focused on systems engineering, with modules in Machine Learning, Data Mining, and Distributed Systems and Algorithm Analysis."
                />
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Projects
              </h2>
              <div className="space-y-4 border-l border-gray-200 pl-4">
                <ProjectItem
                  name="Porta"
                  description="Full-stack portfolio tool with backtesting and natural language support."
                  href="https://portfolio.domparsons.com"
                />
                <ProjectItem
                  name="Fraud Detection"
                  description="PyTorch neural networks for credit card fraud detection under extreme class imbalance."
                  href="https://github.com/domparsons/fraud-detection-neural-networks"
                />
                <ProjectItem
                  name="Artificial Neural Network"
                  description="Predicting flood index from hydrological data using a configurable ANN."
                  href="https://github.com/domparsons/artificial-neural-network"
                />
              </div>
            </section>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Experiments
              </h2>
              <div className="space-y-4 border-l border-gray-200 pl-4">
                <a
                  href="/ephemeral/"
                  data-polar-checkout
                  data-polar-checkout-theme="dark"
                >
                  <ProjectItem
                    name="Ephemeral"
                    description="Native macOS journaling app where entries automatically delete after 7 days."
                  />
                </a>
                <script
                  src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
                  defer
                  data-auto-init
                ></script>
                <ProjectItem
                  name="Digest"
                  description="CLI tool that fetches RSS feeds and ranks articles into a digest using a local LLM."
                  href="https://github.com/domparsons/digest"
                />
              </div>
            </section>

            <section>
              <h2 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
                Tech
              </h2>
              <p className="text-sm text-gray-700">
                Python, TypeScript, React, FastAPI, Swift, SwiftUI, SQL, Git
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
}) => (
  <div className="rounded-xl px-3 py-2 -mx-3">
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
    {description && (
      <p className="text-sm text-gray-500 mt-2 ml-10">{description}</p>
    )}
  </div>
);

const ProjectItem = ({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block py-1 rounded-md px-2 -mx-2 hover:bg-gray-100 transition"
  >
    <p className="text-gray-900 font-medium">{name}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </a>
);

export default App;
