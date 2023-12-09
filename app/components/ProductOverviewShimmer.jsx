"use client"
import React from 'react';

const ProductOverviewShimmer = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <div className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2 bg-gray-200 animate-pulse shimmer" />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10 flex flex-col">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500 shimmer h-6 w-20 mb-2" />
            <h1 className="my-4 text-3xl font-semibold text-black shimmer h-10 w-72 mb-4" />
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {/* Include shimmer effect for Star ratings */}
                <span className="ml-3 inline-block text-xs font-semibold shimmer h-4 w-16" />
              </span>
            </div>
            <p className="leading-relaxed shimmer h-6 w-64 mb-4" />
            {/* Other shimmer effect placeholders */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverviewShimmer;
