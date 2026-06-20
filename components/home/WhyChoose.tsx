"use client";

import { ThumbsUp, ThumbsDown } from "lucide-react";
import Container from "components/shared/Container";

const uaBenefits = [
  {
    title: "Stop Water Leaks Professionally",
    description:
      "You get high-quality methods based on the place from us to fix leaks like pros. Plus, our quick application and fast-drying solutions tackle stubborn water issues.",
  },
  {
    title: "No-hack & Smooth Process",
    description:
      "No need for loud hammering, drilling, or messy work with our services. Besides, we waterproof your roof, bathroom, balcony, ceiling, and so on. And, you can save time or money.",
  },
  {
    title: "Lasts Lifelong",
    description:
      "Our waterproofing plans work on various surfaces like tiles, wood, cement, and so on. Thanks to the tools and products, it seals deep into pores and repels water for lifelong protection.",
  },
  {
    title: "Great Skill & Experience",
    description:
      "As the best waterproofing service in Singapore, we focus on the little details to handle them via specialists. Plus, our team has great skills and experience to take care of your place to seal it.",
  },
];

const traditionalIssues = [
  {
    title: "Lacks Professionalism",
    description:
      "Many companies try to deliver a good seal to the home areas using traditional methods. Plus, it takes time and costs more.",
  },
  {
    title: "Need Hack and Lengthy Process",
    description:
      "Traditional waterproofing often needs longer drying times and more time to complete the project. It can also lead to lifelong inconvenience and downtime for repairs.",
  },
  {
    title: "Missing Durability",
    description:
      "Traditional solutions merely coat surfaces with a thin film that is prone to wear and tear. Due to this, it diminishes performance over time. And, this leads to recurring maintenance.",
  },
  {
    title: "Lacking Skill & Experience",
    description:
      "Traditional waterproofing brands often lack the necessary expertise and tools. It also results in inconsistent outcomes that fail to meet expectations.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-8 lg:py-12">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            UA ADVANTAGE
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
            Why Choose UA Engineering?
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Left Card - UA Engineering */}
          <div className="rounded-3xl border-2 border-secondary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-secondary hover:shadow-xl sm:p-8">
            <h3 className="mb-10 text-center text-2xl font-black text-secondary leading-snug">
              Why Choose UA Engineering Waterproofing Services?
            </h3>

            <div className="space-y-8">
              {uaBenefits.map((benefit) => (
                <div key={benefit.title} className="group flex gap-4 items-start">
                  {/* Circle Icon Badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-secondary/5 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:scale-110">
                    <ThumbsUp size={20} className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:-translate-y-0.5 group-hover:rotate-[15deg]" />
                  </div>

                  {/* Text Description */}
                  <div>
                    <h4 className="text-lg font-bold text-secondary transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Traditional Companies */}
          <div className="rounded-3xl border-2 border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-xl sm:p-8">
            <h3 className="mb-10 text-center text-2xl font-black text-secondary leading-snug">
              Other Traditional Waterproofing Companies
            </h3>

            <div className="space-y-8">
              {traditionalIssues.map((issue) => (
                <div key={issue.title} className="group flex gap-4 items-start">
                  {/* Circle Icon Badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <ThumbsDown size={20} className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:translate-y-0.5 group-hover:-rotate-[15deg]" />
                  </div>

                  {/* Text Description */}
                  <div>
                    <h4 className="text-lg font-bold text-primary transition-colors duration-300">
                      {issue.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {issue.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
