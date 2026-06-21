import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Projects"
        description=""
        bgImage="/images/layout/projects-bg.png"
      />
      <div className="py-16 text-center text-slate-500 font-medium">
        Projects content will be added her.
      </div>
    </div>
  );
}
