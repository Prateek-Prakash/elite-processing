import Image from "next/image";
import { company } from "@/lib/content";

// Renders the brand logo, swapping to a white-text variant in dark mode.
// Both images are tiny; only one is visible per theme via CSS.
export default function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src="/logo.png"
        alt={company.name}
        width={920}
        height={265}
        priority={priority}
        className={`${className} dark:hidden`}
      />
      <Image
        src="/logo-dark.png"
        alt={company.name}
        width={920}
        height={265}
        priority={priority}
        className={`hidden dark:block ${className}`}
      />
    </>
  );
}
