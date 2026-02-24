"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-32 md:py-40 lg:py-48 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[#999999] mb-8 font-medium">
          암주요치료비보험
        </p>

        <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white mb-8">
          2명 중 1명이<br />암에 걸리는 시대.
        </h1>

        <p className="text-lg md:text-xl text-[#999999] mb-3 font-light">
          암 치료 평균 비용
        </p>
        <p className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          3,291<span className="text-[#DC2626]">만원</span>
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          무료 보험료 확인하기
        </button>

        <p className="text-sm text-[#666666] mt-6">
          강제 가입 없음 · 30초 소요
        </p>
      </div>
    </section>
  );
}
