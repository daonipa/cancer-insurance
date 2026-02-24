"use client";
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
    description: "위암, 폐암, 간암 등 고액암과 갑상선암 등 소액암을 구분하여 맞춤 보장이 가능합니다.",
  },
  {
    number: "04",
    title: "재발·전이 시에도 보장",
    description: "암이 재발하거나 다른 부위로 전이되었을 때도 추가 보장을 받을 수 있습니다.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">Benefits</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-16">
            이런 점이 다릅니다.
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div>
                <span className="text-xs font-semibold text-primary tracking-wider">{item.number}</span>
                <h3 className="text-lg font-semibold text-heading mt-2 mb-3">{item.title}</h3>
                <p className="text-[15px] text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
