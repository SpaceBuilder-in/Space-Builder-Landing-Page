import Image from "next/image";

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <div className="overflow-hidden rounded-full relative w-[28px] h-[28px] md:w-[36px] md:h-[36px]">
        <Image
          src="/brand.png"
          fill
          className="border border-[3px] bg-[#e4c585] object-cover"
          alt="SpaceBuilder Logo"
        />
      </div>
      <span
        className="text-2xl md:text-4xl font-semibold tracking-tight text-[#e4c585]"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Space<span className="text-white font-semibold">Builder</span>
      </span>
    </span>
  );
}
