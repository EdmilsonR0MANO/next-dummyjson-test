"use client";

import { ProductListContainer } from "@/components/ProductListContainer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-2 sm:p-3 md:p-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-2 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 md:space-y-8">
          <ProductListContainer />
        </div>
      </div>
    </div>
  );
}
