"use client";
import { Activity, Syringe, CreditCard } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const problems = [
  {
    icon: Activity,
    title: "국민 2명 중 1명, 암 발생",
    description: "국립암센터 통계에 따르면, 기대수명까지 생존 시 남녀 모두 약 37%가 암에 걸립니다. 더 이상 남의 일이 아닙니다.",
    color: "#FF6B35",
  },
  {
    icon: Syringe,
    title: "항암·방사선·수술 비용 급증",
    description: "신약 항암제, 표적치료, 면역치료 등 최신 치료법은 효과가 좋지만 비용이 수천만원에 달합니다.",
    color: "#3182F6",
  },
  {
    icon: CreditCard,
    title: "비급여 항목은 본인 전액 부담",
    description: "MRI, PET-CT, 상급병실, 신약 항암제 등 비급여 항목은 건강보험이 적용되지 않아 전액 본인 부담입니다.",
    color: "#00C48C",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">PROBLEM</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              암, 왜 미리 준비해야 할까요?
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              암은 누구에게나 올 수 있고, 치료비는 상상 이상입니다
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 150}>
              <div className="bg-[var(--bg-section)] rounded-3xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
