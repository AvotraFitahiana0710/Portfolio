import type { ComponentPropsWithoutRef } from "react";

export const FlutterIcon = (
	props: ComponentPropsWithoutRef<"svg"> & { size?: number },
) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={props.size}
			height={props.size}
			className={props.className}
			{...props}
		>
			<path
				fill="#02569B"
				d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46z"
			/>
		</svg>
	);
};
