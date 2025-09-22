"use client";
import { useState } from "react";
import { PageOne } from "@/components/PageOne";
import { PageTwo } from "@/components/PageTwo";
import { PageThree } from "@/components/PageThree";

export default function Home() {
  const [currentPage, useCurrentPage] = useState(0);
  const CurrentStep = [PageOne, PageTwo, PageThree][currentPage];

  const handleBack = () => {
    useCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    useCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <CurrentStep />
      <button onClick={handleBack} className="rounded-2xl p-4">
        Back
      </button>
      <button onClick={handleNext}> Next</button>
    </div>
  );
}
