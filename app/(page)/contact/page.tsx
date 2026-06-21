import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Contact Us"
        description="Get in touch with our team today to get a free site assessment and quote."
        bgImage="/images/layout/contact-bg.png"
      />
      <div className="py-16 text-center text-slate-500 font-medium">
        Contact content will be added here.
      </div>
    </div>
  );
}
