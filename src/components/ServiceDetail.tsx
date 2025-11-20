// src/components/ServiceDetail.tsx

import React from 'react';
// Assuming the types are correctly exported from your data file
import { InsuranceServiceDetail, InsuranceFeature, InsuranceExclusion } from '../data/serviceDetailData'; 

/**
 * Props interface for the ServiceDetail component.
 */
interface ServiceDetailProps {
  service: InsuranceServiceDetail;
}

/**
 * Helper component to render a list of features or types.
 */
const FeatureList: React.FC<{ items: InsuranceFeature[] }> = ({ items }) => (
  <ul className="list-disc ml-6 space-y-2">
    {items.map((item, index) => (
      <li key={index}>
        <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}:</span> {item.description}
      </li>
    ))}
  </ul>
);

/**
 * Helper component to render the list of exclusions.
 */
const ExclusionList: React.FC<{ items: InsuranceExclusion[] }> = ({ items }) => (
  <ul className="list-disc ml-6 space-y-2 text-red-700 dark:text-red-400">
    {items.map((item, index) => (
      <li key={index}>
        <span className="font-semibold">{item.title}:</span> {item.details}
      </li>
    ))}
  </ul>
);

/**
 * Main component to display the detailed information for an insurance service.
 * @param service - The InsuranceServiceDetail object to display.
 */
const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg dark:bg-gray-800 transition-shadow">
      
      {/* Header Section */}
      <header className="mb-8 border-b pb-4 border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 flex items-center">
          <span className="mr-3 text-5xl">{service.icon}</span> 
          {service.name}
        </h1>
        <p className="text-lg mt-2 italic text-gray-600 dark:text-gray-400">{service.tagline}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{service.description}</p>
      </header>
      
      {/* Importance Section */}
      <section className="mb-8 p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/30 rounded">
        <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-400 mb-2">🔥 Importance</h2>
        <p className="text-gray-800 dark:text-gray-200">{service.importance}</p>
      </section>

      {/* Types Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">📑 Different Types of Plans</h2>
        <FeatureList items={service.types} />
      </section>

      {/* Key Coverages Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">✅ Key Coverage & Benefits</h2>
        <FeatureList items={service.keyCoverages} />
      </section>

      {/* Exclusions Section */}
      <section className="mb-0 p-4 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">🛑 What's Not Covered (Common Exclusions)</h2>
        <ExclusionList items={service.commonExclusions} />
      </section>

    </div>
  );
};

export default ServiceDetail;