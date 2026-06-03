import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up"
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
