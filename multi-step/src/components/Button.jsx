"use client";
import { useState } from "react";
import { PageOne } from "@/components/PageOne";
import { PageTwo } from "@/components/PageTwo";
import { PageThree } from "@/components/PageThree";

export function Button({ buttonDamjuulah, isContinue }) {
  const buttons = {
    nonSplited: "",
    Splited: "",
    back: "",
  };

  if (isContinue) {
    return (
      <div>
        <button
          onClick={buttonDamjuulah}
          className="w-[128px] h-[50px] border-1 border-[#CBD5E1] text-black rounded-[8px] cursor-pointer"
        >
          {" "}
          Back
        </button>
      </div>
    );
  }
  return (
    <div className="min-w-[67%]">
      <button
        onClick={buttonDamjuulah}
        className="w-full h-[50px] bg-black text-white rounded-[8px] cursor-pointer"
      >
        {" "}
        Next 1/3 ►
      </button>
    </div>
  );
}
