import type { ComponentPropsWithoutRef } from "react";

export const PythonIcon = (
	props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 255"
			width={props.size}
			height={props.size}
			className={props.className}
			{...props}
		>
			<path
				fill="#306998"
				d="M126.9 0C108.1 0 92.6 1.5 92.6 1.5v42.6s15.7-.1 25.3 1.1c10.3 1.2 12.1 3.6 12.1 11.2v20.2H85.4C52 76.6 52 102.2 52 102.2v32.6h40.5v-11c0-9.7 6.1-10.5 13.4-10.5h57.7c23.9 0 34.3-9.7 34.3-33.1V45.3C198 20.1 185.8 0 126.9 0z"
			/>
			<circle cx="101.3" cy="30.7" r="10.2" fill="#fff" />
			<path
				fill="#FFD43B"
				d="M129.1 255c18.8 0 34.3-1.5 34.3-1.5v-42.6s-15.7.1-25.3-1.1c-10.3-1.2-12.1-3.6-12.1-11.2v-20.2h44.6c33.4 0 33.4-25.6 33.4-25.6v-32.6H163v11c0 9.7-6.1 10.5-13.4 10.5H91.9c-23.9 0-34.3 9.7-34.3 33.1v45.3c0 25.2 12.2 45.3 71.5 45.3z"
			/>
			<circle cx="154.7" cy="224.3" r="10.2" fill="#fff" />
		</svg>
	);
};
