import { useEffect, useRef, useState } from "react";

export default function TypingText({
  phrases,
  typingSpeed = 42,
  deletingSpeed = 24,
  pauseMs = 1800,
  className = ""
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(phrases[0] ?? "");
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [phrases, reducedMotion]);

  useEffect(() => {
    if (!visible || reducedMotion || phrases.length === 0) return;

    const current = phrases[phraseIndex];
    let timeoutId;

    if (!isDeleting && text === current) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
    } else {
      const nextLength = isDeleting ? text.length - 1 : text.length + 1;
      timeoutId = setTimeout(
        () => setText(current.slice(0, nextLength)),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeoutId);
  }, [
    visible,
    reducedMotion,
    text,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseMs
  ]);

  return (
    <span ref={ref} className={`typing-text ${className}`.trim()} aria-live="polite">
      <span className="typing-text-value">{text}</span>
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}
