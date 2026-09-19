import Link from "next/link";

export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span
        className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        aria-hidden="true"
      >
        <span className="absolute inset-1 rounded-lg bg-[radial-gradient(circle_at_30%_20%,rgba(139,240,207,0.32),transparent_58%)]" />
        <span className="relative text-[0.68rem] font-black tracking-[-0.08em] text-white">
          TX
        </span>
      </span>
      <span className={compact ? "sr-only" : "flex flex-col leading-none"}>
        <span className="text-sm font-bold tracking-[0.26em] text-white">
          TIVIX
        </span>
        <span className="mt-1 text-[0.5rem] font-medium tracking-[0.34em] text-slate-500">
          TECHNOLOGIES
        </span>
      </span>
      <span className="sr-only"> — início</span>
    </Link>
  );
}
