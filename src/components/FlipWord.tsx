import { useState, useEffect } from "react";

const WORDS = ["Space", "Business", "Brand", "Future", "Website"];

export default function FlipWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span
        key={i}
        className="block animate-flip-in bg-gradient-to-br from-gold-1 via-gold-2 to-gold-3 bg-clip-text text-transparent"
      >
        {WORDS[i]}
      </span>
    </span>
  );
}
