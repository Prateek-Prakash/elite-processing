import { US_MAP_VIEWBOX, usStatePaths } from "@/lib/usStates";
import { approvedStates, upcomingStates } from "@/lib/content";

const approved = new Set(approvedStates);
const upcoming = new Set(upcomingStates);

// Small eastern states get external callout labels (north -> south) so their
// abbreviations don't overlap on the map.
const EXTERNAL = ["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD", "DC"];

// Manual label nudges for states whose geometric centroid lands awkwardly
// (e.g. Florida's centroid falls in the Gulf due to the panhandle/peninsula L).
const LABEL_OVERRIDES: Record<string, { cx: number; cy: number }> = {
  Florida: { cx: 762, cy: 476 },
};
const EXT_X = 1024; // label column, to the right of the map
const EXT_Y0 = 70; // first external label y
const EXT_DY = 30; // spacing between external labels

function statusOf(name: string) {
  if (approved.has(name)) return "approved" as const;
  if (upcoming.has(name)) return "upcoming" as const;
  return "other" as const;
}

const fillFor = {
  approved: "var(--color-rose-primary)",
  upcoming: "var(--color-rose-soft)",
  other: "var(--tint)",
};
// Label color chosen for contrast against each fill.
const textFor = {
  approved: "#ffffff",
  upcoming: "var(--color-rose-deep)",
  other: "var(--ink-soft)",
};

export default function UsMap() {
  const [, , vbW, vbH] = US_MAP_VIEWBOX.split(" ").map(Number);

  return (
    <figure className="w-full">
      <svg
        viewBox={`0 0 ${vbW + 110} ${vbH}`}
        role="img"
        aria-label="Map of the United States showing approved and upcoming states"
        className="h-auto w-full"
      >
        {/* State shapes */}
        {usStatePaths.map((s) => {
          const status = statusOf(s.name);
          const label =
            status === "approved"
              ? `${s.name} — Approved`
              : status === "upcoming"
                ? `${s.name} — Coming soon`
                : s.name;
          return (
            <path
              key={s.name}
              d={s.d}
              fill={fillFor[status]}
              stroke="var(--surface)"
              strokeWidth={1.2}
              className="transition-[fill] duration-200 hover:fill-[var(--color-rose-deep)]"
            >
              <title>{label}</title>
            </path>
          );
        })}

        {/* In-place abbreviations for larger states */}
        {usStatePaths
          .filter((s) => s.abbr && !EXTERNAL.includes(s.abbr))
          .map((s) => {
            const pos = LABEL_OVERRIDES[s.name] ?? { cx: s.cx, cy: s.cy };
            return (
            <text
              key={`t-${s.abbr}`}
              x={pos.cx}
              y={pos.cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={15}
              fontWeight={800}
              fill={textFor[statusOf(s.name)]}
              style={{ pointerEvents: "none", letterSpacing: "0.3px" }}
            >
              {s.abbr}
            </text>
            );
          })}

        {/* External callouts for small eastern states */}
        {EXTERNAL.map((abbr, i) => {
          const s = usStatePaths.find((p) => p.abbr === abbr);
          if (!s) return null;
          const ly = EXT_Y0 + i * EXT_DY;
          return (
            <g key={`ext-${abbr}`} style={{ pointerEvents: "none" }}>
              <line
                x1={s.cx}
                y1={s.cy}
                x2={EXT_X - 4}
                y2={ly}
                stroke="var(--color-rose-soft)"
                strokeWidth={0.8}
              />
              <circle cx={s.cx} cy={s.cy} r={1.8} fill="var(--color-rose-deep)" />
              <text
                x={EXT_X}
                y={ly}
                dominantBaseline="central"
                fontSize={15}
                fontWeight={800}
                fill="var(--ink)"
                style={{ letterSpacing: "0.3px" }}
              >
                {abbr}
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-soft">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-rose-primary" /> Approved (
          {approvedStates.length})
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-rose-soft" /> Coming soon (
          {upcomingStates.length})
        </span>
      </figcaption>
    </figure>
  );
}
