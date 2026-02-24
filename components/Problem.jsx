"use client";
import ScrollAnimation from "./ScrollAnimation";

const problems = [
  {
    number: "01",
    title: "국민 2명 중 1명, 암 발생",
    description: "국립암센터 통계에 따르면, 기대수명까지 생존 시 약 37%가 암에 걸립니다.",
  },
  {
    number: "02",
    title: "치료비는 수천만원",
    description: "신약 항암제, 표적치료, 면역치료 등 최신 치료법은 수천만원에 달합니다.",
  },
  {
    number: "03",
    title: "비급여 항목, 전액 본인 부담",
    description: "MRI, PET-CT, 상급병실, 신약 항암제 등은 건강보험이 적용되지 않습니다.",
  },
];

export default function Problem() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Problem</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              왜 미리 준비해야 할까요?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 120}>
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
