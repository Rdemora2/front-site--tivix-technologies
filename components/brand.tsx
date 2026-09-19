import Image from "next/image";
import Link from "next/link";

import tivixLogo from "@/public/images/logo-tivix-full.png";

type BrandProps = Readonly<{
  compact?: boolean;
  priority?: boolean;
}>;

export default function Brand({
  compact = false,
  priority = false,
}: BrandProps) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label="Tivix Technologies — início"
    >
      <Image
        src={tivixLogo}
        alt=""
        priority={priority}
        sizes={compact ? "88px" : "116px"}
        className={
          compact
            ? "brand-logo h-auto w-[5.5rem] transition duration-300 group-hover:opacity-80"
            : "brand-logo h-auto w-[6.5rem] transition duration-300 group-hover:opacity-80 sm:w-[7.25rem]"
        }
      />
    </Link>
  );
}
