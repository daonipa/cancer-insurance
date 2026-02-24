"use client";
import { BadgeCheck } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const benefits = [
  {
    number: "01",
    title: "암 진단금 최대 5,000만원",
    description: "암 확진 즉시 진단금이 지급되어 치료 초기 비용과 생활비를 한 번에 해결할 수 있습니다.",
  },
  {
    number: "02",
    title: "항암·방사선 치료비 실비",
    description: "고가의 항암제, 방사선 치료, 표적치료 등 핵심 치료비를 실비로 보장받습니다.",
  },
  {
    number: "03",
    title: "고액암·소액암 구분 보장",
    description: "위암, 폐암, 간암 등 고액암과 갑상선암 등 소액암을 구분하여 맞춤 보장 설계가 가능합니다.",
  },
  {
    number: "04",
    title: "재발·전이 시에도 보장",
    description: "암이 재발하거나 다른 부위로 전이되었을 때도 추가 보장을 받을 수 있습니다.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">BENEFITS</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              암주요치료비보험, 이런 점이 다릅니다
            </h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="flex items-start gap-5 bg-[var(--bg-section)] rounded-2xl p-6 md:p-8 hover:bg-[var(--primary-light)] transition-colors duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-extrabold text-sm group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                    {item.title}
                    <BadgeCheck className="w-5 h-5 text-[var(--primary)]" />
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
