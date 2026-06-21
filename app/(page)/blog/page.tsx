import React from "react";
import Breadcrumb from "components/layout/Breadcrumb";

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb
        title="Blog"
        description=""
        bgImage="/images/layout/blog-bg.png"
      />
      <div className="py-16 text-center text-slate-500 font-medium">
        Blog content will be added here.
      </div>
    </div>
  );
}
