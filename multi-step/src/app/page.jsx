"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageOne } from "@/components/PageOne";
import { PageTwo } from "@/components/PageTwo";
import { PageThree } from "@/components/PageThree";
import { PageFour } from "@/components/PageFour";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleBack = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < 3) setCurrentPage(currentPage + 1);
  };

  const pages = [
    <PageOne handleNext={handleNext} key="page1" />,
    <PageTwo handleNext={handleNext} handleBack={handleBack} key="page2" />,
    <PageThree handleNext={handleNext} handleBack={handleBack} key="page3" />,
    <PageFour handleBack={handleBack} key="page4" />,
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="absolute w-full h-full"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
