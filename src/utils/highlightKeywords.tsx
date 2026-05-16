import type { ReactNode } from "react";

const KEYWORDS = [
  "Biomedical Signal Processing",
  "biomedical signal processing",
  "Biomedical Signal Analysis",
  "Deep Learning",
  "deep learning",
  "1D CNNs",
  "1D CNN",
  "Convolutional Neural Networks",
  "Sleep Apnea Detection",
  "sleep apnea detection",
  "ECG Signal Processing",
  "ECG analysis",
  "ECG signal analysis",
  "ECG",
  "artificial intelligence",
  "Machine Learning",
  "machine learning",
  "AI-assisted",
  "AI-driven",
  "AI",
]
  .sort((a, b) => b.length - a.length)
  .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

const pattern = new RegExp(`(${KEYWORDS.join("|")})`, "gi");

export function highlightKeywords(text: string): ReactNode[] {
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (!part) return null;
    const isKeyword = KEYWORDS.some((k) => part.toLowerCase() === k.toLowerCase());
    if (isKeyword) {
      return (
        <strong key={`${i}-${part}`} className="text-keyword">
          {part}
        </strong>
      );
    }
    return part;
  });
}
