import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Services"
        description=""
        bgImage="/images/layout/services-bg.png"
      />
      <div className="py-16 text-center text-slate-500 font-medium">
        Services content will be added here.
      </div>
    </div>
  );
}
