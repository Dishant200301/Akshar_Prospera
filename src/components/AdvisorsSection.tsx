import React from "react";
import AdvisorCard from "../components/AdvisorCard";
import { advisors } from "../data/advisors";

export default function AdvisorsSection() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="space-y-20">
        {advisors.map((advisor) => (
          <AdvisorCard key={advisor.id} data={advisor} />
        ))}
      </div>
    </main>
  );
}
