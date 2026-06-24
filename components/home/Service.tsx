"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "components/shared/Container";

const services = [
  {
    title: "Renovation & Upgrading",
    image: "/images/services/renovation.png",
    alt: "Renovation & Upgrading service",
    description: "Transform your residential, commercial, or industrial spaces with our custom renovation, space-planning, and premium interior upgrading solutions.",
    slug: "renovation-upgrading",
  },
  {
    title: "Structural & Exterior Works",
    image: "/images/services/structural.png",
    alt: "Structural & Exterior Works service",
    description: "Professional structural steel fabrication, gate and grill work, balcony shelters, roof extensions, and heavy-duty structural solutions in Singapore.",
    slug: "structural-exterior-works",
  },
  {
    title: "Painting & Waterproofing",
    image: "/images/services/painting.png",
    alt: "Painting & Waterproofing service",
    description: "Premium interior and exterior painting alongside high-performance liquid membrane waterproofing systems for complete and long-lasting property protection.",
    slug: "painting-waterproofing",
  },
  {
    title: "Aluminium & Glazing Works",
    image: "/images/services/aluminium.png",
    alt: "Aluminium & Glazing Works service",
    description: "Top-tier fabrication and installation of aluminium frames, window glazing, skylights, mosquito nets, and automated zip blind systems.",
    slug: "aluminium-glazing-works",
  },
  {
    title: "Electrical, Plumbing & Aircon",
    image: "/images/services/mep.png",
    alt: "Electrical, Plumbing & Aircon service",
    description: "Certified mechanical, electrical, and plumbing (MEP) solutions, including wiring, sanitary installations, and professional aircon maintenance.",
    slug: "electrical-plumbing-aircon",
  },
  {
    title: "Solar Panel Installation",
    image: "/images/services/solar.png",
    alt: "Solar Panel Installation service",
    description: "High-efficiency solar panel grid integration, mounting, and maintenance services to power your property with sustainable green energy.",
    slug: "solar-panel-installation",
  },
];

export default function Service() {
  return (
    <section id="services-list" className="bg-[#f8fafc] py-16 lg:py-24">
      <Container>
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1.5 rounded-full">
            OUR CORE SERVICES
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded bg-primary" />
          <p className="mt-6 text-sm md:text-base text-slate-600 lg:text-lg max-w-2xl mx-auto">
            UA Engineering provides end-to-end design, construction, and architectural renovation services in Singapore. We turn vision into structural reality.
          </p>
        </div>

        {/* Services Grid (6 symmetric cards) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col transition-all duration-500 ease-in-out hover:-translate-y-2 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:drop-shadow-[0_25px_50px_rgba(100,18,21,0.2)]"
            >
              <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full flex flex-col bg-[#FDFDFD] group-hover:bg-primary transition-all duration-500 ease-in-out"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)" }}
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-slate-100/50">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-350" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold tracking-tight text-secondary transition-colors duration-500 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/80 flex-grow mb-6">
                      {service.description}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-500 group-hover:text-white">
                      <span>Learn More</span>
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-500 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
