"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "암주요치료비보험은 어떤 암을 보장하나요?",
    answer: "위암, 폐암, 간암, 대장암 등 주요 고액암은 물론, 갑상선암·전립선암 등 소액암까지 모두 보장합니다. 암 종류별로 보장 금액이 다를 수 있으며, 맞춤 설계를 통해 최적의 보장을 받을 수 있습니다.",
  },
  {
    question: "이미 다른 보험이 있는데 추가로 가입해야 하나요?",
    answer: "기존 보험의 암 보장이 부족한 경우가 많습니다. 특히 10년 이상 된 보험은 최신 치료법에 대한 보장이 빠져 있을 수 있습니다. 무료 상담을 통해 현재 보장 상태를 점검해보시길 추천합니다.",
  },
  {
    question: "보험료는 얼마 정도인가요?",
    answer: "나이, 성별, 보장 내용에 따라 다르지만, 월 3만원대부터 설계가 가능합니다. 무료 상담 시 정확한 보험료를 안내해드립니다.",
  },
  {
    question: "가입 후 바로 보장이 시작되나요?",
    answer: "암보험은 일반적으로 90일의 면책기간이 있습니다. 면책기간 이후부터 암 진단 시 보장이 시작됩니다. 따라서 건강할 때 미리 준비하는 것이 중요합니다.",
  },
  {
    question: "상담 신청하면 강제 가입인가요?",
    answer: "절대 아닙니다. 무료 상담은 현재 보장 상태를 점검하고, 맞춤 설계안을 받아보는 것입니다. 가입 여부는 전적으로 고객님의 선택입니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">FAQ</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              자주 묻는 질문
            </h2>
          </div>
        </ScrollAnimation>

        <div className="border-t border-line">
          {faqs.map((faq, i) => (
            <ScrollAnimation key={i} delay={i * 60}>
              <div className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                >
                  <span className="text-[15px] font-medium text-heading pr-8 group-hover:text-primary transition-colors duration-200">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-body leading-relaxed pr-4 md:pr-12">{faq.answer}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
