import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="About Us"
        description=""
        bgImage="/images/layout/about-bg.png"
      />
      <div className="py-16 text-center text-slate-500 font-medium">
        About content will be added here.
      </div>
    </div>
  );
}
