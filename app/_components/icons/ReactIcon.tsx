import type { ComponentPropsWithoutRef } from "react";

export const ReactIcon = (
	props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			viewBox="0 0 256 256"
			fill="none"
			className={props.className}
			{...props}
		>
			<rect width="256" height="256" fill="none" />
			<circle cx="128" cy="128" r="28" fill="#61DAFB" />
			<g stroke="#61DAFB" strokeWidth="16" fill="none">
				<ellipse
					rx="56"
					ry="128"
					cx="128"
					cy="128"
					transform="rotate(0 128 128)"
				/>
				<ellipse
					rx="56"
					ry="128"
					cx="128"
					cy="128"
					transform="rotate(60 128 128)"
				/>
				<ellipse
					rx="56"
					ry="128"
					cx="128"
					cy="128"
					transform="rotate(120 128 128)"
				/>
			</g>
		</svg>
	);
};
