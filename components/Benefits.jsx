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
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Benefits</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              이런 점이 다릅니다.
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="bg-surface rounded-2xl p-8 h-full">
                <span className="inline-block text-xs font-bold text-primary mb-4">{item.number}</span>
                <h3 className="text-[17px] font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
