/**
 * The site's entire icon needs, as inline SVG.
 *
 * These replace Font Awesome. The whole site rendered exactly three icons — a
 * close cross and two chevrons — which was costing a 456 KB stylesheet, six
 * font files, and an unresolved Pro licence. Two of the usages were on
 * `fa-light`, a Pro-only weight Font Awesome Free does not include.
 *
 * Inline SVG has no licence, no network request and no font-loading flash.
 * `currentColor` means they inherit their surrounding text colour, so the
 * existing button styles keep working untouched.
 */

type IconProps = {
	size?: number;
	className?: string;
	/** Decorative by default: these sit inside buttons that carry their own label. */
	title?: string;
};

function svgProps({ size = 16, className, title }: IconProps) {
	return {
		width: size,
		height: size,
		viewBox: '0 0 16 16',
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: 1.6,
		strokeLinecap: 'round' as const,
		strokeLinejoin: 'round' as const,
		className,
		'aria-hidden': title ? undefined : true,
		role: title ? 'img' : undefined,
		focusable: false
	};
}

/** Close / dismiss. Replaces fa-times, fa-xmark. */
export function CloseIcon(props: IconProps) {
	return (
		<svg {...svgProps(props)}>
			{props.title ? <title>{props.title}</title> : null}
			<path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
		</svg>
	);
}

/** Replaces fa-angle-left. */
export function ChevronLeftIcon(props: IconProps) {
	return (
		<svg {...svgProps(props)}>
			{props.title ? <title>{props.title}</title> : null}
			<path d="M10 3l-5 5 5 5" />
		</svg>
	);
}

/** Replaces fa-angle-right. */
export function ChevronRightIcon(props: IconProps) {
	return (
		<svg {...svgProps(props)}>
			{props.title ? <title>{props.title}</title> : null}
			<path d="M6 3l5 5-5 5" />
		</svg>
	);
}
