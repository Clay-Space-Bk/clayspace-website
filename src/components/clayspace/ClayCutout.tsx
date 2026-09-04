"use client";
import { useId } from "react";

/* --------------------------------------------------------------------------
   Clay Space cut-out.

   A flat brand-colour field with a vessel-shaped window punched through it,
   and a photograph sitting behind. This is the device from the brand deck's
   poster applications — chunky, hand-cut forms rather than neat geometry.

   Built as an SVG mask: the photo paints the full frame, then the colour rect
   is drawn over it everywhere the mask is white. The vessel is painted black
   into the mask, so the colour is withheld there and the photo shows through.
   -------------------------------------------------------------------------- */

export type CutoutShape = "jug" | "mug" | "amphora";

interface ShapeDef {
    /** Filled silhouette of the vessel body. */
    body: string;
    /** Stroked handles, unioned with the body inside the mask. */
    handles?: string[];
    handleWidth?: number;
}

// Drawn in a 600 x 600 field. Edges carry a deliberate wobble so the forms read
// as cut by hand, not constructed.
const SHAPES: Record<CutoutShape, ShapeDef> = {
    // Tall two-handled vessel — the silhouette from the deck's poster crops.
    // Handle endpoints sit inside the body edge so the strokes merge into one
    // shape instead of floating beside it.
    jug: {
        body:
            "M132 92c-2-26 16-40 46-40h244c30 0 48 14 46 40l-16 396c-2 48-34 76-96 78H244c-62-2-94-30-96-78L132 92Z",
        handles: [
            "M140 200c-88 8-120 62-116 122 4 62 46 100 118 106",
            "M460 200c88 8 120 62 116 122-4 62-46 100-118 106",
        ],
        handleWidth: 54,
    },
    // Straight-sided mug, one generous handle.
    mug: {
        body:
            "M118 92c-2-26 16-40 46-40h222c30 0 48 14 46 40l-16 396c-2 48-34 76-96 78h-90c-62-2-94-30-96-78L118 92Z",
        handles: [
            "M428 200c92 8 126 62 122 122-4 62-48 100-124 106",
        ],
        handleWidth: 56,
    },
    // Narrow neck, wide belly, two ear handles off the shoulder.
    amphora: {
        body:
            "M228 54c-4-20 8-32 30-32h84c22 0 34 12 30 32l-14 96c94 42 148 122 146 222-2 126-88 208-204 208S94 498 92 372c-2-100 52-180 146-222Z",
        handles: [
            "M238 100c-84 26-130 84-134 162",
            "M362 100c84 26 130 84 134 162",
        ],
        handleWidth: 46,
    },
};

interface Props {
    /** Photo behind the cut-out — a path under /public. */
    src: string;
    /** Describe the photograph; the vessel window is decoration. */
    alt: string;
    shape?: CutoutShape;
    /** The surrounding field. Defaults to brand orange. */
    color?: string;
    /** Width : height of the frame. 1 = square, matching the deck's posters. */
    ratio?: number;
    /** Where the vessel sits in a wide frame — leaves room for type beside it. */
    align?: "center" | "left" | "right";
    /** Size of the vessel relative to the frame's short edge. */
    scale?: number;
    className?: string;
    style?: React.CSSProperties;
}

const ClayCutout: React.FC<Props> = ({
    src,
    alt,
    shape = "jug",
    // A custom property, not a hex — applied via `style` above, because
    // var() does not resolve in an SVG presentation attribute.
    color = "var(--cs-orange)",
    ratio = 1,
    align = "center",
    scale = 1,
    className,
    style,
}) => {
    const uid = useId().replace(/:/g, "");
    const maskId = `clay-cutout-${uid}`;
    const def = SHAPES[shape];

    const W = 600;
    const H = Math.round(W / ratio);
    // Fit the vessel to the frame's short edge so it stays whole at any ratio,
    // then place it. Wide cards park it off-centre to leave room for type.
    const k = (Math.min(W, H) / 600) * scale;
    const cx = align === "left" ? W * 0.3 : align === "right" ? W * 0.7 : W / 2;
    const cy = H / 2;

    return (
        <svg
            className={className}
            style={{ display: "block", width: "100%", height: "auto", ...style }}
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            aria-label={alt}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
                    {/* white keeps the colour field, black opens the window */}
                    <rect x="0" y="0" width={W} height={H} fill="#fff" />
                    <g transform={`translate(${cx} ${cy}) scale(${k}) translate(-300 -292)`}>
                        <path d={def.body} fill="#000" />
                        {def.handles?.map((d, i) => (
                            <path
                                key={i}
                                d={d}
                                fill="none"
                                stroke="#000"
                                strokeWidth={def.handleWidth}
                                strokeLinecap="round"
                            />
                        ))}
                    </g>
                </mask>
            </defs>

            {/* the photograph, cropped to fill */}
            <image
                href={src}
                x="0"
                y="0"
                width={W}
                height={H}
                preserveAspectRatio="xMidYMid slice"
            />

            {/* the colour field, withheld wherever the vessel is */}
            <rect x="0" y="0" width={W} height={H} style={{ fill: color }} mask={`url(#${maskId})`} />
        </svg>
    );
};

export default ClayCutout;
