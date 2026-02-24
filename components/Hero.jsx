"use client";
import { Ribbon, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-28 md:py-36 lg:py-44 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-line rounded-full px-4 py-2 mb-8">
          <Ribbon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-body">암주요치료비보험 무료 설계</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight text-heading mb-6">
          2명 중 1명이 암에 걸립니다.
          <br />
          <span className="text-primary">당신은</span> 준비되셨나요?
        </h1>

        <p className="text-lg md:text-xl text-body mb-4 leading-relaxed">
          암 치료 평균 비용
          <strong className="text-warning text-2xl md:text-3xl font-extrabold ml-2">3,291만원</strong>
        </p>
        <p className="text-base md:text-lg text-muted mb-10">
          보험 없이 버틸 수 있을까요?
        </p>

        <button
          onClick={scrollToForm}
          className="btn-pulse inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          나에게 맞는 암보험 무료 설계 받기
        </button>

        <p className="text-sm text-muted mt-4">
          무료 상담 · 강제 가입 없음 · 30초 소요
        </p>

        <div className="mt-10 float-animation">
          <ArrowDown className="w-6 h-6 text-muted mx-auto" />
        </div>
      </div>
    </section>
  );
}
