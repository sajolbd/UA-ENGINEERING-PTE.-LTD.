"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogNavigationProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function BlogNavigation({
  categories,
  activeCategory,
  onSelectCategory,
}: BlogNavigationProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -180 : 180, behavior: "smooth" });
  };

  return (
    <div className="w-full border-b border-slate-100 bg-white sticky top-[64px] z-30 shadow-sm">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center gap-1">

          {/* Left Arrow — mobile only */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll categories left"
            className={`lg:hidden shrink-0 flex items-center justify-center h-7 w-7 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:text-primary hover:border-primary ${
              canScrollLeft
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft size={14} />
          </button>

          {/* Scrollable category list — no scrollbar */}
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto py-4 no-scrollbar whitespace-nowrap flex-1"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-secondary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Right Arrow — mobile only */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll categories right"
            className={`lg:hidden shrink-0 flex items-center justify-center h-7 w-7 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:text-primary hover:border-primary ${
              canScrollRight
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight size={14} />
          </button>

        </div>
      </div>
    </div>
  );
}
