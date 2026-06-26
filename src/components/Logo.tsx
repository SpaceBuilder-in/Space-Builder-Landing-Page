import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand.png"
        width={size}
        height={size}
        className="border border-[2.5px] rounded-full bg-[#e4c585] border-[#e4c585]/40"
        alt="SpaceBuilder Logo"
      />
      <span
        className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight text-[#e4c585]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Space<span className="text-accent">Builder</span>
      </span>
    </span>
  );
}
