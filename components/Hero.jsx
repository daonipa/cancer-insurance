"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-44 lg:pb-40 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-[#777777] mb-10 font-medium">
          암주요치료비보험
        </p>

        <h1 className="text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] font-bold leading-[1.15] tracking-tight text-white mb-10">
          2명 중 1명이<br />암에 걸리는 시대.
        </h1>

        <div className="mb-14">
          <p className="text-base md:text-lg text-[#888888] mb-2 font-light">
            암 치료 평균 비용
          </p>
          <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            3,291<span className="text-[#DC2626]">만원</span>
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 cursor-pointer mb-5"
        >
          무료 보험료 확인하기
        </button>

        <p className="text-sm text-[#555555] mt-4">
          강제 가입 없음 · 30초 소요
        </p>
      </div>
    </section>
  );
}
