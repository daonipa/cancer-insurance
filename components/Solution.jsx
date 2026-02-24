"use client";
import { BadgeDollarSign, Pill, Microscope, RefreshCw } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Solution() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--bg-section)]">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">SOLUTION</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              암주요치료비보험이 해결합니다
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)]">
              진단금 + 치료비 + 항암치료, 빈틈없는 3중 보장
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-6 leading-snug">
                  암 진단 그 순간부터
                  <br /><span className="text-[var(--primary)]">치료 완료까지</span> 함께합니다
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  암주요치료비보험은 암 진단 즉시 진단금을 지급하고, 수술비·항암치료비·방사선치료비까지
                  실비로 보장합니다. 재발과 전이 시에도 추가 보장이 가능합니다.
                </p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                >
                  무료 설계 받기
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BadgeDollarSign, title: "암 진단금 지급", desc: "암 진단 즉시 최대 5,000만원 진단금" },
                  { icon: Pill, title: "항암치료 실비", desc: "항암·표적·면역치료 비용 실비 보장" },
                  { icon: Microscope, title: "고액암·소액암 구분", desc: "암 종류별 맞춤 보장 설계" },
                  { icon: RefreshCw, title: "재발·전이 보장", desc: "재발, 전이 시에도 추가 보장 가능" },
                ].map((item, i) => (
                  <div key={i} className="bg-[var(--bg-section)] rounded-2xl p-5 hover:bg-[var(--primary-light)] transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-[var(--primary)] mb-3" />
                    <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
