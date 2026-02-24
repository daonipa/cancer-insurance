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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-[#999999] mb-4 font-medium">Problem</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-16">
            왜 미리<br />준비해야 할까요?
          </h2>
        </ScrollAnimation>

        <div className="space-y-0 border-t border-line">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="flex items-start gap-6 py-8 border-b border-line">
                <span className="text-sm font-medium text-muted flex-shrink-0 mt-1 w-8">{item.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{item.title}</h3>
                  <p className="text-body text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
