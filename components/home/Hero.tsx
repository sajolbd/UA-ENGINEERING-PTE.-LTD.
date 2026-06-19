import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Clock3,
  DollarSign,
  MessageCircle,
  MoveRight,
} from "lucide-react";
import Container from "components/shared/Container";

const highlights = [
  { label: "Certified Workmanship", icon: Award },
  { label: "Guaranteed Quality", icon: BadgeCheck },
  { label: "Transparent Pricing", icon: DollarSign },
  { label: "On-Time Delivery", icon: Clock3 },
];

export default function Hero() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-white">
        <Image
          src="/images/home/hero/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#f4f8ff]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-[#eef5ff]/45 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/35" />

        <Container className="relative flex min-h-[calc(100vh-96px)] flex-col justify-between gap-8 py-8 sm:py-10 lg:gap-0 lg:py-7">
          <div className="mx-auto w-full max-w-[1320px] text-center">
            <p className="mb-6 inline-flex items-center gap-2 border-l-4 border-primary bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-secondary shadow-sm">
              UA Engineering PTE. LTD.
            </p>

            <h1 className="mx-auto max-w-[1240px] text-3xl font-bold leading-[1.02] text-secondary sm:text-5xl">
              From Renovation to Painting, Roofing, Electrical, Plumbing and
              Steel Works.
            </h1>

            <p className="mx-auto mt-6 max-w-[680px] text-center text-base font-medium leading-7 text-slate-950 sm:text-lg">
              We handle it all with expertise, reliability, and guaranteed
              quality.
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-[1200px] justify-center pt-2 lg:pb-28 lg:pt-4">
            <div className="flex w-full max-w-[360px] flex-row gap-2 sm:max-w-none sm:gap-4">
              <a
                href="https://wa.me/6598411786?text=Hello%20UA%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-primary px-3 py-2 text-sm font-bold text-white shadow-sm transition-colors duration-300 sm:min-h-11 sm:min-w-[190px] sm:flex-none sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
              >
                <span className="absolute inset-0 translate-x-[-101%] rounded-full bg-secondary transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                  <MessageCircle size={20} />
                  WhatsApp Us
                </span>
              </a>
              <Link
                href="/#services"
                className="group relative inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-secondary px-3 py-2 text-sm font-bold text-white shadow-sm transition-colors duration-300 sm:min-h-11 sm:min-w-[190px] sm:flex-none sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
              >
                <span className="absolute inset-0 translate-x-[-101%] rounded-full bg-primary transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                  Learn More
                  <MoveRight size={18} />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-[1160px] gap-3 rounded-[34px] bg-white/88 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.18)] backdrop-blur sm:grid-cols-2 lg:absolute lg:inset-x-4 lg:bottom-5 lg:grid-cols-4">
            {highlights.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="group flex min-h-16 items-center gap-4 rounded-full bg-white px-5 py-3 text-left text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-xl"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                  <Icon size={23} strokeWidth={2.6} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
