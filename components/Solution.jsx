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
    <section className="py-28 md:py-36 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Solution</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-5">
              암주요치료비보험이 해결합니다.
            </h2>
            <p className="text-body text-[15px] leading-relaxed max-w-lg mx-auto">
              진단금 + 치료비 + 항암치료, 빈틈없는 3중 보장으로 치료에만 집중하세요.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {features.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <h3 className="text-[17px] font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-full transition-colors duration-300 cursor-pointer"
            >
              무료 설계 받기
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
