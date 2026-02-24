"use client";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  { title: "암 진단금 지급", desc: "암 진단 즉시 최대 5,000만원" },
  { title: "항암치료 실비", desc: "항암·표적·면역치료 비용 보장" },
  { title: "고액암·소액암 구분", desc: "암 종류별 맞춤 보장 설계" },
  { title: "재발·전이 보장", desc: "재발, 전이 시에도 추가 보장" },
];

export default function Solution() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">Solution</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-6">
            암주요치료비보험이<br />해결합니다.
          </h2>
          <p className="text-body text-[15px] leading-relaxed mb-12 max-w-xl">
            암 진단 그 순간부터 치료 완료까지. 진단금 + 치료비 + 항암치료, 빈틈없는 3중 보장으로 치료에만 집중할 수 있습니다.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-line hover:border-[#CCCCCC] transition-colors duration-300">
                <h4 className="font-semibold text-heading mb-1.5">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-12">
            <button
              onClick={scrollToForm}
              className="bg-heading hover:bg-black text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 cursor-pointer text-[15px]"
            >
              무료 설계 받기
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
