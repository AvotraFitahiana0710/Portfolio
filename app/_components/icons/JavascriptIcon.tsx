import type { ComponentPropsWithoutRef } from "react";

export const JavascriptIcon = (
	props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			width={props.size}
			height={props.size}
			fill="none"
			className={props.className}
			{...props}
		>
			<rect width="256" height="256" rx="32" fill="#F7DF1E" />
			<path
				fill="#000"
				d="M67.2 204.7l19.4-11.7c3.7 6.5 7.1 12 15.2 12 7.8 0 12.7-3.1 12.7-15.3V111.6h24.1v79.9c0 24.9-14.6 36.3-35.9 36.3-19.2 0-30.3-9.9-35.5-23Zm89.4-2.6 19.4-11.2c5.1 8.4 11.8 14.6 23.7 14.6 9.9 0 16.2-4.9 16.2-11.6 0-8-6.4-10.9-17.2-15.6l-5.9-2.5c-17.1-7.3-28.5-16.5-28.5-35.9 0-17.9 13.6-31.5 34.9-31.5 15.1 0 25.9 5.3 33.7 19.3l-18.4 11.8c-4.1-7.3-8.5-10.2-15.2-10.2-6.9 0-11.2 4.4-11.2 10.2 0 7.1 4.4 10 14.5 14.3l5.9 2.5c20.2 8.6 31.6 17.4 31.6 37.2 0 21.3-16.8 33.1-39.4 33.1-22.1 0-36.4-10.6-43.4-24.5Z"
			/>
		</svg>
	);
};
